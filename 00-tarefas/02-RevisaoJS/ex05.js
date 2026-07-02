// Exercícios 5 - Operações

// Calcule o IMC de uma pessoa.

// Utilize:

// peso
// altura

//Mostre no terminal concatenando as variáveis

//O peso da pessoa analisadea é (peso) e sua altura (altura), seu IMC é igual a (IMC)

let peso = 60.8;
let altura = 1.82;

let imc = peso / (altura * altura);

// Abaixo de 18,5 kg/m²: baixo peso
// 18,5 a 24,9 kg/m²: peso normal
// 25 a 29,9 kg/m²: sobrepeso
// 30 kg/m² ou mais: obesidade

console.log(
  `O peso da pessoa analisada é ${peso} e sua altura ${altura}, seu IMC é igual a ${imc.toFixed(2)}`,
);

if (imc < 18.5) {
  console.log("Baixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}
