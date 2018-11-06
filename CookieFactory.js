"use strict"

const fs = require('fs')
const ChocolateChip = require('./ChocolateChip')
const PeanutButter = require('./PeanutButter')
const OtherCookie = require('./OtherCookie')
const  Ingrident = require('./Ingrident')

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

                let instIngrident = new Ingrident(ingridentObj)
                arrIngridents.push(instIngrident)
            }

            if (cookiesType === 'peanut butter' || cookiesType === 'peanut butter crumbled') {
                cookie = new PeanutButter(cookiesType, arrIngridents)
            } else if (cookiesType === 'chocolate chip' || cookiesType === 'chocolate chip crumbled') {
                cookie = new ChocolateChip(cookiesType, arrIngridents)
            } else {
                cookie = new OtherCookie(cookiesType, arrIngridents)
            }

            if (hasSugar) {
                cookie.hasSugar = true
            }
            
            cookiesArr.push(cookie)
        }

        return cookiesArr
    }

    static cookieRecommendation (day, batchofCookies) {
        console.log(batchofCookies)
        let arrFreeSugar = []

        if (day == 'tuesday') {
            for (let i = 0; i < batchofCookies.length; i++) {
                if (batchofCookies[i].hasSugar === null){
                    arrFreeSugar.push(batchofCookies[i])
                } else {
                }
            }
        } else {
            return batchofCookies
        }

        return arrFreeSugar
    }
}

let batchofCookies = CookieFactory.create('cookies.txt')
let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batchofCookies)
console.log(sugarFreeFoods)
