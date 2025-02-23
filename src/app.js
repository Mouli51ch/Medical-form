// src/app.js
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import { PORT } from "./constants.js";

// Debug environment variables
console.log("Environment variables at startup:", {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET
});

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import patientRoutes from './routes/patientRoutes.js';

// routes declaration
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/appointments", appointmentRoutes);
app.use("/api/v1/doctors", doctorRoutes);
app.use("/api/v1/patients", patientRoutes);

// Start server with DB connection
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error);
        process.exit(1);
    }
};

startServer();

export { app };