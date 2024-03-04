const express = require("express");
const { getAllUserController, getUserByIdController, loginUserController, signUpUserController, getAllAddressController, addAddressController } = require("../controllers/userController");

const router = express.Router();

router.get("/allUser", getAllUserController)
router.get("/user/:id", getUserByIdController)
router.post("/login", loginUserController)
router.post("/signup", signUpUserController)
// address routes
router.get("/allAddress/:id", getAllAddressController)
router.post("/addAddress", addAddressController);
// router.put("/editAddress/:id",editAddressByIdController);
// router.delete("/deleteAddress/:id",deleteAddressByIdController);
module.exports = router