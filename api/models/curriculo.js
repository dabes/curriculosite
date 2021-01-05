const mongoose = require("mongoose");

const curriculoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  carreira: [{ type: mongoose.Schema.Types.ObjectId, ref: "Carreira" }],
});

module.exports = mongoose.model("Curriculo", curriculoSchema);
