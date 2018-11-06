"use strict"

const CookieFactory = require('./CookieFactory')

let batchofCookies = CookieFactory.create('cookies.txt')
console.log(batchofCookies)
let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batchofCookies)
console.log(sugarFreeFoods)
