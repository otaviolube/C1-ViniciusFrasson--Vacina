const Route = require("express").Router();
const Pessoa = require("./Controllespg/Controllerpessoa");
const UniSaude = require("./Controllespg/ControleUnidadeSaude");
const Atendimento=require("./Controllespg/ControleAtendimento")
//pessoa
Route.post("/Cadastrarpessoa", Pessoa.Create);
Route.get("/ListarVariaspessoas",Pessoa.ListAll);
Route.get("/ListarUmapessoa/:cpf",Pessoa.ListOne);
Route.put("/AtualizarPessoa/:cpf",Pessoa.Update);
Route.delete("/RemoverPessoa/:cpf",Pessoa.Delete);

//unidadeSaude
Route.post("/CadastrarUnidadeSaude", UniSaude.Create);
Route.get("/ListarUnidadesSaude",UniSaude.ListAll);
Route.get("/ListarUmaUnidadeSaude/:id",UniSaude.ListOne);
Route.put("/AtualizarUnidade/:id",UniSaude.Update);
Route.delete("/RemoverUnidade/:id",UniSaude.Delete);

//agendamento
Route.post("/CadastrarAtendimento/:pessoaid/:unidadeid", Atendimento.Create);
Route.get("/ListarVariosAtendimentos",Atendimento.ListAll);
Route.get("/ListarUmAtendimento/:id",Atendimento.ListOne);
Route.put("/AtualizarAtendimento/:dtAtendimento",Atendimento.Update);
Route.delete("/RemoverAtendimento/:id",Atendimento.Delete);


module.exports=Route
