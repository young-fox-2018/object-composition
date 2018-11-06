"use strict"

const Cookies = require('./Cookie')

class PeanutButterCrumbled extends Cookies {
    constructor(name , status, ingridents) {
        super(name, status, ingridents)
        
        this.chocChipCount = 100
    }
}

module.exports= PeanutButterCrumbled