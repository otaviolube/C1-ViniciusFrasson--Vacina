const unidadeSaude = require("../MoldelsMongo/ModelUnidaSaude");

async function cadastrar(req, res) {
  const UnidadeSaude = new unidadeSaude({
    nome_unidade: req.body.nome_unidade,
    descricao_unidade: req.body.descricao_unidade,
    endereco_unidade: req.body.endereco_unidade,
    telefone_unidade: req.body.telefone_unidade,
    email_unidade: req.body.email_unidade,
    latlong: req.body.latlong,
  })
    .save()
    .then(() => {
      res.status(201).json(req.body);
    })
    .catch((error) => {
      res.status(201).send("houve algum erro ao Cadastrar");
    });
}

async function ler(req, res) {
  await unidadeSaude.find((err, data) => {
    if (err || data.length == 0) {
      res.status(400).send("<h2>houve algum error em ler as Unidades</h2>");
    } else {
      res.status(200).json({ data });
    }
  });
}

async function lerUm(req, res) {
  await unidadeSaude.findOne(
    { nome_unidade: req.params.nomeUnidade },
    (err, data) => {
      if (err || data == null) {
        res.status(400).send("<h2>Houve algum erro ao encontar a unidade de saude</h2>");
      } else {
        res.status(200).json(data);
      }
    }
  );
}

async function deletar(req, res) {
  const unidade = req.params.nomeUnidade;

  await unidadeSaude.findOneAndDelete(
    { nome_unidade: unidade },
    (err, data) => {
      if (data === null) {
        res.status(400).send("<h2>Houve algum erro ao deletar a unidade de saude</h2>");
      } else {
        console.log(data);
        res.status(200).send("<h2>Unidade de Saude deletada com sucesso</h2>");
      }
    }
  );
}

async function atualizar(req, res) {
  const nome = req.params.nomeUnidade;

  const data = {
    $set: {
      nome_unidade: req.body.nome_unidade,
      descricao_unidade: req.body.descricao_unidade,
      endereco_unidade: req.body.endereco_unidade,
      telefone_unidade: req.body.telefone_unidade,
      email_unidade: req.body.email_unidade,
      latlong: req.body.latlong,
      updated: Date.now(),
    },
  };

  const options = {
    new: true,
  };

  await unidadeSaude.findOneAndUpdate(
    { nome_unidade: nome },
    data,
    options,
    (err, data) => {
      if (err || data == null) {
        res
          .status(400)
          .send("<h2>Houve algum erro ao Atualizar a Unidade de Saude</h2>");
      } else {
        res.status(200).json(data);
      }
    }
  );
}

module.exports = { cadastrar, ler, lerUm, deletar, atualizar };
