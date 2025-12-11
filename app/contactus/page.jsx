"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";
import HomeProducts from "@/components/HomeProducts";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Your message was submitted!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
   <div><Navbar/>
   
    
    <main className="max-w-xl mx-auto px-4 py-10">
       <Link href="/" className="text-3xl font-bold mb-6">
          Contact Us
        </Link>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Your Email"
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Your Message"
          className="w-full border p-2 rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </main>
     <Footer/>
    </div>
  );
}
