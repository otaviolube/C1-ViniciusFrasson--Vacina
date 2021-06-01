const express = require("express");
const route = express.Router();

const pessoa = require("./ControllesMongo/PessoaController");
const unidadesaude = require("./ControllesMongo/UnidadeSaudeController");
const Atendimento = require("./ControllesMongo/AtendimentoControlle");

// Pessoa
route.get("/listar", pessoa.listar);
route.get("/listar/:cpf", pessoa.listarUm);
route.post("/cadastro", pessoa.cadastrar);
route.delete("/deletar/:cpf", pessoa.deletar);
route.put("/atualizar/:cpf", pessoa.atualizar);

// Unidade
route.get("/listarUnidade", unidadesaude.ler);
route.get("/listarUnidade/:nomeUnidade", unidadesaude.lerUm);
route.post("/cadastrarUnidade", unidadesaude.cadastrar);
route.delete("/unidade/:nomeUnidade", unidadesaude.deletar);
route.put("/unidade/:nomeUnidade", unidadesaude.atualizar);

//Agendamento

route.post("/agendamento/:idUnidade/:idPessoa", Atendimento.cadastrar);
route.get("/agendamento/listar", Atendimento.listarAgendamentos);
route.get("/agendamento/listar/:id", Atendimento.listarUmAgendamento);
route.delete("/agendamento/:id", Atendimento.deletaragendamento);
route.put("/agendamento/:id", Atendimento.atualizar);

module.exports = route;
