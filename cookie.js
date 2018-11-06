const fs = require('fs')
const dataIngredient = fs.readFileSync('./ingredients.txt').toString().split('\n')
const Ingredient = require('./ingredient.js')
class Cookie {
    constructor(name) {
        this._name = name
        this._status = 'mentah'
        this._ingredients = []
        this._has_sugar = null
    }
    bake() {
        this.status = 'selesai dimasak'
    }
    get has_sugar() {
        return this._has_sugar
    }
    set has_sugar(sugar) {
        this._has_sugar = sugar
    }
    get status() {
        return this._status
    }
    set status(stat) {
        this._status = stat
    }
    get name() {
        return this._name
    }
    set name(nama) {
        this._name = nama
    }
    get ingredients() {
        return this._ingredients
    }
    set ingredients(ingredient) {
        this._ingredients = ingredient
    }
    setIngredient(input) {
        let arr = []
        for (let i = 0; i < dataIngredient.length; i++) {
            let split = dataIngredient[i].split('=')[0]
            if (split === input) {
                arr = dataIngredient[i].split('=')[1].split(',')
            }
        }
        let obj = {}
        for (let i = 0; i < arr.length; i++) {
            let splitTitikDua = arr[i].split(': ')
            obj.name = splitTitikDua[1]
            obj.amount = splitTitikDua[0]
            let arrIng = new Ingredient(obj)
            this.ingredients.push(arrIng)
        }
    }
    checkSugar() {
        let countSugar = 0
        for (let i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].name === 'sugar') {
                countSugar++
            }
        }
        if (!countSugar) {
            this.has_sugar = false
        } else {
            this.has_sugar = true
        }
    }
}


module.exports = Cookie