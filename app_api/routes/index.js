const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

router
    .route("/trips")
    .get(tripsController.tripList) // GET Method for getting all trips
    .post(authenticateJWT, tripsController.tripsAddTrip); // POST Method for adding trips

// GET method route to tripsFindByCode - requires parameter
// PUT method route to tripsUpdateTrip - requires parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip);

module.exports = router;
