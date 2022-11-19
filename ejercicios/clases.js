class Persona {
    constructor(nombre){
        console.log("Se ha creado una persona")
        this.name = nombre
        this.age = 23
    }
    static especie = "humano"
    speak(){
        console.log("My name is ", this.name, Persona.especie)
    }
    walk = () => {
        console.log("Like this")
    }
}
const alejo = new Persona("Alejo")
const toto = new Persona("Toto")
const tonga = new Persona("Tonga")

tonga.age = 24
Persona.especie = "Homo sapiens"

console.log(alejo.age)
console.log(toto.age)
console.log(Persona.especie)
