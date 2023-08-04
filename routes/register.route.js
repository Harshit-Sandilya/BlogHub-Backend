const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

router.route("/").post(async (req, res) => {
	try {
		const { email, password } = req.body;
		const encryptedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({
			email: email,
			password: encryptedPassword,
			blogs: [],
		});
		newUser
			.save()
			.then(() => res.status(201).json({ message: "New User Addition Success" }))
			.catch((error) => res.status(400).json({ message: error.message }));
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
