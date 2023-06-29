const express = require('express');
const router = express.Router();
const specieController = require('../controllers/specieController');

// GET /species
router.get("/", specieController.getSpecies);
router.get("/:id", specieController.getSpecieById);
router.post("/", specieController.createSpecie);
router.delete("/:id", specieController.deleteSpecie);
router.patch("/:id", specieController.updateSpecie);

module.exports = router;
