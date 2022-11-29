const fs = require('fs')

const objeto = {
    nombre:'Alejo',
    apellido:'Bentos',
    edad: 23
}


//exportar objetos
const objStr = JSON.stringify(objeto)
fs.writeFileSync('objeto.json', objStr)


// leer obj de archivos
const contenidoStr = fs.readFileSync('objeto.json', 'utf-8')
console.log(contenidoStr)


// 
const objetoNuevo = JSON.parse(contenidoStr)
console.log(objetoNuevo)