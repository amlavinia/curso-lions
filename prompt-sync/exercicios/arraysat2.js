import PromptSync from 'prompt-sync';
const prompt = PromptSync();

const prova1 = parseFloat(prompt('Digite a nota da primeira prova: '));
const prova2 = parseFloat(prompt('Digite a nota da segunda prova: '));
//.push utilizado para adicionar elementos no array
const notas = []
notas.push(prova1);
notas.push(prova2);
//.lenth é o tamanho do array
const media = (notas[0] + notas[1]) / notas.length 

console.log(`A média das notas é: ${media}`);