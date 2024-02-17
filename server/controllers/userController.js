const bcrypt = require("bcrypt")
const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken");

exports.getAllUserController = async (req, res) => {

}
exports.getUserByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log('req.params', id)

        const existUser = await userModel.findById(id);
        if (!existUser) {
            return res.status(400).send({
                message: "user not exist ",
                success: false
            })
        }
        return res.status(201).send({
            message: "user got successfully ",
            success: true,
            existUser
        })

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: "user failed to get",
            success: false,
            error

        })
    }
}
exports.loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) {
            return res.status(400).send({
                message: "enter EmailId properly",
                success: false
            })
        }
        if (!password) {
            return res.status(400).send({
                message: "enter password properly",
                success: false
            })
        }
        const existUser = await userModel.findOne({ email });
        if (!existUser) {
            return res.status(400).send({
                message: "email not registered",
                success: false
            })
        }
        const comparePassword = await bcrypt.compare(password, existUser.password);
        if (comparePassword) {
            const { password, ...info } = existUser._doc;
            const accessToken = jwt.sign({ id: existUser._id, isAdmin: existUser.isAdmin }, "secretKey1234"
                , { expiresIn: "5d" });
            return res.status(201).send({
                message: "login successful",
                success: true,
                info, accessToken
            })
        }
        return res.status(400).send({
            message: "wrong password",
            success: false
        })

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: "registratiion  failed",
            success: false,
            error

        })
    }
}

exports.signUpUserController = async (req, res) => {
    try {
        const { name, email, password, profilePhoto } = req.body;
        console.log('profilePhoto', profilePhoto)
        if (!name || !email || !password, !profilePhoto) {
            return res.status(400).send({
                message: "enter valid document",
                success: false
            })
        }
        const existUser = await userModel.findOne({ email });
        if (existUser) {
            return res.status(400).send({
                message: "email already exist",
                success: false
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ name, email, password: hashedPassword, profilePhoto });
        await user.save();
        return res.status(201).send({
            message: "registration successful",
            success: true,
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: "registratiion  failed",
            success: false,
            error

        })
    }
}
