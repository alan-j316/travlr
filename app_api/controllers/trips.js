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

module.exports = { tripList };
