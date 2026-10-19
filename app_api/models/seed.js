// Create the DB connection and import the schema
const Mongoose = require("./db");
const Trip = require("./travlr");

var fs = require("fs");
var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

seedDB().then(async () => {
    await Mongoose.connection.close();
    console.log("Database seeded successfully!");
    process.exit(0);
});
