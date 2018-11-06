const Ingredients = require('./Ingredients')

class Cookie{
    constructor(name, ingredients){
        this._name = name
        this._status = 'mentah'
        this._ingredients = ingredients
    }
    
    bake(){
        this.status = "selesai dimasak"
    }
}

module.exports = Cookie