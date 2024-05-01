const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const app = express();
const cors = require("cors");

const products = require("./routes/Products");
const transactions = require("./routes/Transactions");
const accessLog = require("./middleware/accessLog");

// app.use(bodyParser.json());

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded());
app.use(cors());
app.use("/", products);
app.use("/", transactions);

app.listen(config.PORT, () => {
	console.log(`Listening at http://localhost:${config.PORT}`);
});
