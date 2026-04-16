import express from "express";
import { getStats, getAllUsers, deleteUser, getAllAppointments, updateAppointmentStatus } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/stats", protect, getStats);
router.get("/users", protect, getAllUsers);
router.delete("/users/:id", protect, deleteUser);
router.get("/appointments", protect, getAllAppointments);
router.patch("/appointments/:id/status", protect, updateAppointmentStatus);

export default router;