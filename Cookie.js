"use strict"

class Cookie  {
    constructor(name, ingridents) {
        this.status = 'mentah'
        this._name = name
        this._ingridents = ingridents
        this.hasSugar = null
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

    set status(input) {
        this._status = input
    }

    set name(input) {
        this._name = input
    }

    set ingridents(input) {
        this._ingridents = input
    }

    get ingridents() {
        return this._ingridents
    }

    get status() {
        return this._status
    }

    get name() {
        return this._name
    }
}

module.exports = Cookie