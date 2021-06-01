require("dotenv").config({
  path:
    process.env.NODE_ENV === "development"
      ? ".env.development"
      : ".env",
});

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV == "development") {
  console.log(process.env.NODE_ENV);
  require("./config/db_configMongo");
  require("./config/db_configPg");
  app.use("/api", require("./RoutesMongo"));
  app.use("/api", require("./Routespg"));
  
} else {
  console.log(process.env.NODE_ENV);
  require("./config/db_configMongo");
  require("./config/db_configPg");
  app.use("/api", require("./RoutesMongo"));
  app.use("/api", require("./Routespg"));
 
}

app.get("/", (req, res) => {
  res.status(200).send({ message: "Bem vindo ao Sistema de Vacinacao" });
});

app.listen(process.env.APP_PORT, () => {
  console.log(`server ruinnig on port ${process.env.APP_PORT}`);
});
