// const ChocolateChip = require('./ChocolateChip')
const CookieFactory = require('./CookieFactory')
const fs = require('fs')

let options =  fs.readFileSync('cookies.txt', 'utf8').split('\n')

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies[0])


let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batch_of_cookies)

console.log('sugar free cakes are :')
for ( let i = 0; i < sugarFreeFoods.length; i++ ) {
    console.log(sugarFreeFoods[i].name)
}