const express = require("express");
const { getAllBagItemController, addToBagByIdController, deleteBagItemByIdController } = require("../controllers/bagController");

const router = express.Router();

router.get("/allbag/:id", getAllBagItemController)
router.post("/addbag", addToBagByIdController)
router.delete("/removebag/:id", deleteBagItemByIdController)


module.exports = router