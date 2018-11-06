"use strict"
class Cookie{
    constructor(name, ingredients){
        this.name = name
        this.status = 'mentah'
        this.ingredients = ingredients
        this.has_sugar = this.checkSugar()
    }

    bake(){
        this.status = 'selesai dimasak'
    }
    checkSugar(){
        for(let i = 0 ; i < this.ingredients.length; i++){
            // console.log(this.ingredients[i])
            if(this.ingredients[i].name.trim() == "sugar"){
                return true
            }

        }
        return false
    }
}   

class PeanutButter extends Cookie {
    constructor(name,ingredients){
        super(name,ingredients)
        this.peanut_count = 100

    }
}

class ChocholateChip extends Cookie{
    constructor(name,ingredients){
        super(name,ingredients)
        this.choc_chip_count = 200
        
    }
}

class OtherCookie extends Cookie{
    constructor(name,ingredients){
        super(name,ingredients)
        this.other_count = 150
    }
}

class CookieFactory{
    

    static create(options){
        var result = []
        for(let i = 0 ; i < options.length ; i++){
            let name = options[i].split("=")
            let daftarBahan = name[1].split(",")
            let arr = []
            for(let j = 0 ; j < daftarBahan.length;j++){
                let bahan = daftarBahan[j].split(":")
                let obj = {
                    "name" : bahan[1],
                    "amount": bahan[0]
                }
                     arr.push(new ingredients(obj))
                // console.log(arr)
                
            }
            let cookie = null
            // console.log(options[i])
            if(name[0] === "peanut butter "){
                cookie = new PeanutButter(name[0],arr)
                // cookie.ingredients.push(new ingredients())
                
            }else if(name[0] === "chocolate chip "){
                cookie = new ChocholateChip(name[0],arr)
            }else{
                cookie = new OtherCookie(name[0],arr)

            }
            result.push(cookie)
            // console.log(arr)
        }
        
        return result
    }

    static cookieRecommendation(day,input){
        let arr = []
        for(let i = 0 ; i < input.length; i++){
            if(input[i].has_sugar == false){
                arr.push(input[i])
            }
        }
        return arr
    }
}
class ingredients {
    constructor(options){
        this.name = options['name']
        this.amount = options['amount']
    }
}
const fs = require('fs')
const option = fs.readFileSync('./cookies.txt', "utf8").split('\r\n')
let batch_of_cookies = CookieFactory.create(option);
console.log(batch_of_cookies);

let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies);
console.log("sugar free cakes are :")
for(let i = 0 ; i < sugarFreeFoods.length; i++){
    console.log(sugarFreeFoods[i].name)
}