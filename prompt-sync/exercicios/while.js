/* 1. Mostrar o menu de opções
console.log("1 - Somar");
console.log("2 - Subtrair");
console.log("3 - Multiplicar");
console.log("4 - Dividir");
console.log("5 - Porcentagem");
console.log("6 - Ver resultado");
console.log("7 - Sair"); //Essa opção vai encerrar o programa, preciso usar While para que o programa continue rodando até que o usuário escolha a opção 7

// 2. Pedir a escolha da operação e os números
let opcao = Number(prompt("Escolha a opção (1-7): "));
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

let resultado;
*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

let opcao = 7

console.log("1 - Somar");
console.log("2 - Subtrair");
console.log("3 - Multiplicar");
console.log("4 - Dividir");
console.log("5 - Porcentagem");
console.log("6 - Ver resultado");
console.log("7 - Sair");

while (opcao !== 7) {
    opcao = Number(prompt("Escolha a opção (1-7): "));

switch (opcao) {
    case 1:
        resultado = numero1 + numero2;
        console.log('resultado da soma é: ' + resultado);
        break;

    case 2:
        resultado = numero1 - numero2;
        console.log('resultado da subtração é: ' + resultado);
        break;

    case 3:
        resultado = numero1 * numero2;
        console.log('resultado da multiplicação é: ' + resultado);
        break;

    case 4:
        resultado = numero1 / numero2;
        console.log('resultado da divisão é: ' + resultado);
        break;
        
    case 5:
        resultado = (numero1 / numero2) * 100;
        console.log('resultado da porcentagem é: ' + resultado);
        break;
        
    case 6:
        resultado = numero1 / numero2;
        console.log('resultado da divisão é: ' + resultado);
        break;
        
    case 7:
        resultado = numero1 / numero2;
        console.log('resultado da divisão é: ' + resultado);
        break;
}

}

