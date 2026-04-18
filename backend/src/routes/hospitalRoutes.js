import express from "express";
import { getHospitals, createHospital, updateHospital, deleteHospital } from "../controllers/hospitalController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getHospitals);
router.post("/", protect, adminOnly, createHospital);
router.put("/:id", protect, adminOnly, updateHospital);
router.delete("/:id", protect, adminOnly, deleteHospital);

export default router;