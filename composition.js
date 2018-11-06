const fs = require('fs')
let option = fs.readFileSync('cookies.txt', 'utf8')

class Cookie {
    constructor(name, ingredients, has_sugar) {
        this.name = name
        this.status = "mentah"
        this.ingredients = ingredients
        this.has_sugar = has_sugar
    }

    bake() {
        this.status = "selesai dimasak"
    }
}

class PeanutButter extends Cookie {
    constructor(name, ingredients, has_sugar) {
        super(name, ingredients, has_sugar)
        this.peanut_butter = 100
    }
}

class ChocolateChip extends Cookie {
    constructor(name, ingredients, has_sugar) {
        super(name, ingredients, has_sugar)
        this.other_count = 150
    }
}

class OtherCookies extends Cookie {
    constructor(name, ingredients, has_sugar) {
        super(name, ingredients, has_sugar)
        this.choc_chip_count = 200
    }
}

class CookieFactory {
    static create(option) {
        let result = option.split('\n')
        let arrResult = []
        let counter = 0

        for (let i = 0; i < result.length; i++) {
            let split = result[i].split('=')
            let ingredients = split[1].split(',')
            let objIngredients = []
            let statusGula = false
            for (let m = 0; m < ingredients.length; m++) {
                ingredients[m] = ingredients[m].split(":")
                let obj = {
                    "name": ingredients[m][1].trim(),
                    "amount": ingredients[m][0].trim()
                }

                objIngredients.push(
                    new Ingredients(obj)
                )
            }

            for (let i = 0; i < objIngredients.length; i++) {
                if (objIngredients[i].name == "sugar") {
                    statusGula = true
                }
            }

            switch (split[0].trim()) {
                case "peanut butter":
                    arrResult.push(new PeanutButter("Peanut Butter", objIngredients, statusGula))
                    break;
                case "chocolate chip":
                    arrResult.push(new ChocolateChip("Chocolate Chip", objIngredients, statusGula))
                    break;
                default:
                    arrResult.push(new OtherCookies(split[counter], objIngredients, statusGula))
                    break;
            }
        }

        return arrResult

    }
    static cookieRecommendation(day, list) {
        let data = []
        for (let i = 0; i < list.length; i++) {
            if (list[i].has_sugar == false) {
                data.push(list[i])
            }
        }

        return data
    }
}

class Ingredients {
    constructor(option) {
        this.name = option['name']
        this.amount = option['amount']
    }
}
let batch_of_cookies = CookieFactory.create(option)
console.log(batch_of_cookies);

let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies)
console.log("SUGAR FREE CAKES ARE:");
for (let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(
        sugarFreeFoods[i].name
    );
    
    
}



