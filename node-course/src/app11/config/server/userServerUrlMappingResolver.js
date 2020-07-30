const path = require('path')
const jsonfile = require('jsonfile')

module.exports = jsonfile.readFileSync(path.join(__dirname, 'userServerUrlMapping.json'))