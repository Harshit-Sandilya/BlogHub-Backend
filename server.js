const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const register = require("./routes/register.route");
const write = require("./routes/write.route");
const login = require("./routes/login.route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/posts", (req, res) => {
	res.status(200).json({ message: "Blog Posts Requested" });
});
app.use("/contact", (req, res) => {
	res.status(200).json({ message: "Developer Contact Requested" });
});
app.use("/write", write);

app.use(bodyParser.json());
app.use("/register", register);
app.use("/login", login);

app.use("/", (req, res) => {
	res.status(200).json({ message: "Backend is running" });
});

module.exports = app;
