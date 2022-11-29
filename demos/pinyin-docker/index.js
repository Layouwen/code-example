const pinyin = require("pinyin");

const res = pinyin('小文', {style: 'normal'})
const spellFirst = res.map(item => item[0][0]).join('')
const spellAll = res.join('')
console.log(spellAll, spellFirst)

console.log('hello world')
