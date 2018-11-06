class Ingredient {
    constructor(name,amount) {
        this._item = name
        this._amount = amount
    }

    get item() {
        return this._item
    }
}

module.exports = Ingredient