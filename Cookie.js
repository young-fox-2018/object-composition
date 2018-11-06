const Ingredients = require('./Ingredients')

class Cookie{
    constructor(name, ingredients){
        this._name = name
        this._status = 'mentah'
        this._ingredients = ingredients
        this._has_sugar = this.checkSugar()
    }
    
    set has_sugar(input){
        this._has_sugar = input
    }
    get has_sugar(){
        return this._has_sugar
    }

    checkSugar(){
        for(let iIngre = 0 ; iIngre < this._ingredients.length ; iIngre++) {
            console.log(this._ingredients[iIngre], "----------------------------")
            if(this._ingredients[iIngre].name === "sugar"){
                return true 
            }
        }
        return false
    }

    bake(){
        this.status = "selesai dimasak"
    }
}

module.exports = Cookie