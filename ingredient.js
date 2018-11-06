class Ingredient {
    constructor(options) {
        this._name = options['name']
        this._amount = options['amount']
    }
    get name() {
        return this._name
    }
    get amount() {
        return this._amount
    }

}

module.exports = Ingredient
