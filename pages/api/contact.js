// pages/api/contact.js
import connectDB from "@/config/db"; // your existing MongoDB connection
import Contact from "@/models/contact"; // your Contact schema

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Only POST allowed" });
  }

  try {
    await connectDB();

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    await Contact.create({ name, email, subject, message });

    return res.status(200).json({ success: true, message: "Message received. We'll be in touch!" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

