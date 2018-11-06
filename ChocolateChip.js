const Cookie = require('./Cookie.js');

class ChocolateChip extends Cookie {
    constructor(name, ingredient) {
        super(name, ingredient);
        this.choc_chip_count = 200;
    }
}

module.exports = ChocolateChip;