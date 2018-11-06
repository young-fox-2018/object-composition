"use strict"

const fs = require('fs')
const option = fs.readFileSync('cookies.txt', 'utf8')

class Cookie {
    constructor (cookieName, ingredients) {
        this.name = cookieName
        this.status = 'mentah'
        this.ingredients = ingredients
        this.has_sugar = this.cekSugar()
    }

    bake () {
        this.status = 'selesai dimasak'
    }

    cekSugar() {
        let ing = this.ingredients

        for(let i = 0; i < ing.length; i++) {
            if(ing[i].name === 'sugar') {
                return true
            }
        }
        return false
    }
}

class Ingredients {
    constructor (option) {
       this.name = option['name']
       this.amount = option['amount']
    }
}

class PeanutButter extends Cookie {
    constructor (cookieName, ingredients) {
        super(cookieName, ingredients)
        this.peanut_count = 100
    }
}

class ChocholateChip extends Cookie {
    constructor (cookieName, ingredients) {
        super(cookieName, ingredients)
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie {
    constructor (cookieName, ingredients) {
        super(cookieName, ingredients)
        this.other_count = 150
    }
}

class CookieFactory {
    static create (option) {
        let listCookie = []
        let ingredients = []
        let list = option.split('\n')

        for(let i = 0; i < list.length; i++) {
            let listTwo = list[i].split(' = ')
            let nameCookie = listTwo[0]
            let bumbu  = listTwo[1].split(',')
            for(let j = 0; j < bumbu.length; j ++) {
                let newBumbu = bumbu[j].split(' : ')
                let obj = new Ingredients({name: newBumbu[1], amount: newBumbu[0]})
                ingredients.push(obj)
            }
            if(nameCookie === 'peanut butter') {
                listCookie.push(new PeanutButter(nameCookie, ingredients))
            } else if(nameCookie === 'chocolate chip') {
                listCookie.push(new ChocholateChip(nameCookie, ingredients))
            } else {
                listCookie.push(new OtherCookie(nameCookie, ingredients))
            }
            ingredients = []
        }
        return listCookie
    }

    static cookieRecommendation (day, list) {
        let recommend = []

        for(let i = 0; i < list.length; i++) {
            if(list[i].has_sugar === false) {
                recommend.push(list[i])
            }
        }

        if(day === 'tuesday') {
            return recommend
        } else {
            return list
        }
    }
}
let bacth_of_cookies = CookieFactory.create(option)
console.log(bacth_of_cookies)

let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', bacth_of_cookies)

console.log('sugar free cakes are :')
for(let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i].name)
}

