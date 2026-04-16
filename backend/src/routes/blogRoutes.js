import express from "express";
import { getBlogs, getAllBlogs, createBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", getBlogs);
router.get("/all", protect, getAllBlogs);
router.post("/", protect, createBlog);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

export default router;