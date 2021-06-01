const agendamento = require("../MoldelsMongo/ModelAtendimento");
const unidade = require("../MoldelsMongo/ModelUnidaSaude");
const Pessoa = require("../MoldelsMongo/ModelPessoa");

async function cadastrar(req, res) {
  const idPessoa = req.params.idPessoa;
  const idUnidade = req.params.idUnidade;
  const Unidade = await unidade.findById({ _id: idUnidade });
  const pessoa = await Pessoa.findById({ _id: idPessoa });
  const pesquisaAtendimento = await agendamento.findOne({
    data_hora_agendamento: req.body.data_hora_agendamento,
  });

  if (pesquisaAtendimento) {
    res.status(400).json({ message: "Data  ja cadastrada" });
  } else {
    const Agendamento = await new agendamento({
      data_hora_agendamento: req.body.data_hora_agendamento,
      necessiodades_especiais: req.body.necessiodades_especiais,
      observacoes_agendamento: req.body.observacoes_agendamento,
      UnidadeSaude_: Unidade,
      Pessoa_: pessoa,
    }).save((err, data) => {
      if (err) {
        res.status(400).send("<h1>Erro ao agendar</h1>");
      } else {
        res.status(200).json(data);
      }
    });
  }
}

async function listarAgendamentos(req, res) {
  await agendamento
    .find((err, data) => {
      if (!data) {
        res.status(400).send("<h1>ocorreu um erro em listar Atendimentos<h1>");
      } else {
        res.status(200).json({ data });
        console.log(data);
      }
    })
    .populate("UnidadeSaude_")
    .populate("Pessoa_");
}

async function listarUmAgendamento(req, res) {
  await agendamento
    .findOne({ _id: req.params.id }, (err, data) => {
      if (!data) {
        res.status(400).send("<h1>Houve um erro pesquisar<h1>");
      } else {
        console.log(data);
        res.status(200).json(data);
      }
    })
    .populate("UnidadeSaude_")
    .populate("Pessoa_");
}

async function deletaragendamento(req, res) {
  const id = req.params.id;

  await agendamento.findOneAndDelete({ _id: id }, (err, data) => {
    if (!data) {
      res.status(400).send("<h1>Houve algum erro");
    } else {
      res.status(200).json({ data });
    }
  });
}

async function atualizar(req, res) {
  const option = { new: true };

  const dados = {
    $set: {
      data_hora_agendamento: req.body.data_hora_agendamento,
      necessiodades_especiais: req.body.necessiodades_especiais,
      observacoes_agendamento: req.body.observacoes_agendamento,
      updated: Date.now(),
    },
  };
  await agendamento.findOneAndUpdate(
    { _id: req.params.id },
    dados,
    option,
    (err, data) => {
      if (!data) {
        res.status(400).send("<h1>Erro ao atualizar os dados<h1>");
      } else {
        res.status(200).json(data);
      }
    }
  );
}

module.exports = {
  cadastrar,
  listarAgendamentos,
  deletaragendamento,
  listarUmAgendamento,
  atualizar,
};
