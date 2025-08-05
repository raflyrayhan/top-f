"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [{ name, email, message }, setState] = useState(initialState);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your email API
      console.log({ name, email, message });
      clearState();
      setMessageSent(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold text-center mb-10 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          <form
            onSubmit={handleSubmit}
            className="bg-[#2a2a2a] p-6 rounded-lg space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#1a1a1a] border border-[#444] text-white placeholder-gray-400"
              value={name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#1a1a1a] border border-[#444] text-white placeholder-gray-400"
              value={email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 rounded-md bg-[#1a1a1a] border border-[#444] text-white placeholder-gray-400"
              value={message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#387f1a] hover:bg-green-600 text-white py-3 rounded-md font-semibold transition"
            >
              Send Message
            </button>
            {messageSent && (
              <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
            )}
          </form>

          <div className="space-y-6 text-sm text-white">
            <div>
              <h1 className="text-bold text-[#379014]">Warehouse</h1>
            Jl. Jababeka IV E Blok.V No.78Q, Jababeka 1, Cikarang Utara <br />
            Bekasi, 17534 Indonesia <br /><br />
            <h1 className="text-bold text-[#379014]">Office</h1>
            Office Park Karawaci Ruko Pinangsia Selatan Blok F/72<br/>Tangerang, Banten 15138
            <br/><br/>
            <strong className="text-[#379014]">Phone:</strong> +62 21 89109606 <br />
            <br/>
            <strong className="text-[#379014]">Fax:</strong> +62 21 89109607 <br />
            <br/>
            <strong className="text-[#379014]">Email:</strong>{" "}
            <a href="mailto:marketing@top-f.co.id" className="hover:underline text-white">
              marketing@top-f.co.id
            </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
