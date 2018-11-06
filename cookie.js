"use strict"

const Ingredients = require('./ingredients')

class Cookie {
    constructor(name) {
        this._name = name
        this._status = "mentah"
        this._ingredients = []
        this._hasSugar = false
    }

    get name() {
        return this._name
    }

    set name(input) {
        this._name = input
    }

    get status() {
        return this._status
    }

    set status(input) {
        this._status = input
    }

    get ingredients() {
        return this._ingredients
    }

    set ingredients(input) {
        this._ingredients = input
    }

    get hasSugar() {
        return this._hasSugar
    }

    set hasSugar(input) {
        this._hasSugar = input
    }

    bake() {
        this.status = "selesai dimasak"
    }

    ingredientsSet(name) {
        let data = Ingredients.readFileIngredients('./ingredients.txt').split('\n')
        let arr = []
        for (let i = 0; i < data.length; i++) {
            let cookieName = data[i].split(' =')[0]
            if (cookieName == name) {
                arr = data[i].split('=')[1].split(',')
            }
        }
        let obj = {}
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i].split(': ')
            obj.name = temp[1]
            obj.amount = temp[0]
            let recipe = new Ingredients(obj)
            this.ingredients.push(recipe)
        }
    }

    sugarCheck() {
        let temp = 0
        for (let i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].name == 'sugar') {
                temp += 1
            }
        }
        if (temp > 0) {
            this.hasSugar = true
        }
    }
}

module.exports = Cookie