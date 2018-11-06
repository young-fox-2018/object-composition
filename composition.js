"use strict"

const util = require("util")
const fs = require('fs')
const options = fs.readFileSync('cookies.txt', 'utf8').split('\n')
const CookieFactory = require('./cookieFactory')

let batch_of_cookies = CookieFactory.create(options)
console.log(util.inspect(batch_of_cookies, {showHidden: false, depth: null}));

let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies)
console.log("sugar free cakes are :")
sugarFreeFoods.forEach(item => console.log(item))