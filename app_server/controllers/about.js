const about = (req, res) => {
    res.render("about", { title: "Travlr Getaways", currentUrl: "about/" });
};

module.exports = { about };
