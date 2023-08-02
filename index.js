const mongoose = require("mongoose");
const app = require("./server");
require("dotenv").config();

mongoose.set("strictQuery", true);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ze6xi3i.mongodb.net/?retryWrites=true&w=majority`;
mongoose
	.connect(uri, {
		waitQueueTimeoutMS: 5000,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: "BlogHub",
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
