import { User } from "../models/schema.js";

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(404).json({ message: "Please fill all the fields" })
    try {
        const id = await User.create({
            name, email, password
        })
        res.status(200).json({ message: "success" })
    } catch (error) {
        res.status(404).json({ message: "User already existed" })
    }
}
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(404).json({ message: "Please fill all the fields" })
    const id = await User.findOne({ email ,password})
    if (id) {
        res.status(200).json({ message: "success" })
    } else {
        res.status(404).json({ message: "Email or password incorrect" })
    }
}
export { registerUser, loginUser }