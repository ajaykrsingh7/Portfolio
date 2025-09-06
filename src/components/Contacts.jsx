import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";
import Lottie from "lottie-react"; // ✅ Correct import
import contactAnimation from "../assets/contact.json"; // ✅ Clean filename

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill all fields!");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/contacts/send-email",
        formData
      );
      toast.success(res.data.msg || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      if (err.response && err.response.data.msg) {
        toast.error(err.response.data.msg);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center px-6 py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {/* Left Animation */}
        <div className="md:w-1/2 flex justify-center">
          <Lottie animationData={contactAnimation} loop={true} style={{ width: 500, height: 500 }} />
        </div>

        {/* Right Contact Form */}
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              className="border p-3 rounded h-32 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition flex justify-center items-center"
              disabled={loading}
            >
              {loading ? <Loader /> : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
}
