import User from "../models/User.js";
import Doctor from "../models/Doctor.js";
import Appointment from "../models/Appointment.js";

export const getStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalDoctors = await Doctor.countDocuments();
        const totalAppointments = await Appointment.countDocuments();
        const pendingAppointments = await Appointment.countDocuments({ status: "pending" });
        const confirmedAppointments = await Appointment.countDocuments({ status: "confirmed" });
        const cancelledAppointments = await Appointment.countDocuments({ status: "cancelled" });

        res.json({
            totalUsers,
            totalDoctors,
            totalAppointments,
            pendingAppointments,
            confirmedAppointments,
            cancelledAppointments,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password").sort({ createdAt: -1 });
        res.json({ users });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate("patient", "name phone")
            .populate("doctor", "name specialization")
            .sort({ createdAt: -1 });
        res.json({ appointments });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateAppointmentStatus = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );
        res.json(appointment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};