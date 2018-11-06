const Cookie = require('./cookie.js')

class ChocolateCheese extends Cookie {
    constructor(array) {
        super(array)
        this._cheese = 120
    }
}

module.exports = ChocolateCheese