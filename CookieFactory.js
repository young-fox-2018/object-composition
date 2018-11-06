const fs = require('fs')
const PeanutButter = require('./PeanutButter')
const ChocolateChip = require('./ChocolateChip')
const OtherCookie = require('./OtherCookie')
const Ingredient = require('./Ingredient')

class CookieFactory {
    static create ( options ) {
        // let test = options[0].split('=')
        let result = []
        
        for ( let i = 0; i < options.length; i++ ) {
            let cookieType = options[i].split('=')[0].trim()
            let ingredients = options[i].split('=')[1].trim().split(',')

            let objIngredients = []

            for ( let j = 0; j < ingredients.length; j++ ) {
                let splited = ingredients[j].split(':')
         
                objIngredients.push(new Ingredient({
                    name: splited[1].trim(),
                    amount: splited[0].trim()
                }))
            }
            

            if ( cookieType === 'peanut butter' ) {
                result.push(new PeanutButter(cookieType, objIngredients))
            } else if ( cookieType === 'chocolate chip' ) {
                result.push(new ChocolateChip(cookieType, objIngredients))
            } else {
                result.push(new OtherCookie(cookieType, objIngredients))
            }
        }

        for ( let i = 0; i < result.length; i++ ) {
            // console.log(result[i].ingredients.length)
            for ( let j = 0; j < result[i].ingredients.length; j++ ) {
                let ingredientsDetail = result[i].ingredients[j].name
                // console.log(ingredientsDetail)
                if ( ingredientsDetail === 'sugar' ) {
                    result[i].has_sugar = true
                }
            }
        }

        // console.log(result)
        return result
    }

    static cookieRecommendation (day, batch_cookie){
        let result = []

        if ( day === 'tuesday' ) {

            for ( let i = 0; i < batch_cookie.length; i++ ) {
                if (batch_cookie[i].has_sugar !== true) {
                    result.push(batch_cookie[i])
                }
            }
        }
        
        return result
    }
}

module.exports = CookieFactory