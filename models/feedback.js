import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true }, // email or phone
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Feedback = mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);
export default Feedback;
