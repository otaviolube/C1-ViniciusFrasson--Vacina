

const express = require("express");
const cors=require("cors")


const app = express();
const porta = 3001;
require("./config/db_config");
const rotas = require("./routes")
app.use(cors())




app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("hello");
  console.log("hello");
});

app.use("/api", rotas);

app.listen(porta, () => {
  console.log(`server ruinnig on port ${porta}`);
});
