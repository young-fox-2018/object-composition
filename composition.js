"use strict"

const CookieFactory = require('./CookieFactory.js') 

let batchofCookies = CookieFactory.create('ingredients.txt')
let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batchofCookies)
console.log(sugarFreeFoods)