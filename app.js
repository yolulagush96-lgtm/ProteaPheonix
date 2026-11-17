const express = require("express");
const app = express();

// Tell Express to use EJS
app.set("view engine", "ejs");

// Serve CSS and images
app.use(express.static("public"));
app.use("/Assets", express.static("Assets"));

// Homepage
app.get("/", (req, res) => {
    res.render("index");
});

// Start server
app.listen(3002, () => {
    console.log("Protea Phoenix is running on http://localhost:3002");
});
