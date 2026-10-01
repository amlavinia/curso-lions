//6. Antes e depois

//CONCEITO

const lista = [10, 20, 30];
lista.push(40); //Inclui o elemento 40 no final da lista
lista.shift(); // Remove o primeiro elemento da lista [10]
console.log(lista); // (a) [10, 20, 30, 40]
console.log(lista.length); // (b) 4 elementos na array
console.log(lista[1]); // (c) Retorna o elemento [20]
console.log(lista.includes(10)); // (d) Retorna 'true' porque o elemento [10] faz parte da lista

//RESOLUÇÃO

const lista = [10, 20, 30];
lista.push(40); //[10, 20, 30, 40]
lista.shift(); // [20, 30, 40]
console.log(lista); // (a) [20, 30, 40]
console.log(lista.length); // (b) 3 elementos na array
console.log(lista[1]); // (c) Retorna o elemento [30]
console.log(lista.includes(10)); // (d) Retorna 'false' porque o elemento [10] não faz parte da lista