const ingredientsList = require('./ingredients')

class Cookie{
    constructor(name){
        this.name = name
        this.status = "mentah"
        this.has_sugar = false
        this.ingredients = []
        this.gettingIngredients()
    }

    bake(){
        this.status = "selesai dimasak"
    }

    gettingIngredients(){
        ingredientsList.forEach(item => {
            if(this.name === item.name){
                this.ingredients = item.ingredients
                item.ingredients.forEach(element => {
                    if(element.name === 'sugar') this.has_sugar = true
                })
            }
        })
    }
}

module.exports = Cookie