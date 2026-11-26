import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema(
    {
        nomeCliente: {
            type: String,
            required: [true, "O nome é obrigatório"],
            trim: true,
        },
        item: {
            type: String,
            required: [true, "Escolha 1 opção: salgado, suco, combo ou bolo"],
            enum: ["Salgado", "Suco", "Combo", "Bolo"]
        },
        quantidade: {
            type: Number,
            required: [true, "Informe a quantidade: "],
            trim: true
        },
        formaPagamento: {
            type: String,
            required: [true, "Escolha a forma de pagamento: "],
            enum: ["Dinheiro", "Pix", "Cartão"],
        },
        observacao: {
            type: String,
        },
        valorUnitario: {
            type: Number,
        },
        valorTotal: {
            type: Number,
        },
        status: {
            type: String,
            enum: ["Pendente", "Pago", "Entregue"],
            default: "Pendente",
        },
    },
    { timestamps: true }
);

const Pedido = mongoose.model('Pedido', pedidoSchema);
export default Pedido;