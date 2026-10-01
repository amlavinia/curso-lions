import promptSync from 'prompt-sync';
const prompt = promptSync();

let numero = parseFloat(prompt('Informe um número: '));

if (numero === 0) {
    console.log('O número informado é zero.');
} else if (numero % 2 === 0) {
    console.log(`O número informado foi: ${numero} e ele é par.`);
} else {
    console.log(`O número informado foi: ${numero} e ele é ímpar.`);
}

