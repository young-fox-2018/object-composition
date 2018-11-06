class Cookie {
    constructor(name, ingredient) {
        this.name = name
        this.status = 'mentah'
        this.ingredients = ingredient
        this.has_sugar = this.hasSugar();
    }
    bake() {
        this.status = 'selesai dimasak'
    }
    hasSugar() {
        for (let i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].name === 'sugar') {
                return true;
            }
        }
        return false;
    }
}

module.exports = Cookie