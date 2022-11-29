function funA(){
    console.log(1)
    funB()
    console.log(2)
}
function funB(){
    console.log(3)
    funC()
}
function funC(){
    console.log(5)
}

funA()

// al ejecutar funcA se muestra esto

1
3
5
4
2

// las op sincronas son bloqueantes, es decir que hasta que no se termine una no arranca la otra