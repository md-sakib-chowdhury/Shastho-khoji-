import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    bio: { type: String },
    icon: { type: String, default: "👤" },
});

const aboutSchema = new mongoose.Schema({
    missionText: { type: String, default: "" },
    stats: [
        {
            number: { type: String },
            label: { type: String },
            icon: { type: String },
        }
    ],
    team: [teamMemberSchema],
}, { timestamps: true });

export default mongoose.model("About", aboutSchema);