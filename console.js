const myModule = require('./exports.js');

console.log(myModule)

process.argv[2] = "Jorge"
process.argv[3] = "Lucas"

console.log(process.argv)
console.log('seu nome é', process.argv[2]+' '+process.argv[3])