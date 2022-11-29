const escribirArchivo = require('./mierdas.js')

console.log('inicio del programa')

// la func se definio como bloqueante, recibe un callback que se ejecuta al finalizar la escritura

escribirArchivo('hola mundo', () => {
    console.log('termine de escribir el archivo')
})

console.log('fin del programa')

// se muestra en consola
// inicio del programa
// fin del programa
// termine de escribir el archivo