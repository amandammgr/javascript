const leia = require("readline-sync");

let n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, contador, contadorPar = 0, contadorImpar = 0;

for (contador = 1; contador <= 10; contador++) {
        n1 = leia.questionInt("Digite o primeiro numero: ");
        n2 = leia.questionInt("Digite o segundo numero: ");
        n3 = leia.questionInt("Digite o terceiro numero: ");
        n4 = leia.questionInt("Digite o quarto numero: ");
        n5 = leia.questionInt("Digite o quinto numero: ");
        n6 = leia.questionInt("Digite o sexto numero: ");
        n7 = leia.questionInt("Digite o setimo numero: ");
        n8 = leia.questionInt("Digite o oitavo numero: ");
        n9 = leia.questionInt("Digite o nono numero: ");
        n10 = leia.questionInt("Digite o decimo numero: ");

        if (n1 % 2 == 0) {
                contadorPar++;
        } else {
                contadorImpar++;
        }

        // Não estou sabendo como fazer o contador rodar direito, mas estou enviando apenas para verem minha tentativa.
        console.log(`Total de numeros pares: ${contadorPar++}`, `\n Total de numeros impares: ${contadorImpar++}`);
}
