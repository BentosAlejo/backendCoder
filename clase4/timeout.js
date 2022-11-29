

const temporizador = (callback) =>{
    setTimeout(callback, 2000)
}
const operacion = () => console.log('ejecutar operacion')
console.log('iniciar proceso')

temporizador(operacion)
console.log('finalizar proceso')