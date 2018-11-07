"use strict"
const Cookies = require('./Cookie.js')

class PeanutButter extends Cookies {
    constructor(name , status, ingridents) {
        super(name , status, ingridents)
        this.peanut_count = 100
    }
}

module.exports= PeanutButter