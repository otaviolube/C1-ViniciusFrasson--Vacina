const mongoose = require("mongoose");

const PessoaSchema = new mongoose.Schema({
  nome_pessoa: {
    type: String,
    required: true,
  },

  cpf_pessoa: {
    type: String,
    required: true,
  },

  data_nascimento_pessoa: {
    type: Date,
    required: true,
  },
  telefone_pessoa: {
    type: String,
    required: true,
  },

  grupo_prioritario: {
    type: Boolean,
    required: true,
  },
  endereco_pessoa: {
    type: String,
    required: true,
  },

  email_pessoa: {
    type: String,
    require: true,
  },

  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: null,
  },
});

const user = mongoose.model("Pessoa", PessoaSchema);

module.exports = user;
