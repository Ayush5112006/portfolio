import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB, { getLastError } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
connectDB().catch((err) => console.error("Initial connect err:", err.message));

// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure DB connection before handling API requests
app.use(async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await connectDB();
    }
  } catch (e) {
    console.error("Middleware DB connect err:", e.message);
  }
  next();
});

// Health Check API
app.get("/api/health", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await connectDB();
    }
  } catch (e) {
    // getLastError will have error message
  }
  const states = ["Disconnected", "Connected", "Connecting", "Disconnecting"];
  const readyState = mongoose.connection.readyState;
  res.json({
    status: "ok",
    uptime: process.uptime(),
    database: {
      status: states[readyState] || "Unknown",
      readyState,
      host: mongoose.connection.host || null,
      name: mongoose.connection.name || null,
      error: getLastError(),
    },
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use("/api/contact", contactRoutes);

// Fallback Route
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Start Server
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Portfolio Backend Server running on http://localhost:${PORT}`);
  });
}

export default app;

