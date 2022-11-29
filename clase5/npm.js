const moment = require('moment')

const currrentDate = moment()


const birthdate = moment('1999-06-18', 'YYYY-MM-DD')
console.log(birthdate)


const daysby = currrentDate.diff(birthdate, 'days')
const monthsby = currrentDate.diff(birthdate, 'months')

console.log(`since i was born, ${daysby} days have passed by`)
console.log(`since i was born, ${monthsby} months have passed by`)