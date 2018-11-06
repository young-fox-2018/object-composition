class Cookie{
    constructor(name, ingredients){
        this.name = name
        this.status = "mentah"
        this.has_sugar = null
        this.ingredients = ingredients
    }

    bake(){
        this.status = "selesai dimasak"
    }
}

module.exports = Cookie
