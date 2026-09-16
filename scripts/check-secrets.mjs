import { execFileSync } from 'node:child_process'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

// Report locations only; never print credential values into build logs.
const files = new Set(execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' }).split('\0').filter(Boolean))
function addDirectory(directory) {
  if (!existsSync(directory)) return
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name)
    if (entry.isDirectory()) addDirectory(file)
    else if (entry.isFile()) files.add(file)
  }
}
// Include untracked public assets and the actual artifacts that will be served.
addDirectory('public')
if (process.argv.includes('--built')) {
  if (!existsSync('dist/index.html')) throw new Error('Build output is missing; run the build first.')
  addDirectory('dist')
}
const patterns = [
  ['Google API key', /AIza[0-9A-Za-z_-]{35}/g],
  ['private key', /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/g],
  ['GitHub token', /(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})/g],
  ['AWS access key', /(?:AKIA|ASIA)[A-Z0-9]{16}/g],
  ['service token', /(?:sk-(?:live-|proj-|ant-)?[A-Za-z0-9_-]{32,}|xox[baprs]-[A-Za-z0-9-]{20,})/g],
  ['credential URL', /https?:\/\/[^\s/:<>]+:[^\s/@<>]{8,}@/g],
  ['credential assignment', /(?:api[_-]?key|secret[_-]?key|client[_-]?secret|access[_-]?token|password)\s*[=:]\s*["'][A-Za-z0-9_+/=-]{24,}["']/gi],
]
let failed = false
for (const file of files) {
  let source
  try { source = readFileSync(file, 'utf8') } catch (error) {
    if (error.code === 'ENOENT') continue
    throw error
  }
  if (source.includes('\0')) continue
  for (const [label, pattern] of patterns) {
    for (const match of source.matchAll(pattern)) {
      const line = source.slice(0, match.index).split('\n').length
      console.error(`Potential ${label}: ${file}:${line} (value withheld)`)
      failed = true
    }
  }
}
if (failed) process.exit(1)
console.log(`Secret pattern scan passed (${files.size} source/artifact files).`)
