const PeanutButter = require('./peanutbutter')
const ChocolateChip = require('./chocolatechip')
const OtherCookie = require('./otherCookie')

class CookieFactory{
    static create(options){
        let list = []
        options.forEach(item => {
            if(item === "peanut butter")list.push(new PeanutButter(item))
            else if(item === "chocolate chip")list.push(new ChocolateChip(item))
            else list.push(new OtherCookie(item))
        })
        return list
    }

    static cookieRecommendation(day, arrCookies){
        let sugarFreeRecommendation = []
        if(day === "tuesday"){
            arrCookies.forEach(item => {
                if(item.has_sugar === false) sugarFreeRecommendation.push(item.name)
            })
            return sugarFreeRecommendation
        }
    }
}

module.exports = CookieFactory