"use strict"
class Ingredients {
    constructor(option) {
        this.name = option["name"]
        this.amount = option["amount"]
    }
}
class Cookie {
    constructor(name, ingredients) {
        this.name = name
        this.status = "mentah"
        this.ingredients = ingredients || []
    }
    bake() {
        this.status = "selesai di masak"
    }
}
class PeanutButter extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.peanut_count = 100
    }
}
class ChocholateChip extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.choc_chip_count = 200
    }
}
class OtherChookie extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.choc_chip_count = 150
    }
}


class CookieFactory {
    static create(option) {
        this._cookieData = option
        let result = []
        for (let i = 0; i < this._cookieData.length; i++) {
            let split = this._cookieData[i].split("=")
            let splitArr = split[1].split(",")
            let resultIngredients = []
            for (let j = 0; j < splitArr.length; j++) {
                let splitArrObject = splitArr[j].split(":")
                let obj = {
                    name: splitArrObject[1],
                    amount: splitArrObject[0]
                }
                let process = new Ingredients(obj)
                resultIngredients.push(process)
            }

            if (split[0] === "peanut butter") {
                result.push(new PeanutButter(split[0], resultIngredients))
            }
            else if (split[0] === "chocolate chip") {
                result.push(new ChocholateChip(split[0], resultIngredients))
            }
            else {
                result.push(new OtherChookie(split[0], resultIngredients))
            }
        }
        return result
    }


    static cookieRecommendation(batch_of_cookies) {
        let resultNotSugar = []
        for (let i = 0; i < batch_of_cookies.length; i++) {
            let isSugar = false
            let check = batch_of_cookies[i].ingredients
            for (let j = 0; j < check.length; j++) {
                if (check[j].name === " sugar") isSugar = true
            }
            if (isSugar === false) {
                resultNotSugar.push(batch_of_cookies[i])
            }
        }
        return resultNotSugar
    }
}

var fs = require('fs')
let option = fs.readFileSync('cookies.txt').toString().split("\n")
let batch_of_cookies = CookieFactory.create(option)
let sugarFreeFoods = CookieFactory.cookieRecommendation(batch_of_cookies)
console.log(sugarFreeFoods);
console.log("sugar free cakes are : ");
for (let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i].name);
}

