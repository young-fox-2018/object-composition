const PeanutButter = require('./peanutButter')
const ChocolateChip = require('./chocolateChip')
const ChocolateCheese = require('./chocolateCheese')

class CookieFactory {
    constructor() {
    }

    static create(options) {
        let cookieList = []
        options.forEach(cookie => {
            cookie  = cookie.split('=')
            if(cookie[0].slice(0,cookie[0].length-1) === 'peanut butter') cookieList.push(new PeanutButter(cookie));
            else if (cookie[0].slice(0,cookie[0].length-1) === 'chocolate chip') cookieList.push(new ChocolateChip(cookie));
            else if (cookie[0].slice(0,cookie[0].length-1) === 'chocolate cheese') cookieList.push(new ChocolateCheese(cookie));
        })
        return cookieList
    }
    
    static cookieRecommendation(day,menu) {
        let index = 0
        if (day === "tuesday") {
            menu.forEach((cookie) => {
                let counterSugar = 0
                cookie.ingredient.forEach(items => {
                    if (items.item === 'sugar') counterSugar++
                })
                if (counterSugar === 0) console.log(`${index+=1}. ${cookie.name}`)
            })
        }
    }
}

module.exports = CookieFactory