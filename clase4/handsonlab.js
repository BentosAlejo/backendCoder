const fs = require('fs')


class ManagerUser {
    constructor(filename){

        this.filename = filename
        this.format = 'utf-8'
    }

    crearUsuario = async (nombre, apellido, edad, curso) =>{
        const usuarios = await this.verUsuario()

        usuarios.push({nombre, apellido, edad, curso})

        return fs.promises.writeFile(this.filename, JSON.stringify(usuarios))
    }
    verUsuario = async () => {
        
       return fs.promises.readFile(this.filename, this.format)
        .then(contenido => JSON.parse(contenido))
        .catch(e => {
            console.log('error: ', e)
            return []})
        
    }
}




async function  run(){
    const manager = new ManagerUser('usuarios.json')
   await manager.crearUsuario('Alejo', 'Bentos', 23, 'backend')
     console.log(await manager.verUsuario())
}

run()