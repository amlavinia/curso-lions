import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import conectarBanco from './database.js';
conectarBanco();

import Contato from './models/contato.js';

const app = express();
const port = Number(process.env.PORT);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Contatos!");   
});

app.get("/contato", async (req, res) => {
    const todos_contatos = Contato.find();
    res.status(200).json(todos_contatos);
});

app.get("/contato/:id", async (req, res) => {
    try {
        const contato = await Contato.findById(req.params.id);
        if (!contato) {
            return res.status(404).json({ message: `Não encontrado` });
        }
        return res.status(200).json(contato)
    }   catch (error) {
        return res.status(500).json({ message: error.message})
    }
})

app.put("/contato/:id")
    const atualizado = await Contato.findByIdAndUpdate {
        req.params.id,
        req.body,
        
    }

app.post("/contato", async (req, res) => {
    try {
        const dados = req.body;
        const novo_contato = {
            nome: dados.nome,
            email: dados.email,
            telefones: dados.telefones,
        }
        const contato = await Contato.create(novo_contato);
        res.status(201).json(contato);
    } catch (error) {

        if (error.code == 11000) {
            return res.status(409).json({ messagem: `Erro: email já está sendo utilizado` });
        }
        res.status(400).json({ messagem: `Erro ao cadastrar contato: ${error.message}` });
    }
});
app.listen(port, () => {
    console.log(`aplicação iniciada na porta: ${port}`);
});