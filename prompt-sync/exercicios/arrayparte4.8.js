import promptSync from 'prompt-sync';
const prompt = promptSync();

// Resto do código continua igual...
let tarefas = [];
let quantidade = Number(prompt("Quantas tarefas?"));

for (let i = 0; i < quantidade; i++) {
    let novaTarefa = prompt("Tarefa:");
    tarefas.push(novaTarefa);
}

console.log(`-> Você tem ${tarefas.length} tarefas:`);

for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1} - ${tarefas[i]}`);
}