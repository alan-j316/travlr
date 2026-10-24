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


// POST: /trips - add a trip
// Must always return an HTML status code and JSON message to the client
const tripsAddTrip = async (req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    })

    const q = await newTrip.save();

    if (!q) {
        // Trip wasn't added
        return res.status(400).json(err);
    } else {
        // Trip was added
        return res.status(201).json(q);
    }

    // Uncomment these lines for debugging purposes
    // console.log(q)
}


// GET: /trips/:tripCode - lists a single trip
// Must always return an HTML status code and JSON message to the client
const tripsFindByCode = async (req, res) => {
    const q = await Model.find({code: req.params.tripCode}) // Return single code
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

module.exports = {tripList, tripsFindByCode};
