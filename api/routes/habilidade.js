const express = require("express");
const router = express.Router();
const Habilidade = require("../models/habilidade");

// Get all subscribers
router.get("/", async (req, res) => {
  try {
    const result = await Habilidade.find();
    if (result.length === 0)
      res.status(404).json({ message: "Habilidades is empty!" });
    else res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one subscriber
router.get("/:id", async (req, res) => {
  try {
    const result = await Habilidade.find({ curriculo: req.params.id });
    if (result === null)
      res.status(404).json({ message: "Habilidade not found!" });
    else res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create one subscriber
router.post("/", async (req, res) => {
  const result = new Habilidade({
    name: req.body.name,
    type: req.body.type,
    percent: req.body.percent,
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
  if (req.body.name != null) {
    data.name = req.body.name;
  }

  if (req.body.type != null) {
    data.type = req.body.type;
  }

  if (req.body.percent != null) {
    data.percent = req.body.percent;
  }

  try {
    await Habilidade.findByIdAndUpdate(req.params.id, data);
    const updatedData = await Habilidade.findById(req.params.id);
    res.json(updatedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
