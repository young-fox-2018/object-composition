const Cookie = require('./cookie')

class ChocolateButter extends Cookie {
    constructor(name) {
        super(name)
        this.choc_chip_count = 300
    }
}

module.exports = ChocolateButter