const fs = require('fs')

const filename = './ejemplo.txt'

const operacionAsync = async() =>{
    await fs.promises.writeFile(filename, 'saludos a toter\n')

    let contenido = await fs.promises.readFile(filename, 'utf-8')
    console.log('contenido:  ', contenido)

    await fs.promises.appendFile(filename, 'saludos a tonga\n')

    contenido = await fs.promises.readFile(filename, 'utf-8')
    console.log('new content:  ', contenido)

    fs.promises.unlink(filename)
}


operacionAsync()
console.log('finn')