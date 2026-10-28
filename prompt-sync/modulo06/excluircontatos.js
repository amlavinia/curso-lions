
function removerContato(contato, id) {
    const indice = contatos.findeIndex(contato => contato.id === id);
    
    if (indice === -1) {
        console.log("Erro: Cadastro não encontrado.")
        return false;
    }

    contatos.splice(indice, 1);
    console.log("Contato removido com sucesso");
    return true;
}

export default removerContato;