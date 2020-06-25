let isAtivo = false
console.log(isAtivo)
console.log(!isAtivo)
console.log(!!isAtivo)

isAtivo = 1
console.log(isAtivo)
console.log(!isAtivo)
console.log(!!isAtivo)

console.log(!![])
console.log(!!Infinity)
console.log(isAtivo = true)
console.log(!!-1)


console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log(('' || null || 0 || 'epa'))

let nome = ''
let nomeCheck = (nome || 'Não especificado')
console.log(nomeCheck)