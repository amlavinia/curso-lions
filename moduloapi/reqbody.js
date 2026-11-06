import express from "express";

const app = express();
const port = 3002;

app.use(express.json())

app.post("/body", (req, res) => {
    const titulo = req.body.titulo;

    if (!titulo) {
        res.status(400).json({
        "mensagem": "Erro: Título não enviado"
        });
    }


    res.status(200).json({
        "mensagem": "Dados recebidos pelo req.body",
        "titulo": titulo,
    })
})

app.listen((port), () => {
    console.log(`Servidor rodando na porta ${port}`);
});

