const fs = require('fs')
const PeanutButter = require('./peanutButter')
const ChocolateChip = require('./chocolateChip')
const ChocolateCheese = require('./chocolateCheese')
const ChocolateButter = require('./chocolateButter')

class CookieFactory {
    static readFileCookie(options) {
        return fs.readFileSync(options, 'utf8')
    }

    static create(options) {
        let cookie = this.readFileCookie(options).split('\n')
        let result = []
        for (let i = 0; i < cookie.length; i++) {
            if (cookie[i] == 'peanut butter') {
                let peanutButter = new PeanutButter(cookie[i])
                peanutButter.ingredientsSet(cookie[i])
                peanutButter.sugarCheck()
                peanutButter.bake()
                result.push(peanutButter)
            }
            else if (cookie[i] == 'chocolate chip') {
                let chocolateChip = new ChocolateChip(cookie[i])
                chocolateChip.ingredientsSet(cookie[i])
                chocolateChip.sugarCheck()
                chocolateChip.bake()
                result.push(chocolateChip)
            }
            else if (cookie[i] == 'chocolate cheese') {
                let chocolateCheese = new ChocolateCheese(cookie[i])
                chocolateCheese.ingredientsSet(cookie[i])
                chocolateCheese.sugarCheck()
                chocolateCheese.bake()
                result.push(chocolateCheese)
            }
            else if (cookie[i] == 'chocolate butter') {
                let chocolateButter = new ChocolateButter(cookie[i])
                chocolateButter.ingredientsSet(cookie[i])
                chocolateButter.sugarCheck()
                chocolateButter.bake()
                result.push(chocolateButter)
            }
        }
        return result
    }

    static cookieRecommendations(day, input) {
        let arr = []
        if (day !== "tuesday") {
            for (let i = 0; i < input.length; i++) {
                arr.push(input[i])                
            }
        }
        else {
            for (let i = 0; i < input.length; i++) {
                if (input[i].hasSugar === false) {
                    arr.push(input[i])
                }
            }
        }
        return arr
    }
}

module.exports = CookieFactory