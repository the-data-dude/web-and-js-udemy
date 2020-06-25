const prod = {}
prod.nome = "Nome do produto"
prod.preco = 100
prod['desconto'] = 0.40
prod['valor_final'] = prod.preco * (1-prod.desconto)

console.log(prod)