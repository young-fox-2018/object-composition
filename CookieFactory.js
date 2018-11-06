const PeanutButter = require('./PeanutButter.js');
const ChocolateChip = require('./ChocolateChip.js');
const OtherCookie = require('./OtherCookie.js');
const Ingredient = require('./Ingredient.js');

class CookieFactory {
    static create(options) {
        let arr = [];
        for (let i = 0; i < options.length; i++) {
            let cookies = options[i].split('=');
            let getName = cookies[0].trim();
            let ingredient = cookies[1].split(',');

            // loop array of Ingredients object
            let arrIngredient = [];
            for (let j = 0; j < ingredient.length; j++) {                
                let splitIngredient = ingredient[j].split(':');
                arrIngredient.push(new Ingredient({
                    name: splitIngredient[1].trim(),
                    amount: splitIngredient[0].trim()
                }) );
            }

            if (getName[0] === 'peanut butter') {
                arr.push(new PeanutButter(getName, arrIngredient));
            } else if (getName[0] === 'chocolate chip') {
                arr.push(new ChocolateChip(getName, arrIngredient));
            } else {
                arr.push(new OtherCookie(getName, arrIngredient));
            }
        }
        return arr;
    }

    static cookieRecommendation(day, cookies) {
        let hasSugarCookies = [];
        let noSugarCookies = [];

        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i].has_sugar === false) {
                noSugarCookies.push(cookies[i]);
            } else {
                hasSugarCookies.push(cookies[i]);
            }
        }
        return noSugarCookies;
    }
}

module.exports = CookieFactory;