const mongoose = require("mongoose");
let uri;
if (process.env.NODE_ENV === "production") {
  uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@devweb2.3l3dl.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`;
} else {
  uri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DBNAME}`;
}

mongoose.connect(uri, {
  authSource:"admin",
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.log.bind(console, "connection erro:"));
db.once("open", () => {
  console.log("banco mongo conectado");
});

module.exports = mongoose;
