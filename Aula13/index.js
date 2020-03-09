//               0123456789
let umaString = 'Um "texto"';

umaString = "Um \"texto\"";

umaString = "Um \\texto\"";

console.log(umaString.charAt(6));
console.log(umaString.charCodeAt(6));

console.log(umaString.concat(" em", " um", " lindo", " dia."));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('o'));

console.log(umaString.match(/[a-z]/g));

console.log(umaString.replace('Um', 'Outro'))

console.log(umaString.length)

console.log(umaString.slice(2, 6))
console.log(umaString.substring(umaString.length - 5))

console.log(umaString.split('t', 3))

console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())