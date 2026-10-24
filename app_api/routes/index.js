const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router.route("/trips")
    .get(tripsController.tripList) // GET Method for getting all trips
    .post(tripsController.tripsAddTrip); // POST Method for adding trips
router.route("/trips/:tripCode").get(tripsController.tripsFindByCode);

module.exports = router;
