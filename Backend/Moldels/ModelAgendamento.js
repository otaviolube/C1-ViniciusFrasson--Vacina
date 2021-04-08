const mongoose=require("mongoose");


const agendamentoSchema=new mongoose.Schema({

    data_hora_agendamento:{
        type:Date,
        req:true
    },

    necessiodades_especiais:{
        type:Boolean,
        req:true
    },

    UnidadeSaude_: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UnidadeSaude",
        required:true
        
      },
    
      Pessoa_: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pessoa",
        required:true
      },

    observacoes_agendamento:{
        type:String,
        req:true
    },
    createdAt:{
        type:Date,
        default:Date.now
      },

      

  updated:{
    type:Date,
    default:null
  }
    

})

module.exports=mongoose.model("Agendamento",agendamentoSchema);


