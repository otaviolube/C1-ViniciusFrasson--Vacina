const mongoose = require("mongoose");

const UnidadeSaudeSchema = new mongoose.Schema({
  nome_unidade: {
    type: String,
    required: true,
  },
  descricao_unidade: {
    type: String,
    required: true,
  },

  endereco_unidade: {
    type: String,
    required: true,
  },

  telefone_unidade: {
    type: String,
    required: true,
  },

  email_unidade: {
    type: String,
    required: true,
  },

  latlong: {
    type: String,
    required: true,
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

module.exports = mongoose.model("UnidadeSaude", UnidadeSaudeSchema);
