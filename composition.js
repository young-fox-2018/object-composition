const Cookie = require('./Cookie')

class PeanutButter extends Cookie{
    constructor(name, ingredients) {
        super(name, ingredients)
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie {
    constructor(name, ingredients){
        super(name,ingredients)
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie{
    constructor(name, ingredients){
        super(name, ingredients)
        this.other_count = 150
    }
}

class PeanutButterCrumble extends PeanutButter{
    constructor(name, ingredients) {
        super(name, ingredients)
        this.peanut_count = 50
    }
}

class ChocolateChipCrumble extends ChocolateChip{
    constructor(name, ingredients){
        super(name,ingredients)
        this.peanut_count = 25   
    }
}

module.exports = {
    PeanutButter: PeanutButter,
    ChocolateChip: ChocolateChip,
    OtherCookie: OtherCookie,
    PeanutButterCrumble: PeanutButterCrumble,
    ChocolateChipCrumble: ChocolateChipCrumble
}