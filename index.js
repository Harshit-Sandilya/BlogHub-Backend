const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", true);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ze6xi3i.mongodb.net/?retryWrites=true&w=majority`;
mongoose
	.connect(uri, {
		waitQueueTimeoutMS: 5000,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: "Blogs",
	})
	.catch((err) => {
		console.error(err.stack);
		process.exit(1);
	})
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`Server is running on port ${process.env.PORT}`);
		});
	});

app.use("/", (req, res) => {
	res.status(200).json({ message: "Backend is running" });
});
