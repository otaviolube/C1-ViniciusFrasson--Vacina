const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
  }
);

(async () => {
  try {
    const resultado = await sequelize.sync();
    console.log("banco Postgres conectado com sucesso");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;
