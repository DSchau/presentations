const path = require('path')
const fs = require('fs-extra')

const base = path.resolve('presentations')
const destination = path.resolve('public')
const publishDir = 'dist'

async function copy() {
  const presentations = await fs.readdir(base)

  await Promise.all(
    presentations.map(presentation => {
      const folder = path.join(base, presentation, publishDir)

      return fs.copy(folder, 
        path.join(destination, presentation)  
      )
    })
  )
}

copy()
