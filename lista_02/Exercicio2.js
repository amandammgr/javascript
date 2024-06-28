const leia = require("readline-sync");

let n1, total;

n1 = leia.questionInt("Digite um numero inteiro: ")

total = n1 / 2
total = n1 % 2

if (total == 0 && n1 >= 0) {
    console.log("\nO numero %i", n1, "é par e positivo!");
} else if (total == 0 && n1 < 0) {
    console.log("\nO numero %i", n1, "é par e negativo!");
} else if (total && n1 >= 0) {
    console.log("\nO numero %i", n1, "é impar e positivo!");
} else {
    console.log("\nO numero %i", n1, "é impar e negativo!");
}

