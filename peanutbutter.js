const Cookie = require('./cookie')

class PeanutButter extends Cookie {
    constructor(name) {
        super(name)
        this.peanut_count = 100
    }
}

module.exports = PeanutButter