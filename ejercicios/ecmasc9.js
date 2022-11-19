//spread

const obj1 = {
    prop1: 2,
    prop2: 'my property',
    prop3: true,
    
}

const obj2 = {
    prop4: 'cars',
    prop5: [1, 2, 3, 4, 5, 6, 7],
    
    
    
}
let {prop1, prop2} = obj1

console.log(prop1, prop2)

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const obj4 ={
    a:1,
    b:2,
    c:3,
    d:4
}

const {a, ...rest} = obj4
console.log(a)
console.log(rest)
console.log('----------------')
const obj5 = {...obj4}
obj5.a = 2555555
console.log("obj 4", obj4)
console.log("obj5", obj5)
