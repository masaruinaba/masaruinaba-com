import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

// Report locations only; never print credential values into build logs.
const files = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' }).split('\0').filter(Boolean)
let failed = false
for (const file of files) {
  let source
  try { source = readFileSync(file, 'utf8') } catch (error) {
    if (error.code === 'ENOENT') continue
    throw error
  }
  if (source.includes('\0')) continue
  for (const match of source.matchAll(/AIza[0-9A-Za-z_-]{35}/g)) {
    const line = source.slice(0, match.index).split('\n').length
    console.error(`Embedded Google API key: ${file}:${line}`)
    failed = true
  }
}
if (failed) process.exit(1)
console.log('No embedded Google API keys found in tracked files.')
