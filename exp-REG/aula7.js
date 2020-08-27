const {cpfs2, cpfs} = require('./base');

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

console.log(cpfs.match(cpfRegExp));
console.log(cpfs2.match(cpfRegExp));