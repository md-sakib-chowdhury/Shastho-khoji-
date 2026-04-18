import Tip from "../models/Tip.js";

export const getTips = async (req, res) => {
    try {
        const tips = await Tip.find().sort({ createdAt: -1 });
        res.json(tips);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createTip = async (req, res) => {
    try {
        const tip = await Tip.create(req.body);
        res.status(201).json(tip);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateTip = async (req, res) => {
    try {
        const tip = await Tip.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(tip);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteTip = async (req, res) => {
    try {
        await Tip.findByIdAndDelete(req.params.id);
        res.json({ message: "টিপস মুছে ফেলা হয়েছে" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};