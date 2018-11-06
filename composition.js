
"use strict"

const fs = require("fs");
const options = fs.readFileSync("cookies.txt", "utf8");

class Ingridients {
    constructor(options){
        this.name = options.name;
        this.amount = options.amount;
    }
}

class Cookies {
    constructor(name, ingredients) {
        this.name = name
        this.status = "mentah";
        this.ingredients = ingredients;
        this._has_sugar = null;
    }
    bake() {
        this.status = "selesai masak"
    }
    sugar() {
        console.log(this.ingredients)
    }
}

class PeanutButter extends Cookies {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.peanut_count = 100;
    }
}

class OtherCookie extends Cookies {
    constructor(name, ingredients){
        super(name, ingredients)
        this.other_count = 150
    }
}

class ChocolateChip extends Cookies {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.choc_chip_count = 200
    }
}


class CookieFactory {

    static create(options) {
  
        let cookies = options.split("\n");
        let result = []; 
   
        for(let i = 0; i < cookies.length; i++){
            let splitted = cookies[i].split("=");
            let arrCookies = splitted[1].split(",");
            let chipsIngr = [];

            for(let i = 0; i < arrCookies.length; i++){
                let bake = arrCookies[i].split(":");
                let obj = {
                    name : bake[1].trim(),
                    amount : bake[0].trim(),
                };

                let baking = new Ingridients(obj);
                chipsIngr.push(new Ingridients(baking));

            }

            if(splitted[0].trim() === "peanut butter") {
                result.push(new PeanutButter(splitted[0].trim(), chipsIngr));
            } else if (splitted[0].trim() === "chocolate chip"){
                result.push(new ChocolateChip(splitted[0].trim(), chipsIngr));
            } else {
                result.push(new OtherCookie(splitted[0].trim(), chipsIngr));
            }
        }

        for(let i = 0; i < result.length; i++){
            let arrIngr = result[i].ingredients;
            for(let j = 0; j < arrIngr.length; j++){
                if(arrIngr[j].name === "sugar") {
                    result[i]._has_sugar = true;
                    break
                } else {
                    result[i]._has_sugar = false;
                }
            }
        }
        return result;
    }

    static cookieRecomendations(day, inputCookies) {

        let sugarFree = [];
        if(day === "tuesday") {
            for(let i = 0; i < inputCookies.length; i++){
                if(inputCookies[i]._has_sugar === false) {
                    sugarFree.push(inputCookies[i].name);
                }
            }
        }
        return sugarFree;
    }
}

const batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies);
const sugarFreeFoods = CookieFactory.cookieRecomendations("tuesday", batch_of_cookies);
console.log("~~~~~~~~~~~~~~~")
console.log("sugar free cakes are: ");
for(let i = 0; i < sugarFreeFoods.length; i++){
    console.log(sugarFreeFoods[i]);
}