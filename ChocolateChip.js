"use strict"
const Cookies = require('./Cookie.js')

class ChocolateChip extends Cookies {
    constructor(name , status, ingridents) {
        super(name, status, ingridents)
        this.chocChipCount = 200
    }
}

module.exports= ChocolateChip