const express = require("express");
const router = express.Router();
const Curriculo = require("../models/curriculo");

// Get all subscribers
router.get("/", async (req, res) => {
  try {
    const result = await Curriculo.find();
    if (result.length === 0)
      res.status(404).json({ message: "Curriculos is empty!" });
    else res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one subscriber
router.get("/:id", async (req, res) => {
  try {
    const result = await Curriculo.findById(req.params.id);
    if (result === null)
      res.status(404).json({ message: "Curriculo not found!" });
    else res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create one subscriber
router.post("/", async (req, res) => {
  const result = new Curriculo({
    name: req.body.name,
    title: req.body.title,
    description: req.body.description,
    facebook: req.body.facebook,
    linkedin: req.body.linkedin,
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

  if (req.body.title != null) {
    data.title = req.body.title;
  }

  if (req.body.description != null) {
    data.description = req.body.description;
  }

  if (req.body.facebook != null) {
    data.facebook = req.body.facebook;
  }

  if (req.body.linkedin != null) {
    data.linkedin = req.body.linkedin;
  }

  try {
    await Curriculo.findByIdAndUpdate(req.params.id, data);
    const updatedData = await Curriculo.findById(req.params.id);
    res.json(updatedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one subscriber
router.delete("/:id", async (req, res) => {
  try {
    await Curriculo.findByIdAndDelete(req.params.id);
    res.json({ message: "Curriculo deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
