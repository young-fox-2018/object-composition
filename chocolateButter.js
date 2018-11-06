const Cookie = require('./cookie')

class ChocolateButter extends Cookie {
    constructor(name) {
        super(name)
        this.chocButter_count = 250
    }
}

module.exports = ChocolateButter