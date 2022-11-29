const fs = require('fs')

const filename = './ejemplo.txt'

// fs.writeFileSync('./ejemplo.txt', 'saludos a messi')

if(fs.existsSync(filename)){
    let contenido = fs.readFileSync(filename, 'utf-8')
    console.log('contenido:', contenido)

   fs.appendFileSync(filename, '\nsaludos para el bicho cr7')
   contenido = fs.readFileSync(filename, 'utf-8')
    console.log('new content: ', contenido)

    fs.unlinkSync(filename, 'utf-8') // borrar archivo
}else{
    console.log('el archivo no existe')
}


console.log('end!')