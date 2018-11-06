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




module.exports = Cookie