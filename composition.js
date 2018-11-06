"use strict"
const fs = require('fs')
const options = fs.readFileSync('./cookies.txt', 'utf8').split('\n')
options.forEach((item, index) => {
    options[index] = options[index].split(' = ')
});

class ingredient {
    constructor(options) {
        this.name = options['name']
        this.amount = options['amount']
    }
}

class Cookie {
    constructor(name, input) {
        this.name = name
        this.status = "mentah"
        this.ingredients = this.getIngredients(input) || []
    }
    bake() {
        this.status = "selesai dimasak"
    }

    getIngredients(data) {
        let dataIngredients = []
        data = data.split('\n')
        for (let i = 0; i < data.length; i++) {
            data[i] = data[i].split(', ')
            for (let j = 0; j < data[i].length; j++) {
                let obj = {}
                data[i][j] = data[i][j].split(" : ")
                obj.name = data[i][j][1]
                obj.amount = data[i][j][0]
                dataIngredients.push(new ingredient(obj))
            }
        }
        return dataIngredients
    }

}
class PeanutButter extends Cookie {
    constructor(name, input) {
        super(name, input)
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie {
    constructor(name, input) {
        super(name, input)
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie {
    constructor(name, input) {
        super(name, input)
        this.other_count = 150
    }
}


class CookieFactory {
    static create(options) {
        let listItem = []
        options.forEach((item, index) => {
            switch (item[0]) {
                case "peanut butter":
                    let peanutButter = new PeanutButter(item[0], item[1])
                    listItem.push(peanutButter)
                    break;
                case "chocolate chip":
                    let chocoChip = new ChocolateChip(item[0], item[1])
                    listItem.push(chocoChip)
                    break;
                default:
                    let cookie = new OtherCookie(item[0], item[1])
                    listItem.push(cookie)
                    break;
            }
        });
        return listItem
    }
    static cookieRekomendation(day, listCookie) {
        let sugarFree = []
        for (let i = 0; i < listCookie.length; i++) {
            let count = 0
            for (let j = 0; j < listCookie[i].ingredients.length; j++) {
                if (listCookie[i].ingredients[j].name === 'sugar') {
                    count++
                }
            }
            if (count > 0) {
                sugarFree.push(listCookie[i])
            }
        }
        return sugarFree
    }
}

let batch_of_cookies = CookieFactory.create(options);
// console.log(batch_of_cookies)
let sugarFreeFoods = CookieFactory.cookieRekomendation('tuesday', batch_of_cookies)
// console.log(sugarFreeFoods)
console.log("sugar free cakes are:")
for (let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i].name)
}