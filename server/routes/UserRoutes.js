const express = require("express");
const { getAllUserController, getUserByIdController, loginUserController, signUpUserController } = require("../controllers/userController");

const router = express.Router();

router.get("/allUser", getAllUserController)
router.get("/user/:id", getUserByIdController)
router.post("/login", loginUserController)
router.post("/signup", signUpUserController)

module.exports = router