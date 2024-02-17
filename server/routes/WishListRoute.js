const express = require("express");
const { addWishListController, getAllWishListController, deleteWishListByIdController } = require("../controllers/wishListController");

const router = express.Router();

router.get("/allWishList/:id", getAllWishListController)
router.post("/addWishList", addWishListController)
router.delete("/removeWishList/:id", deleteWishListByIdController)


module.exports = router