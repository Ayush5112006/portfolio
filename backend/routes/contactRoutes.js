import express from "express";
import Message from "../models/Message.js";
import { sendNotificationEmail } from "../config/mailer.js";

const router = express.Router();

// @route   POST /api/contact
// @desc    Submit a contact message
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Please provide all required fields: name, email, and message.",
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      message,
    });

    // Send email notification to Ayush
    sendNotificationEmail({ name, email, message }).catch((err) =>
      console.error("Email notification background error:", err)
    );

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
    console.error("Error creating contact message:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to submit message",
    });
  }
});

// @route   GET /api/contact
// @desc    Get all messages (for admin/portfolio owner)
// @access  Public
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    return res.json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to fetch messages",
    });
  }
});

// @route   DELETE /api/contact/:id
// @desc    Delete a message
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({
        success: false,
        error: "Message not found",
      });
    }
    return res.json({
      success: true,
      message: "Message deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Failed to delete message",
    });
  }
});

export default router;
