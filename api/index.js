require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));
app.use(cors());
app.use(express.json());

const curriculoRouter = require("./routes/curriculo");
app.use("/api/curriculo", curriculoRouter);

const carreiraRouter = require("./routes/carreira");
app.use("/api/carreira", carreiraRouter);

const informacoesRouter = require("./routes/informacoes");
app.use("/api/informacoes", informacoesRouter);

const formacaoRouter = require("./routes/formacao");
app.use("/api/formacao", formacaoRouter);

const habilidadeRouter = require("./routes/habilidade");
app.use("/api/habilidade", habilidadeRouter);

app.listen(process.env.PORT, () =>
  console.log("server started on port:" + process.env.PORT)
);
