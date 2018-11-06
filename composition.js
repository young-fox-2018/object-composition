'use strict'
const fs = require('fs');
const options = fs.readFileSync('cookies.txt').toString().split('\n');

class Cookie {
    constructor() {
        this.name = ''
        this.status = 'mentah';
        this.ingredients = []
    }
    bake() {
        this.status = 'selesai dimasak'
    }
}

class PeanutButter extends Cookie {
    constructor(name) {
        super();
        this.name = name;
        this.peanut_count = 100;
    }
}

class ChocolateChip extends Cookie {
    constructor(name) {
        super();
        this.name = name;
        this.choc_chip_count = 200;
    }
}

class OtherCookie extends Cookie {
    constructor(name) {
        super();
        this.name = name;
        this.choc_chip_count = 150;
    }
}

class CookieFactory {
    static create(options) {
        let arr = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i] === 'peanut butter') {
                arr.push(new PeanutButter(options[i]));
            } else if (options[i] === 'chocolate chip') {
                arr.push(new ChocolateChip(options[i]));
            } else {
                arr.push(new OtherCookie(options[i]));
            }
        }
        return arr;
        // return options;
    }
}

let batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies);