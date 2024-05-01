const express = require("express");
const api = express.Router();

api.get("/", (req, res) => {
	res.send("Hello World! This is the API");
});
