const news = (req, res) => {
    res.render("news", { title: "Travlr Getaways", currentUrl: "news/" });
};

module.exports = { news };
