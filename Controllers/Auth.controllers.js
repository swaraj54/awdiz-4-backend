import UserModal from "../Modals/User.modal.js";

export const Login = (req, res) => {
    res.send("Hi from login hii")
}
export const Register = async (req, res) => {
    try {
        // console.log(req.body, "req.body")
        const { name, email, password, number } = req.body;
        // console.log(number, typeof number)
        // console.log(name, email, password, "add data")
        if (!name || !email || !password || !number) return res.status(401).json({ success: false, message: "All fields are mandtory." })

        const user = new UserModal({
            name: name,
            email,
            password,
            number
        })

        await user.save();

        return res.status(200).json({ success: true, message: "Registeration Successfull." })

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}
export const getCurrentUser = (req, res) => {
    res.send("HIII")
}
