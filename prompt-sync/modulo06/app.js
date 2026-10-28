import promptSync from "prompt-sync";

import contatos from "./contatos.js";
import listarContatos from "./listarcontatos.js";
import adicionarContatos from "./adicionarcontato.js";
import atualizarContatos from "./listarcontatos.js";
import excluirContatos from "./excluircontatos.js";

const prompt = promptSync();
let opcao;

do {
    console.log("=== Escolha uma opções ===");
    console.log("1 - Listar Contatos");
    console.log("2 - Adicionar Contatos");
    console.log("3 - Atualizar Contatos");
    console.log("4 - Excluir Contatos");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case '1':
            listarContatos(contatos);
            break;
        case '2':
            adicionarContatos(contatos);
            break;
        case '3':
            atualizarContatos(contatos);
            break;
        case '4':
            excluirContatos(contatos);
            break;
        case '5':
            console.log("A sair...");
            break;
        default:
            console.log("Opção inválida!");
            break;
    }

} while (opcao !== 0);