const express = require("express");
const router = express.Router();
const Carreira = require("../models/carreira");

// Get all subscribers
router.get("/", async (req, res) => {
  try {
    const result = await Carreira.find();
    if (result.length === 0)
      res.status(404).json({ message: "Carreira is empty!" });
    else res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one subscriber
router.get("/:id", async (req, res) => {
  try {
    const result = await Carreira.findById(req.params.id);
    if (result === null)
      res.status(404).json({ message: "Carreira not found!" });
    else res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create one subscriber
router.post("/", async (req, res) => {
  const result = new Carreira({
    company: req.body.company,
    timefrom: req.body.timefrom,
    timeto: req.body.timeto,
    position: req.body.position,
    description: req.body.description,
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
  if (req.body.company != null) {
    data.company = req.body.company;
  }

  if (req.body.timefrom != null) {
    data.timefrom = req.body.timefrom;
  }

  if (req.body.timeto != null) {
    data.timeto = req.body.timeto;
  }

  if (req.body.position != null) {
    data.position = req.body.position;
  }

  if (req.body.description != null) {
    data.description = req.body.description;
  }

  if (req.body.curriculo != null) {
    data.curriculo = req.body.curriculo;
  }

  try {
    await Carreira.findByIdAndUpdate(req.params.id, data);
    const updatedResult = await Carreira.findById(req.params.id);
    res.json(updatedResult);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one subscriber
router.delete("/:id", async (req, res) => {
  try {
    await Carreira.findByIdAndDelete(req.params.id);
    res.json({ message: "Carreira deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
