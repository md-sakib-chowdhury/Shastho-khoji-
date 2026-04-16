import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String },
    author: { type: String, default: "Admin" },
    category: { type: String, default: "স্বাস্থ্য" },
    isPublished: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model("Blog", blogSchema);