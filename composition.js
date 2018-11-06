"use strict"

const fs = require("fs")
const options = fs.readFileSync("./cookies.txt","utf8")
const Ingredient = require("./Ingredient.js")
const OtherCookie = require("./OtherCookie.js")
const ChocolateChip = require("./ChocolateChip.js")
const PeanutButter = require("./PeanutButter.js")
const Cookie = require("./Cookie.js")


class CookieFactory{
    static create(cookies){
        let dataCookies = []
        let dataPerLine = options.split("\n")
        for( let i = 0; i < dataPerLine.length; i++){
            let listCookies = dataPerLine[i].split(" = ")
            // console.log(listCookies)
            // console.log("0=====",listCookies[0])
            // console.log("1=====",listCookies[1])
            if(listCookies[0] === "peanut butter"){
                let ingredients = CookieFactory.addIngredient(listCookies[1])
                let cookie = new PeanutButter(listCookies[0], ingredients)
                dataCookies.push(cookie)
                // console.log("PPP",ingredients)
            } else if( listCookies[0] === "chocolate chip"){
                let ingredients = CookieFactory.addIngredient(listCookies[1])
                let cookie = new ChocolateChip(listCookies[0], ingredients)
                dataCookies.push(cookie)
                // console.log("CCC",ingredients)
            } else {
                let ingredients = CookieFactory.addIngredient(listCookies[1])

                let cookie = new OtherCookie(listCookies[0], ingredients)
                dataCookies.push(cookie)
                // console.log("OOO",ingredients)
            }   
        }
        // console.log(dataCookies)
        return dataCookies
    }

    static addIngredient(ingredient){
        let splitKoma = ingredient.split(", ")
        // return dataIngredient
        let arrObj = []
        for(let i = 0; i < splitKoma.length; i++){
            let splitTitikDua = splitKoma[i].split(" : ")
            let obj = {
                name: splitTitikDua[1],
                amount: splitTitikDua[0]
            }
            let classIngredient = new Ingredient(obj)
            arrObj.push(classIngredient)
        }
        // console.log("aaaaaa",arrObj)
        return arrObj
    }

    static cookieRecommendation(day, data){
        let sugarCookies = []
        for( let i = 0; i < data.length; i++){
            var sugarInCookies = data[i].ingredients.filter( word => word.name === 'sugar')
            // console.log("??????",sugarInCookies)   
            if(sugarInCookies.length === 0){
                sugarCookies.push(data[i])
            } else {
                data[i].has_sugar = true
            }
        }

        if(day === "tuesday"){
            return sugarCookies
        } else {
            return data
        }
    }  

}   


let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies)
// console.log(batch_of_cookies[1])


console.log("\n"+"-------------- COOKIE RECOMMMENDATION--------------")
let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies)

// console.log(sugarFreeFoods)
console.log("sugar free cakes are :")
for(let i = 0; i < sugarFreeFoods.length; i++){
    console.log(sugarFreeFoods[i].name)
}