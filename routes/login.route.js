const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.route("/").post(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (user && bcrypt.compareSync(password, user.password)) {
		const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET);
		res.status(200).json({ message: "User Login Accepted", data: token });
		return;
	}

	res.status(401).json({ message: "User Login Failed" });
});

module.exports = router;
