const list = [1, 2, 3, 4, 5]

const myMap = (list, callback) => {
    const newList = []

    for (const element of list) {
        const newValue = callback(element)
        newList.push(newValue)
    }

    return newList
}

const newList = myMap(list, x => x*3)
const newList2 = myMap(list, x => x*x)
console.log(newList)
console.log(newList2)

console.log('---------------------------------')

Array.prototype.myMap = function(callback){
    const newList = []

    for(let i= 0; i < this.length; i++){
        element = this[i]
        const callbackResult = callback(element)
        newList.push(callbackResult)
    }
    return newList
}

const myList = [2, 4, 6, 8, 11]
const result = myList.myMap(x => x + 45)
const result2 = myList.myMap(x => x * 4)

console.log(result, result2)