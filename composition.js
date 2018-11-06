"use strict"
const fs = require("fs")
const options = fs.readFileSync("./cookies.txt","utf8")

const CookieFactory = require("./CookieFactory.js")

// const Ingredient = require("./Ingredient.js")
// const OtherCookie = require("./OtherCookie.js")
// const ChocolateChip = require("./ChocolateChip.js")
// const PeanutButter = require("./PeanutButter.js")

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies)
// console.log(batch_of_cookies[1])


console.log("\n"+"-------------- COOKIE RECOMMMENDATION--------------")
let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies)

// console.log(sugarFreeFoods)
console.log("")
console.log("sugar free cakes are :")
for(let i = 0; i < sugarFreeFoods.length; i++){
    console.log(sugarFreeFoods[i].name)
}