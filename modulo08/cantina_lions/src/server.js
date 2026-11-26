import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import conectarBanco from './db.js';
conectarBanco();

import Pedido from './models/pedido.js';

const app = express();
const port = Number(process.env.PORT);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Pedidos!");   
});

function valorUnitario{

switch (item) {
    case Salgado:
        valorUnitario = 8
        break;

    case Suco:
        valorUnitario = 6
        break;

    case Combo:
        valorUnitario = 12
        break;

    case Bolo:
        valorUnitario = 5
        break;
    
    default:
        console.log("Opção inválida!");
        break;
}

const valorTotal = valorUnitario * quantidade;

if (valorTotal >= 5) {
    valorTotal = valorTotal * 0.90
    console.log(`Valor total atualizado: ${valorTotal}`);
} else {
    console.log(valorTotal);
}   

}

app.post("/pedido", async (req, res) => {
    try {
        const dados = req.body;
        const novo_pedido = {
            nomeCliente: dados.nomeCliente,
            item: dados.item,
            quantidade: dados.quantidade,
            formaPagamento: dados.formaPagamento,
            observacao: dados.obervacao,
            valorUnitario: dados.valorUnitario,
            valorTotal: dados.valorTotal
        }
        const pedido = await Pedido.create(novo_pedido);
        res.status(201).json(pedido);
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