//7. Maior e Menor

const temperaturas = [22, 30, 18, 27, 15, 33, 21];
// Esperado: Maior: 33 | Menor: 15
let maior = temperaturas[0];
let menor = temperaturas[0];

for (let i = 0; i < temperaturas.length; i += 1) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }
    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
}

console.log("Maior:", maior, "| Menor:", menor);