import express from "express";

const app = express();
const port = 3003;

app.use(express.json())

app.get('/baralhos/:id', (req, res) => {
    const id = req.params.id
    res.status(200).json({
        "mensagem": 'Parâmetro recebido pelo req.params',
        "id": id,
    })
})

app.listen((port), () => {
    console.log(`Servidor rodando na porta ${port}`);
});