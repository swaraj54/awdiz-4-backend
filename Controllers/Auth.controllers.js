import UserModal from "../Modals/User.modal.js";
import bcrypt from 'bcrypt';
import Jwt from "jsonwebtoken";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(401).json({ success: false, message: "All fields are manmdatory.." })

        const user = await UserModal.findOne({ email: email });
        // console.log(user, "user")

        if (!user) return res.status(401).json({ success: false, message: "Email is wrong.." });

        const isPasscorrect = await bcrypt.compare(password, user.password);
        // console.log(isPasscorrect, "check here")
        if (!isPasscorrect) {
            return res.status(401).json({ success: false, message: "Passwprd is wrpmog." })
        }
        // generate token

        const token = await Jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        // console.log(token, "token")

        return res.status(200).json({ success: true, message: "Login successfull.", user: { name: user.name, id: user._id }, token })

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}
export const Register = async (req, res) => {
    try {
        // console.log(req.body, "req.body")
        const { name, email, password, number } = req.body;
        // console.log(number, typeof number)
        // console.log(name, email, password, "add data")
        if (!name || !email || !password || !number) return res.status(401).json({ success: false, message: "All fields are mandtory." })

        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword,"hashedPassword")
        const user = new UserModal({
            name: name,
            email,
            password: hashedPassword,
            number
        })

        await user.save();

        return res.status(200).json({ success: true, message: "Registeration Successfull." })

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}
export const getCurrentUser = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return res.status(401).json({ success: false, message: "Token is requored." })

        const {id} = await Jwt.verify(token, process.env.JWT_SECRET)
        // console.log(id, 'id')

        const user = await UserModal.findById(id);
        if (!user) return res.status(401).json({ success: false, message: "User not found." })

        return res.status(200).json({ success: true, user: { name: user.name, id: user._id } })

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}
