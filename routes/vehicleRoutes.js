const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// GET /vehicles
router.get("/", vehiclesController.getVehicles);
router.get("/:id", vehiclesController.getVehicleById);
router.post("/", vehiclesController.createVehicle);
router.delete("/:id", vehiclesController.deleteVehicle);
router.patch("/:id", vehiclesController.updateVehicle);

module.exports = router;
