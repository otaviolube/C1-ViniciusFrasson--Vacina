const agendamento = require("../Moldels/ModelAgendamento");
const unidade=require("../Moldels/ModelUnidaSaude")
const Pessoa=require("../Moldels/ModelPessoa")


async function cadastrar(req, res) {
    const idPessoa=req.params.idPessoa
    const idUnidade=req.params.idUnidade
    const Unidade=await unidade.findById({_id:idUnidade})
    const pessoa=await Pessoa.findById({_id:idPessoa})
    

  
        
        const Agendamento = await new agendamento({
            data_hora_agendamento: req.body.data_hora_agendamento,
            necessiodades_especiais: req.body.necessiodades_especiais,
            observacoes_agendamento: req.body.observacoes_agendamento,
            UnidadeSaude_:req.body.UnidadeSaude_,
            Pessoa_:req.body.Pessoa_
        
          }).save((err, data) => {
              if(err){
                
                  res.status(400).send("<h1>Erro ao agendar</h1>")
              }else{
                res.status(200).send("<h1>Agendado com sucesso</h1>")
              }
          });
        
    }
  

async function listarAgendamentos(req,res){
 
    await agendamento.find((err,data)=>{
        if(err){
              res.status(400).send("<h1>ocorreu um erro<h1>")
        }else{
            res.status(200).json({data})
            console.log(data)
            
        }
    }).populate("UnidadeSaude_").populate("Pessoa_")
}

async function listarUmAgendamento(req,res){
    await agendamento.findOne({_id:req.params.id},(err,data)=>{
     if(err){
         res.status(400).send("<h1>Houve um erro pesquisar<h1>")
     }else{
         console.log(data)
         res.status(200).send("<h1>Sucesso em pesquisar<h1>")
     }  
    }).populate("UnidadeSaude_").populate("Pessoa_")
}


async function deletaragendamento(req,res){

    const id=req.params.id;

    await agendamento.findOneAndDelete({_id:id},(err,data)=>{
        if(err){

            res.status(400).send("<h1>Houve algum erro")
            console.log(data)
          

        }else{
           
            res.status(200).json({data})
        }
    })
}

async function atualizar(req,res){

const option={new:true}

const dados={
    $set:{
        data_hora_agendamento: req.body.data_hora_agendamento,
        necessiodades_especiais: req.body.necessiodades_especiais,
        observacoes_agendamento: req.body.observacoes_agendamento,
        observacoes_agendamento: req.body.observacoes_agendamento,
        

        updated:Date.now()
    }
}
    await agendamento.findOneAndUpdate({_id:req.params.id},dados,option,(err,data)=>{
       
        if (err){
           res.status(400).send("<h1>Erro ao atualizar os dados<h1>")
        }else{
             
            console.log(data)
            res.status(200).send("<h1>Sucesso ao atualizar<h1>")
        }
    })
}


module.exports={cadastrar,listarAgendamentos,deletaragendamento,listarUmAgendamento,atualizar}