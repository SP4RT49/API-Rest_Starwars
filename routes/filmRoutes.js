const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');

// GET /films
router.get("/", filmController.getFilms);
router.get("/:id", filmController.getFilmById);
router.post("/", filmController.createFilm);
router.delete("/:id", filmController.deleteFilm);
router.patch("/:id", filmController.updateFilm);

module.exports = router;
