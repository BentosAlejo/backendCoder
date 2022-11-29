 const add = (num1, num2) => num1 + num2
 const less = (num1, num2) => num1 - num2
 const multiply = (num1, num2) => num1 * num2
 const  split = (num1, num2) => num1 / num2

 const execOperation = (num1, num2, operation) => {
    console.log('vamos a ejecutar algo')
    const  result = operation(num1, num2)

    console.log('el relustado de la operacion es: ', result)
 }

 execOperation(3, 7, add)
 execOperation(50, 25, less)
 execOperation(5, 9, multiply)
 execOperation(100, 4, split)
 