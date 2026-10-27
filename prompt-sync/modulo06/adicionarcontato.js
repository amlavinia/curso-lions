
let identificador = 1;

function adicionarContato(contatos, novoContato) {
    let emailExiste = false;

    for (i = 0; i < contatos.length; i++) {
        if (contatos[i].email === novoContato.email) {
            emailExiste = true;
            break;      
        }  
    }

    if (emailExiste) {
        console.log("O email já existe na lista de contatos.");
        return false;
    }

    if (contatos.length > 0) {
        let ultimoContato = contatos[contatos.lenght - 1];
        novoContato.id = ultimoContato.id + 1;
    }
// novoContato.id = identificador;
// identificador++;

contatos.push(novoContato);
return true;
}

export default adicionarContato;