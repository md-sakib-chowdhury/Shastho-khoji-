// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { connectDB } from "./src/config/db.js";
// import authRoutes from "./src/routes/authRoutes.js";
// import doctorRoutes from "./src/routes/doctorRoutes.js";
// import appointmentRoutes from "./src/routes/appointmentRoutes.js";

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/doctors", doctorRoutes);
// app.use("/api/appointments", appointmentRoutes);

// app.get("/", (req, res) => res.json({ message: "Shastho Khoji API চালু আছে ✅" }));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server চালু আছে port ${PORT} এ`));
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import doctorRoutes from "./src/routes/doctorRoutes.js";
import appointmentRoutes from "./src/routes/appointmentRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import bannerRoutes from "./src/routes/bannerRoutes.js";
import blogRoutes from "./src/routes/blogRoutes.js";
import aboutRoutes from "./src/routes/aboutRoutes.js";
import hospitalRoutes from "./src/routes/hospitalRoutes.js";
import tipRoutes from "./src/routes/tipRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/banners", bannerRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/tips", tipRoutes);
app.get("/", (req, res) => res.json({ message: "Shastho Khoji API চালু আছে ✅" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server চালু আছে port ${PORT} এ`));