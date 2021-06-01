const atendimento = require("../ModelsPg/ModeloAtendimento");
const Pessoa = require("../ModelsPg/ModeloPessoa");
const Unidade = require("../ModelsPg/ModeloUnidadeSaude");

atendimento.belongsTo(Pessoa, {
  foreignKey: "pessoaId",
  as: "pessoas",
  onDelete:"RESTRICT",
  onUpdate:"CASCADE"
});

atendimento.belongsTo(Unidade, {
  foreignKey: "unidadeId",
  as: "unidade",
  onDelete:"RESTRICT",
  onUpdate:"CASCADE"
});

async function Create(req, res) {
  try {
    const pessoaid = req.params.pessoaid;
    const unidadeId = req.params.unidadeid;
    const dt = req.body.data_hora_agendamento;
    const findpessoa = await Pessoa.findByPk(pessoaid);
    const findunidade = await Unidade.findByPk(unidadeId);

    const pesquisa = await atendimento.findOne({
      where: { data_hora_agendamento: dt },
    });
    if (!findunidade && !findpessoa) {
      res
        .status(400)
        .json({ message: "Unidade de Saude e Pessoa nao encontrada " });
    }
    if (!findunidade) {
      res.status(400).json({ message: "Unidade de Saude nao encontrada " });
    } else if (!findpessoa) {
      res.status(400).json({ message: "Pessoa nao encontrada " });
    }

    if (!pesquisa) {
      const resp = await atendimento.create({
        pessoaId: pessoaid,
        unidadeId: unidadeId,
        data_hora_agendamento: dt,
        necessidades_especiais: req.body.necessidades_especiais,
        observacoes_agendamento: req.body.observacoes_agendamento,
      });
      res.status(201).json(resp);
    } else {
      res.status(400).json({ message: "Essa data ja foi preenchida " });
    }
  } catch (error) {
    res.status(500).json({
      message: "Ocorreu um Erro ao Cadastrar",
    });
  }
}

async function ListAll(req, res) {
  try {
    const resp = await atendimento.findAll({
      include: [
        {
          association: "pessoas",
        },
        {
          association: "unidade",
        },
      ],
    });
    if (!resp) {
      res.status(400).json({ message: "Ocorreu um Erro ao listar " });
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Ops! ocorreu um Erro" });
  }
}

async function ListOne(req, res) {
  try {
    const id = req.params.id;
    const resp = await atendimento.findOne({
      where: {
        id: id,
      },
    });
    if (!resp) {
      res.status(400).json({
        message: `Erro ao encontar atendimento  pela data ${new Date(
          dt
        ).toLocaleString("pt-Br")}`,
      });
      console.log(resp);
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Ops! ocorreu um Erro" });
  }
}

async function Update(req, res) {
  try {
    const dt = req.params.dtAtendimento;
    const resp = await atendimento.update(
      {
        data_hora_agendamento: req.body.data_hora_agendamento,
        necessidades_especiais: req.body.necessidades_especiais,
        observacoes_agendamento: req.body.observacoes_agendamento,
      },
      {
        where: {
          data_hora_agendamento: dt,
        },
      }
    );
    if (resp == false) {
      res.status(400).json({ message: "Erro ao Atualizar atendimento" });
    } else {
      res.status(200).json({ message: "Dados Atualizados com sucesso" });
    }
  } catch (error) {
    res.status(500).json({ message: "Ops! correu um Erro" });
    console.log(error);
  }
}

async function Delete(req, res) {
  try {
    const id = req.params.id;

    const resp = await atendimento.destroy({
      where: {
        id:id,
      },
    });

    if (!resp) {
      res.status(400).json({ message: "Erro ao Remover atendimento" });
      console.log(resp)
    }else{
      res.status(200).json({ message: "atendimento Removido com sucesso" });
    }

  } catch (error) {
    res.status(500).json({ message: "Erro ao Remover atendimento" });
    console.log(error);
  }
}

module.exports = {
  Create,
  ListAll,
  ListOne,
  Update,
  Delete,
};
