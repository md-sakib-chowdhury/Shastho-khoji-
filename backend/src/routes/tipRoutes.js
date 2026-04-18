import express from "express";
import { getTips, createTip, updateTip, deleteTip } from "../controllers/tipController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getTips);
router.post("/", protect, adminOnly, createTip);
router.put("/:id", protect, adminOnly, updateTip);
router.delete("/:id", protect, adminOnly, deleteTip);

export default router;