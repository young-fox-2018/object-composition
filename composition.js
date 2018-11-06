"use strict"

const fs = require('fs');
let options = fs.readFileSync('cookies.txt', 'utf8');

const PeanutButter = require('./PeanutButter')
const ChocolateChip = require('./ChocolateChip')
const OtherCookie = require('./OtherCookie')
const Ingredients = require('./Ingredients')

class CookieFactory {
    static create(options) {
        var result = [];
        var splitEnter = options.split('\n');
        for (let i = 0; i < splitEnter.length; i++) {
            let cookie = splitEnter[i].split(' = ');
            let splitKoma = cookie[1].split(', ');
            let ingredients = [];
            for (let j = 0; j < splitKoma.length; j++) {
                let amount = splitKoma[j].split(' : ');
                let obj = {
                    name: amount[1],
                    amount: amount[0]
                }
                ingredients.push(new Ingredients(obj));
            }
            if (cookie[0] === 'peanut butter') {
                result.push(new PeanutButter(cookie[0], ingredients))
            }
            else if (cookie[0] === 'chocolate chip') {
                result.push(new ChocolateChip(cookie[0], ingredients))
            }
            else {
                result.push(new OtherCookie(cookie[0], ingredients))
            }
        }
        console.log(result[0].ingredients[0].name);
        
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[i].ingredients.length; j++) {
                if (result[i].ingredients[j].name === 'sugar') {
                    result[i].has_sugar = true;
                    break;
                } else {
                    result[i].has_sugar = false;
                }   
            }
        }
        return result;
    }

    static cookieRecomendation(day, cookies) {
        var result = [];
        if (day === 'tuesday') {
            for (let i = 0; i < cookies.length; i++) {
                if (cookies[i].has_sugar === false) {
                    result.push(cookies[i])
                }
            }
        }
        return result
    }
}

let batch_of_coookies = CookieFactory.create(options);
console.log(batch_of_coookies);

let sugarFreeFoods = CookieFactory.cookieRecomendation('tuesday', batch_of_coookies);
console.log('sugar free cakes are: ');
for (let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i].name);
}