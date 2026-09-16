import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const pages = JSON.parse(readFileSync(new URL('./seo-pages.json', import.meta.url), 'utf8'))
const origin = 'https://www.masaruinaba.com'
const root = 'dist'
const read = path => readFileSync(join(root, path), 'utf8')
function checkLocal(url) {
  const parsed = new URL(url, origin)
  if (parsed.origin !== origin) return
  const path = decodeURIComponent(parsed.pathname)
  assert(existsSync(join(root, path.endsWith('/') ? path + 'index.html' : path)), `Broken local discovery link: ${url}`)
}
const titles = new Set()
for (const page of pages) {
  const source = read(page.path + 'index.html')
  assert(/<meta\s+charset=/i.test(source.slice(0, 1024)), `Late charset: ${page.path}`)
  const title = source.match(/<title>(.*?)<\/title>/s)?.[1]
  assert.equal(title, page.title)
  assert(!titles.has(title), `Duplicate title: ${title}`)
  titles.add(title)
  const metadata = new Map()
  for (const match of source.matchAll(/<meta\b[^>]*>/gi)) {
    const attrs = Object.fromEntries([...match[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]))
    const key = attrs.name || attrs.property
    if (!key) continue
    assert(!metadata.has(key), `Duplicate metadata ${key}: ${page.path}`)
    metadata.set(key, attrs.content)
  }
  assert.equal(metadata.get('description'), page.description)
  assert.equal(metadata.get('og:description'), page.description)
  assert.equal(metadata.get('twitter:description'), page.description)
  assert.equal(metadata.get('og:title'), page.title)
  assert.equal(metadata.get('twitter:title'), page.title)
  assert.equal(metadata.get('og:url'), origin + page.path)
  assert.equal([...source.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)].length, 1)
  assert(source.includes(`rel="canonical" href="${origin + page.path}"`))
  assert.equal(metadata.get('robots').startsWith('noindex'), !page.indexable)
  checkLocal(metadata.get('og:image'))
  assert.equal(metadata.get('twitter:image'), metadata.get('og:image'))
  checkLocal(origin + page.path)
}
const sitemap = read('sitemap.xml')
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
assert.deepEqual(urls, pages.filter(page => page.indexable).map(page => origin + page.path))
urls.forEach(checkLocal)
assert(read('robots.txt').includes(`Sitemap: ${origin}/sitemap.xml`))
for (const path of ['llms.txt', 'portfolio.md']) {
  const text = read(path)
  assert(text.startsWith('# Masaru Inaba'))
  for (const match of text.matchAll(/\]\((https?:\/\/[^)]+)\)/g)) checkLocal(match[1])
}
const json = read('index.html').match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1]
const schema = JSON.parse(json)
assert.equal(schema['@context'], 'https://schema.org')
assert.deepEqual(schema['@graph'].map(item => item['@type']), ['Person', 'WebSite', 'ProfilePage'])
console.log(`SEO checks passed: ${pages.length} pages, ${urls.length} sitemap URLs, structured data, and local discovery links.`)
