const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const posts = require("./routes/posts.route");
const write = require("./routes/write.route");
const register = require("./routes/register.route");
const login = require("./routes/login.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/contact", (req, res) => {
	res.status(200).json({ message: "Developer Contact Requested" });
});

app.use("/posts", posts);
app.use("/write", write);

app.use("/register", register);
app.use("/login", login);

app.use("/test", (req, res) => {
	res.status(200).json({ message: "Backend is running" });
});
app.use("*", (req, res) => {
	res.status(404).json({ message: "Wrong URL" });
});

module.exports = app;
