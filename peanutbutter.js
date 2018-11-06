const Cookie = require('./cookie.js')

class PeanutButter extends Cookie{
    constructor(count){
        super("peanut butter")
        this.peanut_count = count || 100
    }
}

module.exports = PeanutButter