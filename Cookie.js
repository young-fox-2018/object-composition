class Cookie {
    constructor(name, ingredients) {
        this.name = name;
        this.status = 'mentah';
        this.ingredients = ingredients;
        this.has_sugar = null;
    }

    bake() {
        this.status = 'selesai dimasak'
    }
}

module.exports = Cookie