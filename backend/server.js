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
connectDB();

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
  if (mongoose.connection.readyState !== 1) {
    await connectDB();
  }
  next();
});

// Health Check API
app.get("/api/health", async (req, res) => {
  if (mongoose.connection.readyState !== 1) {
    await connectDB();
  }
  const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Disconnected";
  res.json({
    status: "ok",
    uptime: process.uptime(),
    database: {
      status: dbStatus,
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

