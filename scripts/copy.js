const path = require('path')
const fs = require('fs-extra')

const base = path.resolve('presentations')
const destination = path.resolve('public')
const getPublishDirectory = dependencies => {
  const lookup = {
    'mdx-deck': 'dist',
    'spectacle': 'build',
    'spectacle-scripts': 'build',
    undefined: 'dist'
  }

  const lib = Object.keys(lookup).find(lib => dependencies[lib])
  return lookup[lib]
}

async function copy() {
  const presentations = await fs.readdir(base)

  await Promise.all(
    presentations.map(async presentation => {
      const folder = path.join(base, presentation)

      const { dependencies } = await fs.readJson(path.join(folder, 'package.json'))
      const publishDir = getPublishDirectory(dependencies)

      return fs.copy(
        path.join(folder, publishDir), 
        path.join(destination, presentation)  
      )
    })
  )
}

copy()
