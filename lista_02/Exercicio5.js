const leia = require('readline-sync');

let codigo, quantidade, valorTotal;


console.log("\n Produtos: ");
console.log("\n 1 -- Cachorro Quente -- R$ 10,00 ");
console.log("\n 2 -- X-Salada -- R$ 15,00 ");
console.log("\n 3 -- X-Bacon -- R$ 18,00 ");
console.log("\n 4 -- Bauru -- R$ 12,00");
console.log("\n 5 -- Refrigerante -- R$ 8,00 ");
console.log("\n 6 -- Suco de laranja -- R$ 13.00 ");

codigo = leia.questionInt("\nDigite o codigo do produto desejado: ")
quantidade = leia.questionInt("\nDigite a quantidade que deseja comprar: ")
switch (codigo) {
    case 1:
        valorTotal = quantidade * 10
        console.log("\nCachorro Quente, total da compra: ", valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        break;
    case 2:
        valorTotal = quantidade * 15
        console.log("\nX-Salada, total da compra: ", valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        break;
    case 3:
        valorTotal = quantidade * 18
        console.log("\nX-Bacon, total da compra: ", valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        break;
    case 4:
        valorTotal = quantidade * 12
        console.log("\nBauru, total da compra: ", valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        break;
    case 5:
        valorTotal = quantidade * 8
        console.log("\nRefrigerante, total da compra: ", valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        break;
    case 6:
        valorTotal = quantidade * 13
        console.log("\nSuco de laranja, total da compra: ", valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        break;
    default:
        console.log("\nDigite um codigo valido!");
}

// Estava pensando em uma maneira do valorTotal sair como R$ e lembrei da explicação do Rafael sobre o toLocaleString durante a apresentação do Joshua.
// Decidi pesquisar um pouco mais no google para entender melhor a funcionalidade dele e deu certo.