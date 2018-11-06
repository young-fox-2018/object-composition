const fs = require('fs')
const ingredientsData = fs.readFileSync('ingredients.txt', 'utf8').split('\n')
const ingredientsList = []

class Ingredient{
    constructor(arr){
        this.name = arr[0]
        this.amount = arr[1]
    }   
}

let splitByComa = []
ingredientsData.forEach(item => {
    splitByComa.push(item.split(','))
})

let arr = []
splitByComa.forEach(item => {
    let obj = {}
    obj.name = item[0]
    obj.ingredients = []
    ingredientsList.push(obj)
    arr.push(item.slice(1))
})

arr.forEach((item, index) => {
    item.forEach(element => {
        ingredientsList[index].ingredients.push(new Ingredient(element.split(':')))
    })  
})

module.exports = ingredientsList