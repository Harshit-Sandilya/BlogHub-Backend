const mongoose = require("mongoose");

const UserBlogSchema = mongoose.Schema(
	{
		imgURL: { type: String, required: true },
		title: { type: String, required: true },
		body: { type: String, required: true },
		user: { type: String, required: true },
		likes: { type: Number, required: true },
		views: { type: Number, required: true },
	},
	{ collection: "blogs" }
);

module.exports = mongoose.model("Blog", UserBlogSchema);
