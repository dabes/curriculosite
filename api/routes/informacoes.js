const express = require("express");
const router = express.Router();
const Informacoes = require("../models/informacoes");

// Get all subscribers
router.get("/", async (req, res) => {
  try {
    const result = await Informacoes.find();
    if (result.length === 0)
      res.status(404).json({ message: "Informacoes is empty!" });
    else res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one subscriber
router.get("/:id", async (req, res) => {
  try {
    const result = await Informacoes.find({ curriculo: req.params.id });
    if (result === null)
      res.status(404).json({ message: "Informacoes not found!" });
    else res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create one subscriber
router.post("/", async (req, res) => {
  const result = new Informacoes({
    email: req.body.email,
    idade: req.body.idade,
    dataNascimento: req.body.dataNascimento,
    sexo: req.body.sexo,
    estadoCivil: req.body.estadoCivil,
    curriculo: req.body.curriculo,
  });

  try {
    const newResult = await result.save();
    res.status(201).json(newResult);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one subscriber
router.patch("/:id", async (req, res) => {
  let data = {};
  if (req.body.email != null) {
    data.email = req.body.email;
  }

  if (req.body.idade != null) {
    data.idade = req.body.idade;
  }

  if (req.body.dataNascimento != null) {
    data.dataNascimento = req.body.dataNascimento;
  }

  if (req.body.sexo != null) {
    data.sexo = req.body.sexo;
  }

  if (req.body.estadoCivil != null) {
    data.estadoCivil = req.body.estadoCivil;
  }

  if (req.body.curriculo != null) {
    data.curriculo = req.body.curriculo;
  }

  try {
    await Informacoes.findByIdAndUpdate(req.params.id, data);
    const updatedData = await Informacoes.findById(req.params.id);
    res.json(updatedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one subscriber
router.delete("/:id", async (req, res) => {
  try {
    await Informacoes.findByIdAndDelete(req.params.id);
    res.json({ message: "Informacoes deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
