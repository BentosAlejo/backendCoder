// const { reject } = require("async")

const dividir = (num1, num2) => {
    return new Promise((resolve, reject) =>  (num2 == 0) ? reject('no se puede dividir entre 0') : resolve (num1 / num2))
}

const sumar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num1 == 0 || num2 == 0) return reject('operacion innecesaria')
        return resolve(num1 + num2)
    })
}

const restar = (num1, num2) => {
    return new Promise((resolve, reject) =>{
        if(num1 == 0 || num2 == 0) return reject(' operacion invalida')
        else{
            const resultado = num1 - num2
            if(resultado < 0){
                reject('la calculadora solo trabaja con positivos')
            }else{
                resolve(resultado)
            }
        }
    })
}

const multiplicar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num1 < 0 || num2 < 0) return reject(' operacion invalida')
        else{
            const producto = num1 * num2
            if(producto < 0)reject('la calculadora solo trabaja con positivos')
            else resolve(producto)
        }
    })
}

const calculos = async () =>{
    try{
        console.log(await sumar(10, 4))
        console.log(await restar(11, 5))
        console.log(await dividir(30, 4))
        console.log(await multiplicar(100, 340))
    } catch(error){
        console.log('error: ', error)
    }
}
calculos()