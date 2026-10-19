const mongoose = require("mongoose");
const Trip = require("../models/travlr");
const Model = mongoose.model("trips");

// GET: /trips - list all the trips
// Must always return an HTML status code and JSON message to the client
const tripList = async (req, res) => {
    const q = await Model.find({}).exec();

    // NOTE: Uncomment for debugging
    // console.log(q);

    if (!q) {
        // Database returned no data
        return res.status(404).json(err);
    } else {
        return res.status(200).json(q);
    }
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async (req, res) => {
    const q = await Model.find({ code: req.params.tripCode }) // Return single code
        .exec();

    // Uncomment the code for debugging purposes
    // console.log(q);

    if (!q) {
        // No data returned from database
        return res.status(404).json(err);
    } else {
        return res.status(200).json(q);
    }
};

module.exports = { tripList, tripsFindByCode };
