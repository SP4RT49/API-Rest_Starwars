const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');

// GET /people
router.get("/", peopleController.getPeoples);
router.get("/:id", peopleController.getPeopleById);
router.post("/", peopleController.createPeople);
router.delete("/:id", peopleController.deletePeople);
router.patch("/:id", peopleController.updatePeople);

module.exports = router;
