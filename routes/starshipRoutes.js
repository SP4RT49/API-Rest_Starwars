const express = require('express');
const router = express.Router();
const starshipController = require('../controllers/starshipController');

// GET /starships
router.get("/", starshipController.getStarships);
router.get("/:id", starshipController.getStarshipById);
router.post("/", starshipController.createStarship);
router.delete("/:id", starshipController.deleteStarship);
router.patch("/:id", starshipController.updateStarship);

module.exports = router;
