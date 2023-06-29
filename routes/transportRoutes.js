const express = require('express');
const router = express.Router();
const transportController = require('../controllers/transportController');

// GET /transports
router.get("/", transportController.getTransports);
router.get("/:id", transportController.getTransportById);
router.post("/", transportController.createTransport);
router.delete("/:id", transportController.deleteTransport);
router.patch("/:id", transportController.updateTransport);

module.exports = router;
