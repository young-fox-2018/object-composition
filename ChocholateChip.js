const Cookie = require('./Cookies')

class ChocholateChip extends Cookie {
    constructor(name) {
        super(name)
        this.choc_chip_count = 200
    }
}


module.exports = ChocholateChip