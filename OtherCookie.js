const Cookie = require('./Cookies')

class OtherCookie extends Cookie {
    constructor(name) {
        super(name)
        this.peanut_count = 100
    }
}


module.exports = OtherCookie