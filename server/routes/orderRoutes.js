const express = require("express");
const { getordersByIdController, addOrderController } = require("../controllers/orderController");
const router = express.Router();
router.get("/orderId/:id", getordersByIdController)
router.post("/addOrder", addOrderController);
module.exports = router