import promptSync from "prompt-sync";

import contatos from "./contatos.js";
import listarContatos from "./listarcontatos.js";
import adicionarContatos from "./adicionarcontato.js";
import atualizarContatos from "./listarcontatos.js";
import excluirContatos from "./excluircontatos.js";

const prompt = promptSync();
let opcao;

do {
    console.log("\n=== Escolha uma das opções ===");
    console.log("1 - Listar Contatos");
    console.log("2 - Adicionar Contatos");
    console.log("3 - Atualizar Contatos");
    console.log("4 - Excluir Contatos");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            listarContatos(contatos);
            break;
        case 2:
            console.log("Para adicionar um contato, informe os dados abaixo:");
            let nome = prompt("Digite seu nome: ");
            let telefone = prompt("DIgite um telefone para contato válido: ");
            let email = prompt("Digite um e-mail válido: ");
        case 3:
            atualizarContatos(contatos);
            break;
        case 4:
            excluirContatos();
            break;
        case 5:
            console.log("A sair...");
            break;
        default:
            console.log("Opção inválida!");
            break;
    }

} while (opcao !== 0);