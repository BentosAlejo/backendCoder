const fs = require('fs')


const contenidoStr = fs.readFileSync('package.json', 'utf-8')
// console.log(contenidoStr)

const contenidoObj = JSON.parse(contenidoStr)
// console.log(contenidoObj)

const tamaño = contenidoStr.length


const info = {
    contenidoStr: contenidoStr, // 'contenido del archivo leido en formato string'
    contenidoObj: contenidoObj, // 'contenido del archivo leido en formato objeto'
    size: tamaño    //'tamaño en bytes del archivo'
}

console.log(info)

const operacionAsync = async() =>{
    await fs.promises.writeFile('./info.json', JSON.stringify(info))
    let contenido = await fs.promises.readFile('./info.json', 'utf-8')
    console.log(contenido)

    //   contenido = await fs.promises.appendFile('./info.json', 'utf-8')
    //   console.log(contenido)
    // console.log(contenido)
}

operacionAsync()
