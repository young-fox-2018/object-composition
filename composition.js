const fs = require('fs')
const options = fs.readFileSync('cookies.txt', 'utf8').split('\n')
// console.log(options);

class Cookie {
    constructor (name, ingredients) {
        this.name = name
        this.ingredients = ingredients
        this.status = 'mentah'
        this.has_sugar = null
    }
    bake () {
        this.status = 'selesai dimasak'
    }
}

class PeanutButter extends Cookie {
    constructor (name, ingredients) {
        super(name, ingredients)
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie {
    constructor (name, ingredients) {
        super(name, ingredients)
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie {
    constructor (name, ingredients) {
        super(name, ingredients)
        this.other_count = 150
    }
}

class Ingredient {
    constructor (ingredients) {
        this.name = ingredients['name']
        this.amount = ingredients['amount']
    }
}

class CookieFactory {
    static create ( options ) {

        let result = []
        
        for ( let i = 0; i < options.length; i++ ) {
            let cookieType = options[i].split('=')[0].trim()
            let ingredients = options[i].split('=')[1].trim().split(',')

            let objIngredients = []

            for ( let j = 0; j < ingredients.length; j++ ) {
                let splited = ingredients[j].split(':')
         
                objIngredients.push(new Ingredient({
                    name: splited[1].trim(),
                    amount: splited[0].trim()
                }))
            }
            
            if ( cookieType === 'peanut butter' ) {
                result.push(new PeanutButter(cookieType, objIngredients))
            } else if ( cookieType === 'chocolate chip' ) {
                result.push(new ChocolateChip(cookieType, objIngredients))
            } else {
                result.push(new OtherCookie(cookieType, objIngredients))
            }
        }

        for ( let i = 0; i < result.length; i++ ) {

            for ( let j = 0; j < result[i].ingredients.length; j++ ) {
                let ingredientsDetail = result[i].ingredients[j].name

                if ( ingredientsDetail === 'sugar' ) {
                    result[i].has_sugar = true
                }
            }
        }
        return result
    }

    static cookieRecommendation (day, batch_cookie){
        let result = []

        if ( day === 'tuesday' ) {

            for ( let i = 0; i < batch_cookie.length; i++ ) {
                if (batch_cookie[i].has_sugar !== true) {
                    result.push(batch_cookie[i])
                }
            }
        }
        
        return result
    }
}

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies)


let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batch_of_cookies)

console.log('sugar free cakes are :')
for ( let i = 0; i < sugarFreeFoods.length; i++ ) {
    console.log(sugarFreeFoods[i].name)
}
