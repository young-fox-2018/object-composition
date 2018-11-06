const fs = require("fs")
const data = fs.readFileSync("cookies.txt", "utf-8")

var options = data.split("\n")

class Cookie {
    constructor() {
        this.status = "mentah"
    }

    bake() {
        this.status = "selesai dimasak"
    }
 }

 class PeanutButter extends Cookie {
     constructor() {
         super()
         this.peanut_count = 100
         this.ingredients = []
     }
 }

 class ChocolateChip extends Cookie {
     constructor() {
         super()
         this.choc_chip_count = 200
         this.ingredients = []
     } 
 }

 class OtherCookie extends Cookie {
    constructor() {
        super()
        this.other_count = 150
        this.ingredients = []
    } 
}

 class CookieFactory {
     static create(cookiesOrder) { // array of cookies
        let output = []
        cookiesOrder.forEach(cookies => {
            cookies = cookies.split("=")
            let ingredients = cookies[1].split(",")
    
            if (cookies[0] == "peanut_butter") {
                output.push(CookieFactory.addIngredients(new PeanutButter, ingredients))
            } else if (cookies[0] == "chocolate_chip") {
                output.push(CookieFactory.addIngredients(new ChocolateChip, ingredients))
            } else {
                output.push(CookieFactory.addIngredients(new OtherCookie, ingredients))
            }
        });
        return output
     }

     static addIngredients(cookie, ingredients) { // cookie object, resep nya
        ingredients.forEach(ingredient => { // loop 
            let x = ingredient.split(":")
            let y = x[0].split(" ")
            cookie.ingredients.push({
                component: x[1],
                qty: y[0],
                measurement: y[1]
            })
        });
        return cookie
     }

     static cookieRecommendation(date, batch_of_cookies) {
            let output = []
            batch_of_cookies.forEach(cookie => {
                cookie.ingredients.forEach(ingredient => {
                    if (ingredient.component == "sugar") {
                        output.push({name: cookie.constructor.name})
                    }
                });
            });
            return output
    }

 }

 let batch_of_cookies = CookieFactory.create(options)
 console.log(batch_of_cookies)
//  console.log(batch_of_cookies[0].ingredients)

 let sugarFreeFoods = CookieFactory.cookieRecommendation ("tuesday", batch_of_cookies)

console.log("Sugar free cakes are:")

for (let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i].name)
}

//console.log(options)