import promptSync from 'prompt-sync';
const prompt = promptSync();

let numero = parseFloat(prompt('Digite o número que deseja multiplicar: '));

for (let i = 1; i <= 10; i++){
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);             
}   


