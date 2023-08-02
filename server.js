const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/login", (req, res) => {
	res.status(200).json({ message: "User Login Requested" });
});
app.use("/posts", (req, res) => {
	res.status(200).json({ message: "Blog Posts Requested" });
});
app.use("/write", (req, res) => {
	res.status(200).json({ message: "New Blog Addition" });
});
app.use("/contact", (req, res) => {
	res.status(200).json({ message: "Developer Contact Requested" });
});
app.use("/register", (req, res) => {
	res.status(200).json({ message: "New User Addition" });
});
app.use("/", (req, res) => {
	res.status(200).json({ message: "Backend is running" });
});

module.exports = app;
