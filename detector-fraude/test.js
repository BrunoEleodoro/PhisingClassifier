
const fs = require('fs')
const htmlentities = require('htmlentities')

let contents = JSON.parse(fs.readFileSync('./fraudes_compilado.json'))
console.log(htmlentities.decode(contents[4].description))