const fs = require('fs')

const filename = './ejemplo.txt'

fs.writeFile(filename, 'saludos a nicolas cage, ', error => {
    if(error) return console.log('hubo un error al escribir')
    fs.appendFile(filename, 'saludos a messi', error => {
        if(error) return console.log('hubo un error al agregar contenido')
        fs.readFile(filename, 'utf-8', (error, contenido) =>{
            if(error) return console.log('hubo un error al leer el archivo')
            console.log('contenido: ', contenido)
            fs.unlink(filename, error =>{
                if(error) return console.log('hubo un error al borrar el archivo')
                console.log('borrado exitosamente')
            })
        })
    })
})

console.log('fin')