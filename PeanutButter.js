"use strict"

const Cookies = require('./Cookie')

class PeanutButter extends Cookies {
    constructor(name , status, ingridents) {
        super(name, status, ingridents)
        console.log(status)
        this.peanutCount = 100
    }
}

module.exports= PeanutButter