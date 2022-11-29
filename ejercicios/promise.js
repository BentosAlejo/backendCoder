const split = (num1, num2) => {
    return new Promise ((resolve, reject) => {
        if(num2 == 0) reject('Cant split 0')
        else resolve(num1 / num2)
    })
}

const promise = split(40, 5)
promise
    .then(result => console.log(result))
    .catch(error => console.log(error))

split(40, 0)
    .then(result => console.log(result))
    .catch(error => console.log(error))

console.log('END') // sale primero en la consola. Promesas van luego

