new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1200)
})
    .then(result => {
        console.log('res :', result)
        return result = 2
    })
    .then(result => {
        console.log('res part two: ', result)
        throw 'error'
        return result * 3
    })
    .then(result => {
        console.log('res part 3: ', result)
    })
    .catch(error => {
        console.log(error)
    })

    console.log('end')