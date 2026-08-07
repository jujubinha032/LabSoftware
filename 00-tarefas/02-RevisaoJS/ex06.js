// Exercícios 6 - Operações

// Um produto custa R$120.

// Crie uma variável desconto igual a 20%.

// A pessoa possui somente R$30, após a operação verifique se a pessoa possui dinheiro suficeinte

// Mostre o preço final juntamente com a possibilidae da pessoa poder ou não comprar o produto.

let produto = 120
 let desconto = 0.2
 let carteira = 30

 let valor = produto - (produto * desconto)
 if(carteira < valor){
    console.log(`Saldo insuficiente o preco final com seu desconto e: ${valor}`)
 }
 else{
    console.log(`saldo suficeinte`)
    }
