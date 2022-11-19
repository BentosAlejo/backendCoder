const valoresBase = [1, 2, 3, 4, 5, 6, 7]

let newValues = valoresBase.map(val => val ** 2)
console.log(newValues)

let newValues2 = valoresBase.map((element, idx) => element ** idx)

console.log(newValues2)

let names = ['Alejo', 'toto', 'tonga', 'eze', 'luci', 'iva']

if(names.includes('iva')){
    console.log('bien')
}else{
    console.log('no esta')
}