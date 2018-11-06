"use strict"

const Cookies = require('./Cookie')

class ChocolateCheese extends Cookies {
    constructor(name , status, ingridents) {
        super(name, status, ingridents)
        this.otherCount = 100
    }
}

module.exports= ChocolateCheese