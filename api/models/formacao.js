const mongoose = require("mongoose");

const formacaoSchema = new mongoose.Schema({
  curso: {
    type: String,
    required: true,
  },
  grau: {
    type: String,
    required: true,
  },
  instituicao: {
    type: String,
    required: true,
  },
  inicio: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  curriculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Curriculo",
    required: true,
  },
});

module.exports = mongoose.model("Formacao", formacaoSchema);
