const fs = require('fs')
const { ChocolateChip, ChocolateChipCrumble, PeanutButter, PeanutButterCrumble, OtherCookie } = require('./composition')
const options = fs.readFileSync('cookies.txt', 'utf8').split("\n")

class CookieFactory {
    
    static create(options){
        let cookieList = []
        for(let iOptions = 0 ; iOptions < options.length ; iOptions++){
            options[iOptions] = options[iOptions].split(" = ")
            options[iOptions][1] = options[iOptions][1].split(",")
            var arrIngre = []
            for(let j = 0 ; j < options[iOptions][1].length ; j++){
                let objIngre = {}
                options[iOptions][1][j] = options[iOptions][1][j].split(" : ")
                objIngre[options[iOptions][1][j][1]] = options[iOptions][1][j][0]
                arrIngre.push(objIngre)
            }
            // console.log(arrIngre, "-------------------------------")

            if(options[iOptions][0] === "peanut butter"){
                cookieList.push(new PeanutButter(options[iOptions][0], arrIngre))
            }
            else if(options[iOptions][0] === "chocolate chip"){
                cookieList.push(new ChocolateChip(options[iOptions][0], arrIngre))
            }
            else if(options[iOptions][0] === "chocolate chip crumble"){
                cookieList.push(new ChocolateChipCrumble(options[iOptions][0], arrIngre))
            }
            else if(options[iOptions][0] === "peanut butter crumble"){
                cookieList.push(new PeanutButterCrumble(options[iOptions][0], arrIngre))
            }
            else{
                cookieList.push(new OtherCookie(options[iOptions][0], arrIngre))
            }
        }
        return cookieList
    }
}

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies)