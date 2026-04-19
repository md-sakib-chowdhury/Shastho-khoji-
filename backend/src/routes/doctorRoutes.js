import express from "express";
import { getDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor } from "../controllers/doctorController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", getDoctors);
router.get("/:id", getDoctorById);
router.post("/", protect, createDoctor);
router.put("/:id", protect, updateDoctor);
router.delete("/:id", protect, deleteDoctor);

export default router;