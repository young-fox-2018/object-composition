const Cookie = require("./Cookie.js")

class PeanutButter extends Cookie{
    constructor(name,ingredients){
        super(name,ingredients)
        this.name = name
        this.peanut_count = 100
    }
}

module.exports = PeanutButter