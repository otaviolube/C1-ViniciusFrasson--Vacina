const Pessoa = require("../ModelsPg/ModeloPessoa");
const agendamento=require("../ModelsPg/ModeloAtendimento")


Pessoa.hasOne(agendamento,{
  foreignKey:"pessoaId",
  as:"pessoa"
})




async function Create(req, res) {
  try {
    const cpf = req.body.cpf_pessoa;
    const pesquisa = await Pessoa.findOne({ where: { cpf_pessoa: cpf } });
    if (!pesquisa) {
      const resp = await Pessoa.create({
        pessoa_nome: req.body.pessoa_nome,
        cpf_pessoa: cpf,
        data_nascimento: req.body.data_nascimento,
        telefone_pessoa: req.body.telefone_pessoa,
        grupo_prioritario: req.body.grupo_prioritario,
        endereco_pessoa: req.body.endereco_pessoa,
        email_pessoa: req.body.email_pessoa,
      });
      res.status(201).json(resp);
    } else {
      res.status(400).json({ message: "Essa pessoa ja exite " });
    }
  } catch (error) {
    res.status(500).json({
      message: "Ocorreu um Erro ao Cadastrar",
    });
  }
}

async function ListAll(req, res) {
  try {
    const resp = await Pessoa.findAll();
    if (!resp) {
      res.status(400).json({ message: "Ocorreu um Erro ao listar " });
    }
    res.status(200).json(resp);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ops! ocorreu um Erro" });
  }
}

async function ListOne(req, res) {
  try {
    const cpf = req.params.cpf;
    const resp = await Pessoa.findOne({
      where: {
        cpf_pessoa: cpf,
      },
    });
    if (!resp) {
      res.status(400).json({ message: "Erro ao encontar cpf" });
      console.log(resp);
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Ops! ocorreu um Erro" });
  }
}

async function Update(req, res) {
  try {
    const cpf = req.params.cpf;
    const resp = await Pessoa.update(
      {
        pessoa_nome: req.body.nome_pessoa,
        data_nascimento: req.body.data_nascimento,
        telefone_pessoa: req.body.telefone_pessoa,
        grupo_prioritario: req.body.grupo_prioritario,
        endereco_pessoa: req.body.endereco_pessoa,
        email_pessoa: req.body.email_pessoa,
      },
      {
        where: {
          cpf_pessoa: cpf,
        },
      }
    );
    if (resp == false) {
      res.status(400).json({ message: "Erro ao Atualizar dados" });
    } else {
      res.status(200).json({ message: "Dados Atualizados com sucesso" });
    }
  } catch (error) {
    res.status(500).json({ message: "Ops! correu um Erro" });
  }
}

async function Delete(req, res) {
  try {
    const cpf = req.params.cpf;

    const resp = await Pessoa.destroy({
      where: {
        cpf_pessoa: cpf,
      },
    });

    if (!resp) {
      res.status(400).json({ message: "Erro ao Remover pessoa" });
    }
    res.status(200).json({ message: "Pessoa  Removida com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao Remover pessoa" });
  }
}

module.exports = {
  Create,
  ListAll,
  ListOne,
  Update,
  Delete,
};
