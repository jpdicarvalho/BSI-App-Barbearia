const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicos = new Schema({
    salaoId:{
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    comissao: {
        type: Number, // % de comissão sobre o preço
        required: true,
    },
    duracao: {
        type: Number, //Duração do serviço em minutos
        required: true,
    },
    recorrencia: {
        type: Number, // Período de refação do serviço em dias
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['A', 'I', 'E'],
        default: 'A',
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Servicos', servicos);
