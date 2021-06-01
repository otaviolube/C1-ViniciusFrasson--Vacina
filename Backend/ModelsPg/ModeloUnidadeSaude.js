const { DataTypes} = require("sequelize");
const dbconn = require("../config/db_configPg");

const UnidadeSaude = dbconn.define("unidadeSaude", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nome_unidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao_unidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco_unidade: {
    type: DataTypes.STRING,
    allowNull:false
  },
  telefone_unidade:{
      type:DataTypes.STRING,
      allowNull:false
  },
  email_unidade:{
      type:DataTypes.STRING,
      allowNull:false
  },
  latlong_unidade:{
      type:DataTypes.STRING,
      allowNull:false
  }

});


module.exports=UnidadeSaude
