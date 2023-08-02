const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/", (req, res) => {
	res.status(200).json({ message: "Backend is working" });
});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
