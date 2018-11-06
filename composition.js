"use strict"
const fs = require("fs")
let options = fs.readFileSync("cookies.txt", "utf8")

class Ingredient {
  constructor(options) {
    this.name = options["name"]
    this.amount = options["amount"]
  }
}

class Cookie {
  constructor(name, ingredients) {
    this.name = name
    this.status = "mentah"
    this.ingredients = ingredients
    this.has_sugar = false

  }

  bake() {
    this.status = "selesai dimasak"
  }
}

class PeanutButter extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.peanut_count = 100
  }
}

class ChocholateChip extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.choc_chip_count = 200
  }
}

class ChocolateChipCrumbled extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.crumbled_count = 100
  }
}

class PeanutButterCrumbled extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.crumbled_count = 120
  }
}

class OtherCookie extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.other_count = 150
  }
}

class CookieFactory {
  constructor() {}

  static cookieRecommendation(day, batch_of_cookies) {
    let result = []
    if (day === "tuesday") {
      for (var i = 0; i < batch_of_cookies.length; i++) {
        if (batch_of_cookies[i].has_sugar === false) {
          result.push(batch_of_cookies[i].name)
        }
      }
    }
    return result
  }

  static create(options) {
    let result = []
    let array = options.split("\n")
    for (var i = 0; i < array.length; i++) {
      let splitname = array[i].split("=")
      let ingredient = splitname[1].split(",")
      let totalIngredient = []
      for (var j = 0; j < ingredient.length; j++) {
        let obj = {
          name: "",
          amount: ""
        }
        let ingredientsplit = ingredient[j].split(":")
        obj.name = ingredientsplit[1].trim()
        obj.amount = ingredientsplit[0].trim()
        let ingredientObj = new Ingredient(obj)
        totalIngredient.push(ingredientObj)
      }

      if (splitname[0].trim() === "peanut butter") {
        result.push(new PeanutButter(splitname[0].trim(),totalIngredient))
      }
      else if (splitname[0].trim() === "chocolate chip") {
        result.push(new ChocholateChip(splitname[0].trim(),totalIngredient))
      }
      else if (splitname[0].trim() === "chocolate chip crumbled") {
        result.push(new ChocolateChipCrumbled(splitname[0].trim(),totalIngredient))
      }
      else if (splitname[0].trim() === "peanut butter crumbled") {
        result.push(new PeanutButterCrumbled(splitname[0].trim(),totalIngredient))
      }
      else {
        result.push(new OtherCookie(splitname[0].trim(),totalIngredient))
      }
    }
    for (var i = 0; i < result.length; i++) {
      for (var j = 0; j < result[i].ingredients.length; j++) {
        if (result[i].ingredients[j].name === "sugar") {
          result[i].has_sugar = true
        }
      }
    }
    return result
  }
}

let batch_of_cookies = CookieFactory.create(options)
let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies)
console.log("sugar free cakes are :");
for (var i = 0; i < sugarFreeFoods.length; i++) {
  console.log(sugarFreeFoods[i]);
}
