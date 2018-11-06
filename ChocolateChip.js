const Cookie = require("./Cookie.js")

class ChocolateChip extends Cookie{
    constructor(name,ingredients){
        super(name,ingredients)
        this.name = name
        this.choc_chip_count = 200
    }
}

module.exports = ChocolateChip