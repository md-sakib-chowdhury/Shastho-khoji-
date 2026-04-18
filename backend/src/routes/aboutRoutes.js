import express from "express";
import {
    getAbout,
    updateAbout,
    sendContact,
    getContacts,
    markContactRead,
    deleteContact,
} from "../controllers/aboutController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAbout);
router.put("/", protect, adminOnly, updateAbout);
router.post("/contact", sendContact);
router.get("/contacts", protect, adminOnly, getContacts);
router.put("/contacts/:id/read", protect, adminOnly, markContactRead);
router.delete("/contacts/:id", protect, adminOnly, deleteContact);

export default router;