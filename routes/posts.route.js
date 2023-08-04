const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.model");

router.route("/").get(async (req, res) => {
	const blogs = await Blog.find();
	res.status(200).json({ message: "Blog Posts Requested", data: blogs });
});

module.exports = router;
