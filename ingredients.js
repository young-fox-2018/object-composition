const fs = require('fs')

class Ingredients {
    constructor(options) {
        this.name = options['name']
        this.amount = options['amount']
    }

    static readFileIngredients(options) {
        return fs.readFileSync(options, 'utf8')
    }
}

module.exports = Ingredients