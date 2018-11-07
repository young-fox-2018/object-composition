"use strict"

const fs = require('fs')
const ChocolateChip = require('./ChocolateChip.js')
const PeanutButter = require('./PeanutButter.js')
const OtherCookies = require('./OtherCookies.js')
const  Ingridients = require('./Ingridients.js')

class CookieFactory {
    static create(options) {
        let file = fs.readFileSync(options, 'utf8')
        file = file.split('\n')

        let cookiesArr = []

        for (let i = 0; i < file.length; i++) {
            let totalIngredients = file[i].split('=')
            let arrIngridents = []
            let cookiesType = totalIngredients[0].trim()
            let cookie = null
            let hasSugar = null
            totalIngredients = totalIngredients.join(',')
            totalIngredients = totalIngredients.split(',')

            for ( let j = 1; j < totalIngredients.length; j++) {
                let ingridentObj = {}
                let ingrident = totalIngredients[j].split(':')

                ingridentObj = {
                        name : ingrident[1].trim(),
                        amount: ingrident[0].trim()
                }

                if (ingridentObj.name == 'sugar') {
                    hasSugar = true
                }

                let instIngrident = new Ingridients(ingridentObj)
                arrIngridents.push(instIngrident)
            }

            if (cookiesType === 'peanut butter') {
                cookie = new PeanutButter(cookiesType, arrIngridents)
            } else if (cookiesType === 'chocolate chip') {
                cookie = new ChocolateChip(cookiesType, arrIngridents)
            } else {
                cookie = new OtherCookies(cookiesType, arrIngridents)
            } 

            if (hasSugar) {
                cookie.hasSugar = true
            }
            
            cookiesArr.push(cookie)
        }

        return cookiesArr
    }

    static cookieRecommendation (day, batchofCookies) {
        // console.log(batchofCookies)
        let arrFreeSugar = []
            for (let i = 0; i < batchofCookies.length; i++) {
                if (batchofCookies[i].hasSugar === null){
                    arrFreeSugar.push(batchofCookies[i].name)
                } else {
                }
            }
        return arrFreeSugar
    }
}

module.exports = CookieFactory