const originals = [0, 1, 2, 3, 4, 5, 6, 7]

callback = (element) => {
    return element +1
}

const newValues = originals.map(callback)
console.log(callback)
console.log(newValues)

const newValues3 = originals.map(x => x * 2)
console.log(newValues3)

const values = originals.map(x => "a")
console.log(values)