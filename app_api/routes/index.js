const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router
    .route("/trips")
    .get(tripsController.tripList) // GET Method for getting all trips
    .post(tripsController.tripsAddTrip); // POST Method for adding trips

// GET method route to tripsFindByCode - requires parameter
// PUT method route to tripsUpdateTrip - requires parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;
