const express = require("express");
const router = express.Router();
const Products = require("../controller/productsController");

router.get("/products", Products.index);
router.post("/products", Products.add);
router.delete("/products/:id", Products.earse);
router.put("/products/:id", Products.edit);
router.get("/products/migrate", Products.migrate);

module.exports = router;
