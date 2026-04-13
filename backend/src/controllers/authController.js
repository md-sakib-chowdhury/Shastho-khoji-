import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body;
        const exists = await User.findOne({ phone });
        if (exists) return res.status(400).json({ message: "এই ফোন নম্বর আগে থেকেই registered" });
        const user = await User.create({ name, phone, email, password });
        res.status(201).json({ _id: user._id, name: user.name, phone: user.phone, token: generateToken(user._id) });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { phone, password } = req.body;
        const user = await User.findOne({ phone });
        if (user && (await user.matchPassword(password))) {
            res.json({ _id: user._id, name: user.name, phone: user.phone, token: generateToken(user._id) });
        } else {
            res.status(401).json({ message: "ফোন নম্বর বা পাসওয়ার্ড ভুল" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getMe = async (req, res) => {
    res.json(req.user);
};