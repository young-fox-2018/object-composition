const PeanutButter = require('./PeanutButter')
const ChocholateChip = require('./ChocholateChip')
const OtherCookie = require('./OtherCookie')


class CookieFactory {
    constructor() {

    }
    static create(array) {
        let cookies = []
        array.forEach(element => {
            if (element === 'peanut butter\r') cookies.push(new PeanutButter(element))
            else if (element === 'chocolate chip\r') cookies.push(new ChocholateChip(element))
            else cookies.push(new OtherCookie(element))
        })
        return cookies
    }
}


module.exports = CookieFactory