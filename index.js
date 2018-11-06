const PeanutButter = require('./peanutbutter')
const ChocolateChip = require('./chocolatechip')
const ChocolateCheese = require('./chocolatecheese')
const ChocolateButter = require('./chocolatebutter')
const fs = require('fs')
const options = fs.readFileSync('./cookies.txt').toString().split('\n')

class CookieFactory {
    static create(options) {
        let arrCookies = []
        for (let i = 0; i < options.length; i++) {
            if (options[i] === 'peanut butter') {
                let peanutButter = new PeanutButter(options[i])
                peanutButter.setIngredient(options[i])
                peanutButter.checkSugar()
                arrCookies.push(peanutButter)
            } else if (options[i] === 'chocolate chip') {
                let chocChip = new ChocolateChip(options[i])
                chocChip.setIngredient(options[i])
                chocChip.checkSugar()
                arrCookies.push(chocChip)
            } else if (options[i] === 'chocolate cheese') {
                let chocCheese = new ChocolateCheese(options[i])
                chocCheese.setIngredient(options[i])
                chocCheese.checkSugar()
                arrCookies.push(chocCheese)
            } else if (options[i] === 'chocolate butter') {
                let chocButter = new ChocolateButter(options[i])
                chocButter.setIngredient(options[i])
                chocButter.checkSugar()
                arrCookies.push(chocButter)
            }
        }
        return arrCookies
    }

    static cookieRecommendation(day, input) {
        let arrSugarFree = []
        for (let i = 0; i < input.length; i++) {
            if (day !== 'tuesday') {
                arrSugarFree.push(input[i])
            } else {
                if (!input[i].has_sugar) {
                    arrSugarFree.push(input[i])
                }
            }
        }
        return arrSugarFree
    }
}

let batch_of_cookies = CookieFactory.create(options)

let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batch_of_cookies)
console.log('sugar free cakes are :')
for (let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i].name)
}
