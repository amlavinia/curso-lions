import promptSync from "prompt-sync";

import numeros from "./numeros.js";
import adicionarNumero from "./adicionar.js";
import removerNumero from "./remover.js";
import calcularMedia from "./media.js";

const prompt = promptSync();

let opcao = -1;
let num = -1;

do {

console.log("=== Menu de opções ===");
console.log("1 - Adicionar");
console.log("2 - Remover");
console.log("3 - Listar Números");
console.log("4 - Calcular Média");
console.log("5 - Calcular Mediana");
console.log("0 - Sair");

opcao = parseInt(prompt("Escolha uma opção: "));

switch (opcao) {
    case 1: // Adiconar um númeor
        console.log("Qual número você quer aicionar: ");
        num = parseFloat(prompt("R: "));
        adicionarNumero(num);
        break;

    case 2:
        removerNumero(num);
        break;

    case 3:
        console.table(numeros);
        break;

    case 4:
        console.log(`A média é: ${calcularMedia()}`);
        break;

    case 0:
        console.log("Fechando o programa...");
        break;
    
    default:
        console.log("Opção inválida!");
        break;
}

} while (opcao !== 0);
