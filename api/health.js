import connectDB from "./lib/db.js";
import mongoose from "mongoose";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    await connectDB();
    const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Disconnected";
    return res.json({
      status: "ok",
      database: {
        status: dbStatus,
        host: mongoose.connection.host || null,
        name: mongoose.connection.name || null,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return res.status(500).json({ status: "error", error: error.message });
  }
}
