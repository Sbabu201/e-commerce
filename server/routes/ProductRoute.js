const express = require("express");
const { getAllProductController, getProductByIdController, addProductController } = require("../controllers/productController");

const router = express.Router();

router.get("/allProduct", getAllProductController);
router.get("/product/:id", getProductByIdController);
// router.put("/admin/edit/:id", editProductByIdController)
router.post("/addProduct", addProductController)
// router.put("/admin/edit/:id", editProductByIdController)
// router.delete("/admin/delete/:id", signUpUserController)

module.exports = router