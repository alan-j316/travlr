const meals = (req, res) => {
    res.render("meals", { title: "Travlr Getaways", currentUrl: "meals/" });
};

module.exports = { meals };
