"use strict"

const Cookies = require('./Cookie')

class ChocolateChipCrumbled extends Cookies {
    constructor(name , status, ingridents) {
        super(name, status, ingridents)
        
        this.chocChipCount = 100
    }
}

module.exports= ChocolateChipCrumbled