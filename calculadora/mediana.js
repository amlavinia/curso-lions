import numeros from "./numeros.js";

function calcularMediana() {
    // 1. Valida se o array está vazio
    if (numeros.length === 0) {
        return "A lista esta vazia.";
    }

    // 2. Cria uma cópia e ordena os números em ordem crescente
    const ordenados = [...numeros].sort((a, b) => a - b);
    const meio = Math.floor(ordenados.length / 2);

    // 3. Se o número de elementos for ímpar, retorna o elemento do meio
    if (ordenados.length % 2 !== 0) {
        return ordenados[meio];
    }

    // 4. Se for par, retorna a média dos dois elementos centrais
    return (ordenados[meio - 1] + ordenados[meio]) / 2;
}

export default calcularMediana;
