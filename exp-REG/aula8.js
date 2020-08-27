const {html2} = require('./base');

console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/(\1)>/gi));
console.log(html2.replace(/(<(\w+)([\s\S]*?)>)(\3)(<\/(\2)>)/gi,'$1 "$3" $4'));

