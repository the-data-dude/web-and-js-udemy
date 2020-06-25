const pessoa = {
    nome: 'Ana',
    idade: 21,
    endereco: {
        logradouro: 'rua 123',
        numero: 100
    }
}

const {nome: v1, idade: v2} = pessoa
console.log(v1,v2)

const {nome: v3, endereco: {logradouro: v4}} = pessoa
console.log(v3,v4)