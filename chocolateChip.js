const Cookie = require('./cookie.js')

class ChocolateChip extends Cookie {
    constructor(array) {
        super(array)
        this._choco_chip_count = 200
    }
}

module.exports = ChocolateChip