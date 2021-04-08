
const mongoose = require("mongoose");



mongoose.connect(("mongodb://root:adm@localhost:27017/vacina"), {
authSource:"admin",  
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify:false
});

const db=mongoose.connection;
db.on("error", console.log.bind(console,"connection erro:"));
db.once("open",()=>{
    console.log("banco conectado")
})

module.exports=mongoose;