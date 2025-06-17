'use client';
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const FeedbackForm = () => {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/feedback", form);
      if (data.success) {
        toast.success(data.message);
        setForm({ name: "", contact: "", message: "" });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 border">
      <h2 className="text-xl font-bold">Send Feedback</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-2 border" />
      <input name="contact" value={form.contact} onChange={handleChange} placeholder="Email or Phone" required className="w-full p-2 border" />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Feedback" required className="w-full p-2 border h-32" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Submit</button>
    </form>
  );
};

export default FeedbackForm;
