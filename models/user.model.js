const mongoose = require("mongoose");

const UserBlogSchema = mongoose.Schema({
	documentId: { type: String, required: false },
});

const UserSchema = mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		blogs: { type: [UserBlogSchema], required: true },
	},
	{ collection: "users" }
);

module.exports = mongoose.model("User", UserSchema);
