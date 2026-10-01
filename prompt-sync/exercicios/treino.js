//1. Crie um array frutas com 3 frutas e imprima o array inteiro.
let frutasAmarelas = ['abacaxi', 'melao', 'banana']

//4. Adicione "manga" no final do array com .push() e imprima.
frutasAmarelas.push('manga');
//5. Adicione "uva" no início do array com .unshift() e imprima.
frutasAmarelas.unshift('uva');
//6. Remova o último elemento com .pop() e imprima o array.
frutasAmarelas.pop('manga');

//7. Imprima o primeiro e o último elemento (use .length - 1 ).
const posicaoPrimeira = frutasAmarelas[0];
const posicaoUltima = frutasAmarelas[frutasAmarelas.length - 1];

//8. Crie const numeros = [4, 8, 15] e imprima a soma dos três (acessando por índice).
const numeros = [4, 8, 15];
const soma = numeros[0] + numeros[1] + numeros[2];

//1. Crie um array frutas com 3 frutas e imprima o array inteiro.
console.log(`As frutas criadas no array foram: ${frutasAmarelas [0]}, ${frutasAmarelas [1]}, ${frutasAmarelas [2]}.`);

//2. Imprima a segunda fruta do array (índice 1).
console.log(`A segunda fruta do array é: ${frutasAmarelas [1]}.`);

//3. Imprima o tamanho do array com .length .
console.log(frutasAmarelas.length);

//7. Imprima o primeiro e o último elemento (use .length - 1 ).
console.log(`A primeira fruta do array é ${posicaoPrimeira} e a última fruta do array é ${posicaoUltima}.`);

//8. Crie const numeros = [4, 8, 15] e imprima a soma dos três (acessando por índice).
console.log(`A soma dos números do array é: ${soma}.`);

//9. Use for para imprimir todos os elementos de frutas , um por linha.
for (let i = 0; i < frutasAmarelas.length; i++){
    console.log(frutasAmarelas[i]);
}

//10. Verifique com .includes() se "banana" está no array e imprima true / false .
let verFruta = frutasAmarelas.includes('banana');
console.log(`A fruta banana está no array? ${verFruta}.`);