import promptSync from 'prompt-sync';
const prompt = promptSync();

let gostaDeCafe = prompt('Você gosta de café?: ');

if (gostaDeCafe.toLowerCase() === 'sim') {
    console.log('Que bom! O café é uma bebida muito apreciada.');
} else if (gostaDeCafe.toLowerCase() === 'não' || gostaDeCafe.toLowerCase() === 'nao') {
    console.log('Tudo bem! Nem todo mundo gosta de café.');
} else {
    console.log('Resposta inválida. Por favor, responda com "sim" ou "não".');
}