import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, default: "" },
    specialization: { type: String, required: true },
    phone: { type: String },
    qualifications: { type: String },
    experience: { type: Number, default: 0 },
    consultationFee: { type: Number, default: 0 },
    division: { type: String, required: true },
    district: { type: String, required: true },
    upazila: { type: String },
    address: { type: String },
    location: {
        type: { type: String, default: "Point" },
        coordinates: { type: [Number], default: [0, 0] },
    },
    availableDays: [{ type: String }],
    timeSlots: [{ type: String }],
    rating: { type: Number, default: 0 },
    totalRatings: { type: Number, default: 0 },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true });

doctorSchema.index({ location: "2dsphere" });

export default mongoose.model("Doctor", doctorSchema);