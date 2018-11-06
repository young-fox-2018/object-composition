const Cookie = require("./Cookie.js")

class OtherCookie extends Cookie{
    constructor(name,ingredients){
        super(name,ingredients)
        this.name = name
        this.coc_cheese_count = 150
    }
}

module.exports = OtherCookie