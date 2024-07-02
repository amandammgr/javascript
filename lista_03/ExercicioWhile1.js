const leia = require("readline-sync");

let continua;
let idade, contadorMenor21 = 0, contadorMaior50 = 0;

// Não estou sabendo como fazer o contador rodar direito, mas estou enviando apenas para verem minha tentativa.

idade = leia.questionInt("Digite um valor negativo se deseja encerrar \nDigite uma idade: ");

while (idade >= 0)
    idade = leia.questionInt("Digite um valor negativo se deseja encerrar \nDigite uma idade: ");
if (idade <= 21) {
    contadorMenor21++
} else if (idade >= 22) {
    contadorMaior50++
}
console.log("\n Total de pessoas menores de 21 anos: ", `${contadorMenor21}`, "\n Total de pessoas maiores de 50 anos: ", `${contadorMaior50}`);


idade = leia.questionInt("Digite um valor negativo se deseja encerrar \nDigite uma idade:");


