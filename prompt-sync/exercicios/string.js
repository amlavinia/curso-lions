import PromptSync from "prompt-sync"

const prompt = promptSync()

const nome = prompt("Qual o nome do pet?")
const idade = prompt("Qual a idade do pet?")

console.log('O ${nome} tem ${idade} anos.')
