const Cookie = require('./cookie')

class ChocolateCheese extends Cookie {
    constructor(name) {
        super(name)
        this.choc_cheese_count = 250
    }
}

module.exports = ChocolateCheese
