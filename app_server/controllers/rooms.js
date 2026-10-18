const rooms = (req, res) => {
    res.render("rooms", { title: "Travlr Getaways", currentUrl: "rooms/" });
};

module.exports = { rooms };
