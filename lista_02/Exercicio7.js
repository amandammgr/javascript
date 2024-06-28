const leia = require('readline-sync');

let n1, n2, codigo, resultado;


console.log("\n CALCULADORA: ");
console.log("\n 1 -- Soma ");
console.log("\n 2 -- Subtração ");
console.log("\n 3 -- Multiplicação ");
console.log("\n 4 -- Divisão ");


n1 = leia.questionFloat("\nDigite o primeiro numero: ")
n2 = leia.questionFloat("\nDigite o segundo numero: ")
codigo = leia.questionInt("\nDigite o codigo da operacao: ")
switch (codigo) {
    case 1:
        resultado = n1 + n2
        console.log("\nA soma de %f", n1, "+", n2, "=", resultado.toFixed(2));
        //Tentei achar alguma maneira de utilizar o %f para o n2 também, mas não descobri como fazer isso, então durante a execução ele fica com outra cor
        break;
    case 2:
        resultado = n1 - n2
        console.log("\nA subtracao de %f", n1, "-", n2, "=", resultado.toFixed(2));
        break;
    case 3:
        resultado = n1 * n2
        console.log("\nA multiplicacao de %f", n1, "*", n2, "=", resultado.toFixed(2));
        break;
    case 4:
        resultado = n1 / n2
        console.log("\nA divisao de %f", n1, "/", n2, "=", resultado.toFixed(2));
        break;
    default:
        console.log("\nOperacao Invalida");
}