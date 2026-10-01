//Primeiro deve importar o pacote (Input)
import promptSync from 'prompt-sync'

//Executa o pacote e cria a função prompt
const prompt = promptSync()

//Solicita ao usuário que digite dois números
let nota1 = parseFloat(prompt('DIgite a primeira nota: '))
let nota2 = parseFloat(prompt('DIgite a segunda nota: '))
let media = (nota1 + nota2) / 2

//Exibe a média das notas (Output)
console.log('A média é: ' + media)

let ano1 = 2026
ano1 = ano1 + 1
console.log(ano1)

let ano2 = 2020
ano2 += 1
console.log(ano2)

let somaTotal = 0

somaTotal = somaTotal + numero
//Forma abreviada de escrever a mesma coisa
somaTotal += numero

let ano = 2026

ano = ano + 1

ano += 1

ano++

console.log(ano)