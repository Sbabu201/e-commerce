const express = require("express");
const { getAllProductController, getProductByIdController, addProductController, addRatingController, getAllRatingController, editRatingByIdController } = require("../controllers/productController");

const router = express.Router();

router.get("/allProduct", getAllProductController);
// rating routes 
router.get("/allRating", getAllRatingController);
router.post("/addRating", addRatingController);
router.put("/edit/:id", editRatingByIdController);

router.get("/product/:id", getProductByIdController);
// router.put("/admin/edit/:id", editProductByIdController)
router.post("/addProduct", addProductController)
// router.put("/admin/edit/:id", editProductByIdController)
// router.delete("/admin/delete/:id", signUpUserController)

module.exports = router