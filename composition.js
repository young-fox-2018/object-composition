'use strict'
const fs = require('fs');
const options = fs.readFileSync('cookies.txt').toString().split('\n');
const CookieFactory = require('./CookieFactory.js');

let batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies[3]);

let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batch_of_cookies);
console.log('sugar free cakes are :');

for (let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i].name);
}