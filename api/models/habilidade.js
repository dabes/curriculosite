const mongoose = require("mongoose");

const habilidadesSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  percent: {
    type: String,
    required: true,
  },
  curriculo: { type: mongoose.Schema.Types.ObjectId, ref: "Curriculo" },
});

module.exports = mongoose.model("Habilidade", habilidadesSchema);
