const tripsEndpoint = "http://localhost:3000/api/trips";
const options = {
    method: "GET",
    headers: {
        Accept: "application/json",
    },
};

const travel = async (req, res) => {
    await fetch(tripsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
            res.render("travel", {
                title: "Travlr Getaways",
                trips: json,
                currentUrl: "travel/",
            });
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = { travel };
