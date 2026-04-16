import express from "express";
import { getBanners, createBanner, updateBanner, deleteBanner } from "../controllers/bannerController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", getBanners);
router.post("/", protect, createBanner);
router.put("/:id", protect, updateBanner);
router.delete("/:id", protect, deleteBanner);

export default router;