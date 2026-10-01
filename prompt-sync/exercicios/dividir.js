import promptSync from 'prompt-sync';
const prompt = promptSync();

// 1. Mostrar o menu de opções

const dividir = (a, b) => {
    return a / b;
};

// Pede os números ao usuário (o Number converte o texto digitado para número)
const num1 = Number(prompt('Digite o primeiro número: '));
const num2 = Number(prompt('Digite o segundo número: '));

// Chama a função e exibe o resultado
console.log(`O resultado da divisão é: ${dividir(num1, num2)}`);