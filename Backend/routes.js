const express = require("express");
const route = express.Router();

const pessoa = require("./Controlles/pessoaController");
const unidadesaude = require("./Controlles/UnidadeSaudeController");
const agendamento = require("./Controlles/agendamentoControle");


route.get("/", (req, res) => {
  res.send("rota");
});
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

route.post("/agendamento/:idUnidade/:idPessoa", agendamento.cadastrar);
route.get("/agendamento/listar", agendamento.listarAgendamentos);
route.get("/agendamento/listar/:id", agendamento.listarUmAgendamento);
route.delete("/agendamento/:id", agendamento.deletaragendamento);
route.put("/agendamento/:id", agendamento.atualizar);







module.exports = route;



