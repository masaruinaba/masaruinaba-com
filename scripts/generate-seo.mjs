import { readFileSync, writeFileSync } from 'node:fs'
import ts from 'typescript'

const origin = 'https://www.masaruinaba.com'
const pages = JSON.parse(readFileSync(new URL('./seo-pages.json', import.meta.url), 'utf8'))
const image = `${origin}/portfolio-og-478b4fee0e1b.png`
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const check = process.argv.includes('--check')
let stale = false
function save(file, value) {
  let current = ''
  try { current = readFileSync(file, 'utf8') } catch (error) { if (error.code !== 'ENOENT') throw error }
  if (current === value) return
  if (check) { console.error(`SEO output needs updating: ${file}`); stale = true }
  else writeFileSync(file, value)
}

for (const page of pages) {
  const url = origin + page.path
  const meta = {
    description: page.description,
    author: 'Masaru Inaba',
    robots: page.indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow',
    'og:type': 'website', 'og:site_name': pages[0].title, 'og:locale': 'ja_JP',
    'og:url': url, 'og:title': page.title, 'og:description': page.description,
    'og:image': image, 'og:image:type': 'image/png', 'og:image:width': '1920', 'og:image:height': '1008',
    'og:image:alt': pages[0].title,
    'twitter:card': 'summary_large_image', 'twitter:site': '@im_inaba',
    'twitter:title': page.title, 'twitter:description': page.description,
    'twitter:image': image, 'twitter:image:alt': pages[0].title,
  }
  if (page.path === '/') meta.keywords = 'Masaru Inaba, ポートフォリオ, Portfolio, Webデザイン, コミュニケーションデザイン, フリーランスデザイナー, 名古屋, インタラクション, アニメーション'
  let block = `<title>${escape(page.title)}</title>\n<link rel="canonical" href="${url}">\n<link rel="describedby" href="/llms.txt" type="text/plain">\n`
  block += Object.entries(meta).map(([name, content]) => `<meta ${name.startsWith('og:') ? 'property' : 'name'}="${name}" content="${escape(content)}">`).join('\n')
  if (page.path === '/') {
    const person = { '@type': 'Person', '@id': `${origin}/#person`, name: 'Masaru Inaba', url: `${origin}/`, jobTitle: 'Freelance Designer', homeLocation: { '@type': 'Place', name: 'Nagoya, Japan' }, knowsAbout: ['Web Design', 'Communication Design'], sameAs: ['https://x.com/im_inaba', 'https://www.wantedly.com/id/masaruinaba'] }
    const schema = { '@context': 'https://schema.org', '@graph': [person, { '@type': 'WebSite', '@id': `${origin}/#website`, url: `${origin}/`, name: page.title, description: page.description, inLanguage: 'ja', creator: { '@id': person['@id'] } }, { '@type': 'ProfilePage', '@id': `${origin}/#profile`, url: `${origin}/`, name: page.title, mainEntity: { '@id': person['@id'] }, isPartOf: { '@id': `${origin}/#website` } }] }
    block += '\n<link rel="alternate" type="text/markdown" href="/portfolio.md" title="Portfolio overview">'
    block += `\n<script type="application/ld+json" id="portfolio-structured-data">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`
  }
  const files = [page.path.slice(1) + 'index.html']
  // The standalone build reserializes this copy; check its metadata in dist instead.
  if (page.path === '/special/balloon-portfolio/' && !check) files.push('public/special/balloon-portfolio/index.html')
  for (const file of files) {
    let source = readFileSync(file, 'utf8')
    source = source.replace(/<!-- SEO:start -->[\s\S]*?<!-- SEO:end -->\s*/g, '')
    source = source.replace(/<title>[\s\S]*?<\/title>\s*/g, '')
    source = source.replace(/<meta\b[^>]*>\s*/gi, tag => /(?:name|property)=["'](?:description|keywords|author|robots|og:[^"']+|twitter:[^"']+)["']/i.test(tag) ? '' : tag)
    source = source.replace(/<link\b[^>]*>\s*/gi, tag => /rel=["'](?:canonical|describedby)["']/i.test(tag) || /href=["']\/portfolio\.md["']/.test(tag) ? '' : tag)
    source = source.replace(/<script[^>]*id="portfolio-structured-data"[^>]*>[\s\S]*?<\/script>\s*/g, '')
    // Keep the encoding declaration at the start of head (within the first 1024 bytes).
    if (!/<meta\s+charset=[^>]+>/i.test(source)) throw new Error(`Missing charset: ${file}`)
    source = source.replace(/(<meta\s+charset=[^>]+>)\s*/i, `$1\n<!-- SEO:start -->\n${block}\n<!-- SEO:end -->\n`)
    save(file, source)
  }
}
const publicPages = pages.filter(page => page.indexable)
save('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${publicPages.map(page => `  <url><loc>${origin}${page.path}</loc></url>`).join('\n')}\n</urlset>\n`)
save('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`)

// Reuse the published portfolio data, so the text overview follows the visible list.
const code = ts.transpileModule(readFileSync('src/data/portfolio.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText
const { clientWorks, works } = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`)
const link = (title, path, text) => `- [${title.replaceAll('[', '\\[').replaceAll(']', '\\]')}](${new URL(path, origin + '/').href}): ${text}`
save('public/portfolio.md', `# Masaru Inaba — Portfolio\n\n${pages[0].description}\n\n## Profile\n\nFreelance designer based in Nagoya, Japan. Expertise: Web Design and Communication Design. Works with Studio, Inc. as a contract designer. This site is for prospective clients, collaborators, and people interested in design and interactive experiments.\n\n## Selected client work\n\nThese are selected design projects, not sites owned by Masaru Inaba.\n\n${clientWorks.map(work => link(work.title, work.url, `${work.year} — ${work.type}`)).join('\n')}\n\n## Playground\n\nInteractive experiments and small web apps. Some projects are hosted on external domains.\n\n${works.map(work => link(work.title, work.file, `${work.year} — ${work.type}`)).join('\n')}\n\n## Elsewhere\n\n- [X](https://x.com/im_inaba): Public social profile.\n- [Wantedly](https://www.wantedly.com/id/masaruinaba): Professional profile.\n`)
save('public/llms.txt', `# Masaru Inaba — Portfolio\n\n> Portfolio of Masaru Inaba, a freelance designer based in Nagoya, Japan, specializing in web design and communication design.\n\nFor prospective clients, collaborators, and people exploring interactive design. The site presents selected client work and a Playground of animations, visual experiments, and apps. Client project links and some apps lead to external websites.\n\n## Overview\n\n- [Portfolio overview](${origin}/portfolio.md): Profile, selected work, and Playground links in Markdown.\n\n## Main pages\n\n${publicPages.map(page => link(page.title, page.path, page.description)).join('\n')}\n\n## Elsewhere\n\n- [X](https://x.com/im_inaba): Public social profile.\n- [Wantedly](https://www.wantedly.com/id/masaruinaba): Professional profile.\n`)
if (stale) process.exit(1)
console.log(check ? 'SEO generated files are current.' : 'SEO metadata and discovery files generated.')
