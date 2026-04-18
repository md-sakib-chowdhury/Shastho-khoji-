import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ["সরকারি", "বেসরকারি"], default: "সরকারি" },
    location: { type: String, required: true },
    beds: { type: Number, default: 0 },
    phone: { type: String },
    emergency: { type: Boolean, default: false },
    icon: { type: String, default: "🏥" },
}, { timestamps: true });

export default mongoose.model("Hospital", hospitalSchema);