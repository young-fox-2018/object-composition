const Cookie = require('./Cookie.js')

class PeanutButter extends Cookie {
    constructor(name, ingredient) {
        super(name, ingredient);       
        this.peanut_count = 100;
    }
}

module.exports = PeanutButter;