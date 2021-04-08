const { model } = require("mongoose");
const Pessoa = require("../Moldels/ModelPessoa");

async function cadastrar(req, res) {
  const people = await Pessoa.find({ cpf_pessoa: req.body.cpf_pessoa });

  if (people.length == 0) {
    const pessoa = new Pessoa({
      nome_pessoa: req.body.nome_pessoa,
      cpf_pessoa: req.body.cpf_pessoa,
      data_nascimento_pessoa: req.body.data_nascimento_pessoa,
      telefone_pessoa: req.body.telefone_pessoa,
      grupo_prioritario: req.body.grupo_prioritario,
      endereco_pessoa: req.body.endereco_pessoa,
      email_pessoa: req.body.email_pessoa,
      UniSaude:req.body.UniSaude,
      Agendamento_:req.body.Agendamento_
      
    })
      .save()
      .then(() => {
        res.status(201).json(req.body);
      })
      .catch((error) => {
        console.log(error)
        res.status(400).json({
          msg: "houve algum erro ao cadastrar",
        });
      });
  } else {
    res.status(400).json({
      msg: "houve algum erro ao cadastrar",
    });
  }
}

async function listar(req, res) {
  await Pessoa.find((err, data) => {
    if (err) {
      res.status(400).send("<h1> Erro ao Listar<h1>");
    } else {
      res.status(200).json({ data });
      console.log(data);
    }
  }).populate('UniSaude').populate('Agendamento_')
    
}

async function listarUm(req, res) {
  const cpf = req.params.cpf;
  await Pessoa.findOne({ cpf_pessoa: cpf }, (err, data) => {
    if (err || data == null) {
      res.status(400).send("<h1>Erro ao encontar<h1>");
    } else {
      console.log(data);
      res.status(200).json({ data });
    }
  }).populate()
}

async function deletar(req, res) {
  const cpf = req.params.cpf;
  console.log(cpf);

  await Pessoa.findOneAndDelete({ cpf_pessoa: cpf }, (err, data) => {
    if (err || data == null) {
      res.status(400).send("<h1>Error ao deletar <h1>");
    } else {
      res.status(200).send("<h1>Pessoa deletada com sucesso<h1>");
      console.log(data);
    }
  });
}

async function atualizar(req, res) {
 
 const body=req.body
  const cpf=req.params.cpf
  const options = {
    new: true
  };

  const dados={
    $set:{
      nome_pessoa: req.body.nome_pessoa,
      cpf_pessoa: req.body.cpf_pessoa,
      data_nascimento_pessoa: req.body.data_nascimento_pessoa,
      telefone_pessoa: req.body.telefone_pessoa,
      grupo_prioritario: req.body.grupo_prioritario,
      endereco_pessoa: req.body.endereco_pessoa,
      email_pessoa: req.body.email_pessoa,
      updated:Date.now()
     
    }
  }

  await Pessoa.findOneAndUpdate({cpf_pessoa:cpf},dados,options,(err,data)=>{
       
    if (err||data==null){
       res.status(400).send("<h1>Erro ao atualizar os dados<h1>")
    }else{
         
        console.log(data)
        res.status(200).send("<h1>Sucesso ao atualizar<h1>")
    }
})
}

module.exports = { cadastrar, listar, listarUm, deletar, atualizar };
