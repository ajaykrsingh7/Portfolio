import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";


export default function Contacts() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false); // Loader state

    // Input handle karne ke liye
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form validation
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

    // Form submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true); // Show loader

        try {
            const res = await axios.post(
                "http://localhost:5000/api/contacts/send-email", // Backend SendGrid route
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
            setLoading(false); // Hide loader
        }
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
            <div className="flex flex-col md:flex-row md:space-x-16 w-full max-w-5xl">

                {/* Connect With Me - Left side */}
                <div className="flex flex-col items-center md:items-start mb-12 md:mb-0 md:w-1/2">
                    <h3 className="text-3xl font-bold text-gray-100 dark:text-gray-100 mb-4 mt-4  text-gray-700">
                        Connect With Me
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-xl text-start">
                        I'm open to collaborations and opportunities. Feel free to reach out!
                    </p>
                    <div className="flex flex-col space-y-6 text-3xl">
                        <a
                            href="https://www.linkedin.com/in/ajaykrsingh07/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-4 text-blue-600 hover:text-blue-800"
                        >
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>

                        <a
                            href="https://github.com/ajaykrsingh7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-4 text-gray-800 dark:text-gray-100 hover:text-gray-600"
                        >
                            <FaGithub />
                            <span>GitHub</span>
                        </a>

                        <a
                            href="https://twitter.com/iamAjaykrsingh7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-4 text-blue-400 hover:text-blue-600"
                        >
                            <FaTwitter />
                            <span>Twitter</span>
                        </a>

                        <a
                            href="mailto:ajaykrsingh2002@gmail.com"
                            className="flex items-center space-x-4 text-red-500 hover:text-red-700"
                        >
                            <FaEnvelope />
                            <span>Email</span>
                        </a>
                    </div>

                </div>

                {/* Contact Form - Right side */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Contact Me</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border p-3 rounded"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border p-3 rounded"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="border p-3 rounded h-32"
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

            {/* Toast Container */}
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
