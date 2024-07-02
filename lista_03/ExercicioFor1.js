const leia = require("readline-sync");

let numero1, contador, numero2, cont = 0, total;

for (contador = 1; contador <= 10; contador++) {
        numero1 = leia.questionInt("Informe o primeiro numero do intervalo: ")
        numero2 = leia.questionInt("Informe o segundo valor do intervalo: ");
if ((numero1 < numero2 ) 
    return
    || (total = numero1 % 3 && numero1 % 5) || (total = numero2 % 3 && numero2 % 5)){
    console.log("No intervalo entre" , + numero1, " e " + numero2, " = ", total, + cont++);
} else {
    console.log("Intervalo invalido!"); 
}

       
    // Não consegui terminar de desenvolver esse.