const taxes = {
    tax1: 16,
    tax2: 40,
    tax3: 5,
    tax4: 30
}

let pairKeyValue = Object.entries(taxes)
console.log(pairKeyValue)

let keys = Object.keys(taxes)
console.log(keys)

let values = Object.values(taxes)
console.log(values)

const totalTax = values.reduce((element, current) => element + current)
console.log(totalTax)