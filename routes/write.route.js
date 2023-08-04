const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.model");

router.route("/").post(async (req, res) => {
	try {
		const newBlog = new Blog(req.body);
		newBlog
			.save()
			.then(() => res.status(201).json({ message: "New Blog Addition" }))
			.catch((error) => res.status(400).json({ message: error.message }));
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
