//npm install prompt-sync
//const prompt = require("prompt-sync")()

import PromptSync from "prompt-sync"
const prompt = PromptSync()

let nomePet = prompt("Qual o nome do pet? R: ")
let idadePet = prompt("Qual a idade do pet? R: ")

console.log("O " + nomePet + " tem " + idadePet + " anos.")