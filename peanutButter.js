const Cookie = require('./cookie.js')

class PeanutButter extends Cookie {
    constructor(array) {
        super(array)
        this._peanut_count = 100
    }
}

module.exports = PeanutButter