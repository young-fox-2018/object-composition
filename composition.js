const fs = require('fs')

class Cookie {
  constructor(name) {
    this.name = name
    this.status = 'mentah'
    this.ingredients = []
  }
  
  bake() {
    this.status = 'selesai dimasak'
  }
}

class PeanutButter extends Cookie {
  constructor(name){
    super(name)
    this.peanut_count = 100
  }
}

class ChocolateChip extends Cookie {
  constructor(name) {
    super(name)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookie {
  constructor(name) {
    super(name)
    this.other_count = 150
  }
}

class CookieFactory {
  static create(option){
    let result = [] 
    for (let i = 0; i < option.length; i++) {
      let cookie = null
      if (option[i] === 'peanut butter') {
        cookie = new PeanutButter(option[i])
      } else if (option[i] === 'chocolate chip') {
        cookie = new ChocolateChip(option[i])
      } else {
        cookie = new OtherCookie(option[i])
      }
      result.push(cookie)
    }
    return result
  }
}

const option = fs.readFileSync(`./cookies.txt`, 'utf8').split("\n")
let batch_of_cookies = CookieFactory.create(option)
console.log(batch_of_cookies)