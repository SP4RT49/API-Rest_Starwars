const express = require('express');
const router = express.Router();
const planetController = require('../controllers/planetController');

// GET /planets
router.get("/", planetController.getPlanets);
router.get("/:id", planetController.getPlanetById);
router.post("/", planetController.createPlanet);
router.delete("/:id", planetController.deletePlanet);
router.patch("/:id", planetController.updatePlanet);

module.exports = router;
