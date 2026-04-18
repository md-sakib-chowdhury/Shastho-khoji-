import About from "../models/About.js";
import Contact from "../models/Contact.js";

// About info পাওয়া
export const getAbout = async (req, res) => {
    try {
        let about = await About.findOne();
        if (!about) {
            about = await About.create({
                missionText: "স্বাস্থ্যখোঁজি তৈরি হয়েছে একটি সহজ লক্ষ্য নিয়ে — বাংলাদেশের প্রতিটি মানুষ যেন সহজেই সঠিক ডাক্তার খুঁজে পায়।",
                stats: [
                    { number: "৫০০+", label: "নিবন্ধিত ডাক্তার", icon: "👨‍⚕️" },
                    { number: "১০,০০০+", label: "সন্তুষ্ট রোগী", icon: "😊" },
                    { number: "৬৪", label: "জেলায় সেবা", icon: "🗺️" },
                    { number: "২৪/৭", label: "সহায়তা", icon: "🕐" },
                ],
                team: [
                    { name: "ডা. রাহেলা বেগম", role: "প্রতিষ্ঠাতা ও CEO", bio: "১৫ বছরের অভিজ্ঞতাসম্পন্ন চিকিৎসক", icon: "👩‍⚕️" },
                    { name: "তানভীর আহমেদ", role: "CTO", bio: "প্রযুক্তি বিশেষজ্ঞ, ১০ বছরের অভিজ্ঞতা", icon: "👨‍💻" },
                    { name: "নাফিসা ইসলাম", role: "Head of Operations", bio: "স্বাস্থ্যসেবা ব্যবস্থাপনায় বিশেষজ্ঞ", icon: "👩‍💼" },
                ],
            });
        }
        res.json(about);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// About info আপডেট
export const updateAbout = async (req, res) => {
    try {
        let about = await About.findOne();
        if (!about) about = new About();
        const { missionText, stats, team } = req.body;
        if (missionText !== undefined) about.missionText = missionText;
        if (stats !== undefined) about.stats = stats;
        if (team !== undefined) about.team = team;
        await about.save();
        res.json(about);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Contact message পাঠানো
export const sendContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const contact = await Contact.create({ name, email, subject, message });
        res.status(201).json({ message: "বার্তা পাঠানো হয়েছে!", contact });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// সব messages পাওয়া (admin)
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Message read করা (admin)
export const markContactRead = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { isRead: true },
            { new: true }
        );
        res.json(contact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Message delete করা (admin)
export const deleteContact = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ message: "বার্তা মুছে ফেলা হয়েছে" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};