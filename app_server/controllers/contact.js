const contact = (req, res) => {
    res.render("contact", { title: "Travlr Getaways", currentUrl: "contact/" });
};

module.exports = { contact };
