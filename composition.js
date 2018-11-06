const fs = require('fs')

class Cookie {
  constructor(name, ingredients) {
    this.name = name
    this.status = 'mentah'
    this.ingredients = ingredients
    this.has_sugar = this.sugar()
  }
  
  bake() {
    this.status = 'selesai dimasak'
  }

  sugar() {
    for (let i = 0; i < this.ingredients.length; i++) {
      if(this.ingredients[i].name.trim() == 'sugar')  {
        return true
      }    
    }
    return false
  }
}

class PeanutButter extends Cookie {
  constructor(name, bahan){
    super(name, bahan)
    this.peanut_count = 100
  }
}

class ChocolateChip extends Cookie {
  constructor(name,bahan) {
    super(name, bahan)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookie {
  constructor(name, bahan) {
    super(name, bahan)
    this.other_count = 150
  }
}

class CookieFactory {
  static create(option){
    let result = [] 
    
    for (let i = 0; i < option.length; i++) {
      let nama = option[i].split('=')
      let list = nama[1].split(',')
      let arrbahan = []

      for (let j = 0; j < list.length; j++) {
        let temp = list[j].split(':')  
        // let amount = temp[0]
        // let bahan = temp[1]   
        let obj = {
          name: temp[1],
          amount: temp[0]
        } 
        arrbahan.push(new Ingredients(obj))
      }

      let cookie = null
      if (nama[0] === 'peanut butter ') {
        cookie = new PeanutButter(nama[0], arrbahan)
      } else if (nama[0] === 'chocolate chip ') {
        cookie = new ChocolateChip(nama[0],arrbahan)
      } else {
        cookie = new OtherCookie(nama[0],arrbahan)
      }
      result.push(cookie)
    }
    // console.log(arrbahan)
    return result
  }

  static cookieRecommendation(hari , input){
    let arr = []
    for (let i = 0; i < input.length; i++) {
      if(input[i].has_sugar === false) {
        arr.push(input[i])
      }
    }
    return arr
  }
}

class Ingredients {
  constructor(option) {
    this.name = option['name']
    this.amount = option['amount']
  }
}

const option = fs.readFileSync(`./cookies.txt`, 'utf8').split("\n")
let batch_of_cookies = CookieFactory.create(option)
console.log(batch_of_cookies)

let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batch_of_cookies) ;
console.log('sugar free cakes are : ')

for (let i = 0; i < sugarFreeFoods.length; i++) {
  console.log(sugarFreeFoods[i].name)  
}