// Exercícios 5 - Operações

// Calcule o IMC de uma pessoa.

// Utilize:

// peso
// altura

//Mostre no terminal concatenando as variáveis

//O peso da pessoa analisadea é (peso) e sua altura (altura), seu IMC é igual a (IMC)

// Abaixo de 18,5 kg/m²: baixo peso
// 18,5 a 24,9 kg/m²: peso normal
// 25 a 29,9 kg/m²: sobrepeso
// 30 kg/m² ou mais: obesidade

let peso = 200.0;
let altura = 2.60

let imc = peso / (altura * altura)

console.log(`IMC de altura: ${altura} e peso: ${peso} é igual a ${peso / (altura * altura)}`);