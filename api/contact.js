import connectDB from "./lib/db.js";
import Message from "./lib/Message.js";

export default async function handler(req, res) {
  // CORS headers — allow production and local dev
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  await connectDB();

  // POST — Save a new contact message
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: "Please provide all required fields: name, email, and message.",
        });
      }

      const newMessage = await Message.create({ name, email, message });

      return res.status(201).json({
        success: true,
        message: "Your message has been sent successfully!",
        data: {
          id: newMessage._id,
          name: newMessage.name,
          email: newMessage.email,
          createdAt: newMessage.createdAt,
        },
      });
    } catch (error) {
      console.error("Error saving message:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "Failed to submit message",
      });
    }
  }

  // GET — Retrieve all messages
  if (req.method === "GET") {
    try {
      const messages = await Message.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: messages.length, data: messages });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Failed to fetch messages" });
    }
  }

  // DELETE — Remove a message by id
  if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      if (!id) return res.status(400).json({ success: false, error: "Missing id" });
      const deleted = await Message.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ success: false, error: "Message not found" });
      return res.json({ success: true, message: "Message deleted successfully" });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Failed to delete message" });
    }
  }

  return res.status(405).json({ success: false, error: "Method not allowed" });
}
