const CookieFactory = require('./cookieFactory')

let batch_of_cookies = CookieFactory.create('./cookies.txt')
console.log(batch_of_cookies)

let sugarFreeFoods = CookieFactory.cookieRecommendations("tuesday", batch_of_cookies)
console.log('sugar free cakes are: ')
for (let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i].name)    
}