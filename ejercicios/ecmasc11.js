const varTest = 0 // falsy

const varAssignable = varTest || "Sin valor"

console.log(varAssignable)

const varAssignable2 = varTest ?? "Sin valor"

console.log(varAssignable2)


class Persona {
    #age
    constructor(name, lastName, age){
        this.name = name
        this.lastName = lastName
        this.#age = age
    }
    getAge = () => {return this.#age}
}

const alejo = new Persona("Alejo", 'Bentos', 23)
console.log(alejo)
console.log(alejo.getAge())