const {html} = require('./base');

// console.log(html.match(/<.+>.+<\/.+>/g)); //gredy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); //non-gredy