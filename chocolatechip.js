const Cookie = require('./cookie.js')

class ChocolateChip extends Cookie{
    constructor(name, count){
        super("chocolate chip")
        this.choc_chip_count = count || 200
    }
}

module.exports = ChocolateChip