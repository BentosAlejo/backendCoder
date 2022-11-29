

const temporizador = () =>{
    let counter = 1
    console.log('iniciando temporizador')
    const timer =  setInterval(() =>{
        console.log(counter++)
        if(counter > 5){
            clearInterval(timer)
        }
    }, 1500)
}
const operacion = () => console.log('ejecutar operacion')
console.log('iniciar proceso')

temporizador()
console.log('finalizar proceso')