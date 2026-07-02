// Exercícios 6 - Operações

// Um produto custa R$120.

// Crie uma variável desconto igual a 20%.

// A pessoa possui somente R$30, após a operação verifique se a pessoa possui dinheiro suficeinte

// Mostre o preço final juntamente com a possibilidae da pessoa poder ou não comprar o produto.

let valorProduto = 120;

let desconto = 0.2;

let custoCompra = valorProduto - valorProduto * desconto;

let dinheiroCliente = 30;

if (custoCompra <= dinheiroCliente) {
  console.log(
    `O preço da compra será de R$${custoCompra.toFixed(2)}. 
    Pode Comprar, você possui R$${dinheiroCliente}`,
  );
} else {
  console.log(
    `O preço da compra será de R$${custoCompra.toFixed(2)}. 
    Não pode comprar, você possui somente R$${dinheiroCliente}`,
  );
}
