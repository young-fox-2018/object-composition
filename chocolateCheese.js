const Cookie = require('./cookie')

class ChocolateCheese extends Cookie {
    constructor(name) {
        super(name)
        this.chocCheese_count = 225
    }
}

module.exports = ChocolateCheese