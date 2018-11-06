const Cookie = require('./cookie.js')

class OtherCookie extends Cookie{
    constructor(name, count){
        super(name)
        this.other_count = count || 150
    }
}

module.exports = OtherCookie