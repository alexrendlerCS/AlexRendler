#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const src = path.join(__dirname, '..', 'public', 'favicon.png')
const dest = path.join(__dirname, '..', 'public', 'favicon.ico')

if (!fs.existsSync(src)) {
  console.error('Source PNG not found:', src)
  process.exit(1)
}

async function run() {
  try {
    // Try png-to-ico first (small, purpose-built)
    const pngToIco = require('png-to-ico')
    const buf = await pngToIco([src])
    fs.writeFileSync(dest, buf)
    console.log('favicon.ico generated at', dest)
  } catch (err) {
    console.error('png-to-ico not available or failed.')
    console.error('To generate favicon.ico automatically, run:')
    console.error('  npm install -D png-to-ico')
    console.error('then:')
    console.error('  npm run gen:favicon')
    process.exit(1)
  }
}

run()
