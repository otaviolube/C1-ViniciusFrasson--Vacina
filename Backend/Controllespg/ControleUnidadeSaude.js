const UnidSaude = require("../ModelsPg/ModeloUnidadeSaude");
const agendamento=require("../ModelsPg/ModeloAtendimento")
UnidSaude.hasOne(agendamento,{
  foreignKey:"unidadeId",
  as:"unidade"
})

async function Create(req, res) {
  try {
    const nome = req.body.nome_unidade;
    const pesquisa = await UnidSaude.findOne({ where: { nome_unidade: nome } });
    if (!pesquisa) {
      const resp = await UnidSaude.create({
        nome_unidade: nome,
        descricao_unidade: req.body.descricao_unidade,
        endereco_unidade: req.body.endereco_unidade,
        telefone_unidade: req.body.telefone_unidade,
        email_unidade: req.body.email_unidade,
        latlong_unidade: req.body.latlong_unidade,
      });
      res.status(201).json(resp);
    } else {
      res.status(400).json({ message: "Essa Unidade de Saude ja exite " });
    }
  } catch (error) {
    res.status(500).json({
      message: "Ocorreu um Erro ao Cadastrar",
    });
  }
}

async function ListAll(req, res) {
  try {
    const resp = await UnidSaude.findAll();
    if (!resp) {
      res.status(400).json(resp);
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Ops! ocorreu um Erro" });
  }
}

async function ListOne(req, res) {
  try {
    const id = req.params.id;
    const resp = await UnidSaude.findOne({
      where: {
        id: id,
      },
    });
    if (!resp) {
      res
        .status(400)
        .json({ message: "Erro ao encontar Id da Unidade de  Saude" });
      console.log(resp);
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Ops! ocorreu um Erro" });
  }
}

async function Update(req, res) {
  try {
    const id = req.params.id;
    const resp = await UnidSaude.update(
      {
        nome_unidade: req.body.nome_unidade,
        descricao_unidade: req.body.descricao_unidade,
        endereco_unidade: req.body.endereco_unidade,
        telefone_unidade: req.body.telefone_unidade,
        email_unidade: req.body.email_unidade,
        latlong_unidade: req.body.latlong_unidade,
      },
      {
        where: {
          id: id,
        },
      }
    );
    if (resp == false) {
      res
        .status(400)
        .json({ message: "Erro ao Atualizar dados da Unidade de Saude" });
    } else {
      res.status(200).json({ message: "Dados Atualizados com sucesso" });
    }
  } catch (error) {
    res.status(500).json({ message: "Ops! correu um Erro" });
  }
}

async function Delete(req, res) {
  try {
    const id = req.params.id;

    const resp = await UnidSaude.destroy({
      where: {
        id: id,
      },
    });

    if (!resp) {
      res.status(400).json({ message: "Erro ao Remover Unidade de Saude" });
    }
    res.status(200).json({ message: "Unidade de Saude  Removida com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Ops! correu um Erro" });
  }
}

module.exports = {
  Create,
  ListAll,
  ListOne,
  Update,
  Delete,
};
