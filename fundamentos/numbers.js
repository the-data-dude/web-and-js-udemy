const n1 = 1.0
const n2 = Number('2.0')
const n3 = 2.4

console.log(Number.isInteger(n1))
console.log(Number.isInteger(n2))
console.log(Number.isInteger(n3))

const n4 = 2/1
const n5 = 2/1.0
const n6 = 2.0/1
const n7 = 2.0/1.0

console.log(n4)
console.log(n5)
console.log(n6)
console.log(n7)

const n8 = 9.94349834
console.log(n8.toFixed(2))
console.log(n8.toPrecision(2))
console.log(n8.toString())


const n9 = 1/0
console.log(n9)

const n10 = "10"/2
console.log(n10)

console.log((10).toString())