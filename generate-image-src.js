import fs from 'fs'

const generateComponentIndex = () => {
  const componentsDir = 'static/images/gallery'
  const indexFile = 'src/lib/static-exports/index.js'
  let exportItems = 'export default [\n'

  fs.readdirSync(componentsDir).forEach((file) => {
    exportItems += `\t'${componentsDir}/${file}',\n`
  })
  exportItems += ']'
  if (fs.readFileSync(indexFile, 'utf8') !== exportItems) {
    fs.writeFileSync(indexFile, exportItems)
  }
}

export default generateComponentIndex