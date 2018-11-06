"use strict"

let fs = require('fs')



class Cookie {
    constructor (ingredients){
        this.name = ""
        this.status = "mentah"
        this.ingredients =  this.getIngredients(ingredients)
        this.has_sugar = this.checkSugar(ingredients)
    }

    bake(){
        this.status = "selesai dimasak"
    }

    getIngredients(ingredients){
        let result = []
        // console.log(ingredients)
        for (let i = 0; i < ingredients.length; i++){
            let temp = new Ingredients (ingredients[i])
            result.push(temp)
        }

        return result
    }

    checkSugar(ingredients){
        let result = false;
        for (let i = 0; i < ingredients.length; i++){
            if(ingredients[i].name.trim() == "sugar"){
             result = true
            }
        }

        return result
    }
    
}

class PeanutButter extends Cookie {
    constructor(ingredients){
        super(ingredients);
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie{
    constructor(ingredients){
        super(ingredients);
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie{
    constructor(ingredients){
        super(ingredients);
        this.other_count = 150
    }
}

class CookieFactory {
    static create(options){
        let result = []
        for ( let i = 0; i < options.length; i+=2){
            let cont;
            if(options[i].match(/peanut butter/gi)){
                cont = new PeanutButter(options[i+1])
                cont.name = options[i]
            }
            else if(options[i].match(/chocolate chip/gi)){
                cont = new ChocolateChip(options[i+1])
                cont.name = options[i]
            }
            else{
                cont = new OtherCookie(options[i+1])
                cont.name = options[i]
            }
            result.push(cont)
        }

        return result
    }

    static cookieRecommendation(day, cookieBatch){
        let result = [];

        if(day === "tuesday"){
            for(let i = 0; i < cookieBatch.length; i++){
                if (cookieBatch[i].has_sugar === false){
                    result.push(cookieBatch[i].name)
                }
            }
        }

        return result
    }
}

class Ingredients {
    constructor (options) {
        this.name = options["name"]
        this.amount = options["amount"]
    }
}

const options = fs.readFileSync(`./cookies.txt`, 'utf8').split(/\n|=/);

//objectifying ingredients
for(let i = 0; i < options.length; i++){

    if(i % 2 === 1){
        let cont = []
        let ingredients = options[i].split(",")
        // console.log(ingredients)

        for(let j = 0; j < ingredients.length; j++){
            let each = ingredients[j].split(":")
            let temp = {
                name: each[1],
                amount: each[0]
            }

            cont.push(temp)
        }
        options[i] = cont
    }
}

// console.log(options)

let batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies)

let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies);
console.log(`sugar free cakes are : `);
for(let i = 0; i < sugarFreeFoods.length; i++){
    console.log(`${i+1} ${sugarFreeFoods[i]}`)
}



