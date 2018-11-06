const fs = require('fs')
const CookieFactory = require('./cookieFactory.js')
const path = './cookies.txt'

let options = fs.readFileSync(path,'utf8')
options = options.split('\n')
let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies)

console.log("Sugar free cakes are : " )
let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday",batch_of_cookies)
