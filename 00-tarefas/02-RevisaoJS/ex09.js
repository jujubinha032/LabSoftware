// Desafio - Loja

// Crie:

// produto
// preco
// quantidade

// Calcule:

// total = preco * quantidade

// Se o total for maior que R$500:

// Desconto de 15%

// Caso contrário:

// Sem desconto

// Mostre o total.


const produto = "Notebook";
const preco = 2500;
const quantidade = 1;

let total = preco * quantidade;

if (total > 500) {
  total = total - (total * 0.15);
}

console.log(`Produto: ${produto}`);
console.log(`Preço: R$ ${preco}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Total: R$ ${total.toFixed(2)}`);