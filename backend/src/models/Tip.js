import mongoose from "mongoose";

const tipSchema = new mongoose.Schema({
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    category: { type: String, required: true },
    icon: { type: String, default: "💡" },
    readTime: { type: String, default: "৩ মিনিট" },
}, { timestamps: true });

export default mongoose.model("Tip", tipSchema);