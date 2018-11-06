"use strict"

let fs = require('fs')



class Cookie {
    constructor (){
        this.name = ""
        this.status = "mentah"
    }

    bake(){
        this.status = "selesai dimasak"
    }
}

class PeanutButter extends Cookie {
    constructor(){
        super();
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie{
    constructor(){
        super();
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie{
    constructor(){
        super();
        this.other_count = 150
    }
}

class CookieFactory {
    static create(options){
        let result = []
        for ( let i = 0; i < options.length; i++){
            let cont;
            if(options[i] === "peanut butter"){
                cont = new PeanutButter()
                cont.name = options[i]
                cont.ingredients = [];
            }
            else if(options[i] === "chocolate chip"){
                cont = new ChocolateChip()
                cont.name = options[i]
                cont.ingredients = [];
            }
            else{
                cont = new OtherCookie()
                cont.name = options[i]
                cont.ingredients = [];
            }
            result.push(cont)
        }

        return result
    }
}

const options = fs.readFileSync(`./cookies.txt`, 'utf8').split("\n");

let batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies)

