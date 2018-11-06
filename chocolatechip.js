const Cookie = require('./cookie')

class ChocolateChip extends Cookie {
    constructor(name) {
        super(name)
        this.choc_chip_count = 200
    }
}

module.exports = ChocolateChip