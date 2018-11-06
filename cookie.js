const Ingredient = require('./ingredient')

class Cookie {
    constructor(array) {
        this._name = array[0]
        this._status = 'mentah'
        this._ingredients = []
        this.addIngredient(array[1])
    }

    get name() {
        return this._name
    }
    get status() {
        return this._status
    }
    set status(input) {
        this._status = input
    }
    get ingredient() {
        return this._ingredients
    }

    bake() {
        this.status = 'selesai dimasak'
    }

    addIngredient(input) {
        input = input.split(',')
        input.forEach(item => {
            item = item.split(':')
            this._ingredients.push(new Ingredient(item[0].slice(1,item[0].length-1),item[1].slice(1,item[1].length)))
        })
    }
}

module.exports = Cookie