const fs = require('fs')

// _redirects will be created or overwritten by default.
fs.copyFile('_redirects', './dist/_redirects', (err) => {
  if (err) throw err
  console.log('_redirects was copied to dist folder!')
})

fs.copyFile('_headers', './dist/_headers', (err) => {
  if (err) throw err
  console.log('_headers was copied to dist folder!')
})

