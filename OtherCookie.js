const Cookie = require('./Cookie.js');

class OtherCookie extends Cookie {
    constructor(name, ingredient) {
        super(name, ingredient);        
        this.choc_chip_count = 150;
    }
}

module.exports = OtherCookie;