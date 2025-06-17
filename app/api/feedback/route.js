import connectDB from "@/config/db";
import feedback from "@/models/feedback";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const { name, contact, message } = await request.json();

    if (!name || !contact || !message) {
      return NextResponse.json({ success: false, message: "All fields are required" });
    }

    // Save to DB
    await Feedback.create({ name, contact, message });

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,     // Your email address
        pass: process.env.MY_EMAIL_PASS // App-specific password
      }
    });

    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL, // you receive your own feedback
      subject: "New Feedback Received",
      text: `Name: ${name}\nContact: ${contact}\nMessage:\n${message}`
    });

    return NextResponse.json({ success: true, message: "Feedback submitted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
