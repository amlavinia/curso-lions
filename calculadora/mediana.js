import numeros from "./numeros.js";

function calcularMediana() {
    let mediana = 0;

    if (numeros.length === 0) {
        return "A lista esta vazia.";
    }

    const ordenados = numeros.slice ().sort((a, b) => a - b); // Usar para ordenar de forma crescente
    const meio = Math.floor(ordenados.length / 2); //Identificar o tamanho do array e localizar o meio e transformar em numero inteiro

    if (ordenados.length % 2 === 0) {
        mediana = (ordenados[meio - 1] + ordenados[meio]) / 2;
    } else {
        mediana = ordenados[meio];
    }

    return mediana;
}

export default calcularMediana;
