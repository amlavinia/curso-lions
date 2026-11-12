import express from 'express';

import contatos from "./contatos.js";
import excluirContatos from "./excluircontatos.js";
import adicionarContatos from "./adicionarcontato.js";
import atualizarContatos from "./atualizarcontatos.js";

const app = express();
const port = 3000;

app.use(express.json());

function validaId(req, res, next) {
    const id = parseInt(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).send("Informe um número para validar o id");
    }

    next();
}

app.get('/contatos/', (req, res) => {
    res.status(200).json(contatos);
});

app.get('/contatos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).send("Informe um número para validar o id");
    }

    const contato = contatos.find(contato => contato.id === id);

    if (!contato) {
        return res.status(404).send("Contato não encontrado.")
    }

    res.json(contato);
})


app.delete('/contatos/:id', validaId, (req, res) => {
    const id = parseInt(req.params.id);

    const excluido = excluirContatos(contatos, id);

    if (!excluido) {
        return res.status(400).send("Contato não encontrado");
    }

    res.status(204).send();
});

app.post('/contatos', (req, res) => {
    const novoContato = req.body;
    
    const criado = adicionarContatos(contatos, novoContato);

    if (!criado) {
        return res.status(400).send("Email inválido");
    }

    res.status(201).send("Contato criado com sucesso");
});

app.put('/contatos/:id', validaId, (req, res) => {
    const contatoAtualizado = req.body;
    const id = parseInt(req.params.id);

    const atualizado = atualizarContatos(contatos, id, contatoAtualizado);

    if (!atualizado) {
        return res.status(400).send("Email ou ID não existem.")
    }

    res.status(200).send("Contato atualizado com sucesso");
});

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});