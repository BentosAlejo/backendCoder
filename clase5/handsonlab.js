const crypto = require('crypto')
const { userInfo } = require('os')


const DB = []
class UserManager {
    getUsers = () => {
        return DB
    }

    insertUser = usuario => {
        usuario.salt = crypto.randomBytes(128).toString('base64')
        userInfo.password = crypto.createHmac('sha256', usuario.salt).update(usuario.password).digest('hex')
        
        DB.push(usuario)

        return usuario
    }
    validarUsuario = (nombreUsuario, password) => {
        const user = DB.find(u => u.nombreUsuario == nombreUsuario)
        if(!user){
            console.log('user not found')
            return 
        }

        const newHash = crypto.createHmac('sha256', user.salt).update(user.password).digest('hex')

        if(newHash == user.password) console.log('logged')
        else console.log('invalid pass')
    }
    
}

const manager = new UserManager()

manager.insertUser({
    name:'alejo',
    lastname:'bentos',
    username:'alejjo',
    password:'123456'

})

console.log(manager.getUsers())

manager.validarUsuario('alejjo', '123456')