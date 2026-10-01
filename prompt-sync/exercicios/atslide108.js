import promptSync from 'prompt-sync';
const prompt = promptSync();

const nome = prompt('Qual é o seu nome? ');
const idade = parseInt(prompt('Qual é a sua idade? '));

if (idade >= 18) {
    console.log(`${nome}, você já é maior de idade.`);
} else {
    const quantoFalta = 18 - idade;
    console.log(`${nome}, você vai ser maior de idade em ${quantoFalta} anos.`);
}   