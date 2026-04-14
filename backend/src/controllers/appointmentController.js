import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
    try {
        const { doctorId, appointmentDate, timeSlot, symptoms } = req.body;
        const appointment = await Appointment.create({
            patient: req.user._id, doctor: doctorId, appointmentDate, timeSlot, symptoms,
        });
        res.status(201).json(appointment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getMyAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ patient: req.user._id })
            .populate("doctor", "name specialization division district")
            .sort({ appointmentDate: -1 });
        res.json({ appointments });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const cancelAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) return res.status(404).json({ message: "পাওয়া যায়নি" });
        appointment.status = "cancelled";
        await appointment.save();
        res.json(appointment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};