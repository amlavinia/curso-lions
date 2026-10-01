//Alternativa apresentada pelo professor

import promptSync from 'prompt-sync';
const prompt = promptSync();

let numero = parseInt(prompt('Digite um número: '));

if (numero === 0) {
    console.log('Esse número é zero.');
} else if (numero % 2 === 0)
    console.log ('É um númeoro par.');
    else{
        console.log('É um número ímpar.');
    }