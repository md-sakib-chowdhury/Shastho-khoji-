import Hospital from "../models/Hospital.js";

export const getHospitals = async (req, res) => {
    try {
        const hospitals = await Hospital.find().sort({ createdAt: -1 });
        res.json(hospitals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createHospital = async (req, res) => {
    try {
        const hospital = await Hospital.create(req.body);
        res.status(201).json(hospital);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateHospital = async (req, res) => {
    try {
        const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(hospital);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteHospital = async (req, res) => {
    try {
        await Hospital.findByIdAndDelete(req.params.id);
        res.json({ message: "হাসপাতাল মুছে ফেলা হয়েছে" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};