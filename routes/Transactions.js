const express = require("express");
const router = express.Router();
const transactions = require("../controller/trannsactionsController");

router.get("/transactions", transactions.index);
router.post("/transactions", transactions.add);
router.delete("/transactions/:id", transactions.earse);
router.put("/transactions/:id", transactions.edit);
router.get("/transactions/grouping", transactions.group);

module.exports = router;
