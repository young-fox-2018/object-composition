"use strict"
const Cookies = require('./Cookie.js')

class OtherCookie extends Cookies {
    constructor(name , status, ingridents) {
        super(name , status, ingridents)
        this.peanut_count = 150
    }
}

module.exports = OtherCookie