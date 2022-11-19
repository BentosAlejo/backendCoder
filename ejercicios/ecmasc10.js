let chain = "                         HI :)"

console.log(chain)

console.log(chain.trim())

const mesages = []
const mesage = "                      "

if(mesage.trim() > 0) mesages.push(mesage)
else console.log("mensaje vacio no se puede enviar")

console.log(mesages)

//flat

const array = [1, 32, 45, 889, [1, 2, 3, 4, ], 3, 56, 78, 90, [444, 321, 55]]

console.log(array.flat())