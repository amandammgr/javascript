const leia = require("readline-sync");

let n1, n2, n3, soma;

n1 = leia.questionInt("Digite o primeiro valor: ");

n2 = leia.questionInt("Digite o segundo valor: ");

n3 = leia.questionInt("Digite o terceiro valor: ");


soma = n1 + n2;
if (soma > n3) {
    console.log("\nA soma de A+B é maior que C.");
} else if (soma < n3) {
    console.log("\nA soma de A+B é menor que C.");
} else {
    console.log("\nA soma de A+B é igual a C.");
}