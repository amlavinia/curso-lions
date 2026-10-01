import promptSync from 'prompt-sync';
const prompt = promptSync();

let resposta = prompt('Você gosta de café? (sim/não):');


let gostaDeCafe = resposta === 'sim';

if (gostaDeCafe) {
    console.log('Gosta de café!.   ');
} else {
    console.log('Não gosta de café!.');