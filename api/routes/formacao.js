const express = require("express");
const router = express.Router();
const Formacao = require("../models/formacao");

// Get all subscribers
router.get("/", async (req, res) => {
  try {
    const result = await Formacao.find();
    if (result.length === 0)
      res.status(404).json({ message: "Formacao is empty!" });
    else res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one subscriber
router.get("/:id", async (req, res) => {
  try {
    const result = await Formacao.find({ curriculo: req.params.id });
    if (result === null)
      res.status(404).json({ message: "Formacao not found!" });
    else res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create one subscriber
router.post("/", async (req, res) => {
  const result = new Formacao({
    curso: req.body.curso,
    grau: req.body.grau,
    instituicao: req.body.instituicao,
    inicio: req.body.inicio,
    estado: req.body.estado,
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
  if (req.body.curso != null) {
    data.curso = req.body.curso;
  }

  if (req.body.grau != null) {
    data.grau = req.body.grau;
  }

  if (req.body.instituicao != null) {
    data.instituicao = req.body.instituicao;
  }

  if (req.body.inicio != null) {
    data.inicio = req.body.inicio;
  }

  if (req.body.estado != null) {
    data.estado = req.body.estado;
  }

  if (req.body.curriculo != null) {
    data.curriculo = req.body.curriculo;
  }

  try {
    await Formacao.findByIdAndUpdate(req.params.id, data);
    const updatedData = await Formacao.findById(req.params.id);
    res.json(updatedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one subscriber
router.delete("/:id", async (req, res) => {
  try {
    await Formacao.findByIdAndDelete(req.params.id);
    res.json({ message: "Formacao deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
