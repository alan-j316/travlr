const index = (req, res) => {
    res.render("index", { title: "Travlr Getaways", currentUrl: "/" });
};

module.exports = { index };
