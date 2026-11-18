import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import conectarBanco from './database.js';
conectarBanco();

const app = express();
const port = Number(process.env.PORT);

app.get("/", (req, res) => {
    res.send("Contatos!");   
});

app.listen(port, () => {
    console.log(`aplicação iniciada na porta: ${port}`);
});