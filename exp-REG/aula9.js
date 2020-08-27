const {lookahead} = require('./base');

console.log(lookahead);
// console.log(lookahead.match(/.*[^in]active$/gim));

//Positive lookahead (frases que tem active)
console.log(lookahead.match(/.+(?=[^in]active$)/gim));

//Negative lookahead (frases que tem active)
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

//Positive lookbehind (frases que tem active)
console.log(lookahead.match(/.+(?<=ONLINE\s+).*/gim));

//Negative lookbehind (frases que tem active)
console.log(lookahead.match(/.+(?<!ONLINE.*)$/gim));