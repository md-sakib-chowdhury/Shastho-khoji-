import Doctor from "../models/Doctor.js";

export const getDoctors = async (req, res) => {
    try {
        const { specialization, division, district, search, page = 1, limit = 10 } = req.query;
        const query = {};
        if (specialization) query.specialization = new RegExp(specialization, "i");
        if (division) query.division = new RegExp(division, "i");
        if (district) query.district = new RegExp(district, "i");
        if (search) query.$or = [
            { name: new RegExp(search, "i") },
            { specialization: new RegExp(search, "i") },
        ];
        const total = await Doctor.countDocuments(query);
        const doctors = await Doctor.find(query)
            .skip((page - 1) * limit)
            .limit(Number(limit));
        res.json({ doctors, total, page: Number(page), pages: Math.ceil(total / limit) });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) return res.status(404).json({ message: "ডাক্তার পাওয়া যায়নি" });
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.create(req.body);
        res.status(201).json(doctor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!doctor) return res.status(404).json({ message: "ডাক্তার পাওয়া যায়নি" });
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteDoctor = async (req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.json({ message: "ডাক্তার মুছে ফেলা হয়েছে" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};