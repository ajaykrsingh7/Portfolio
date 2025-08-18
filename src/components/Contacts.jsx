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
        <section id="contact" className="min-h-screen flex  items-center justify-center px-6 py-16">
            

                {/* Contact Form - Right side */}
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mb-6 text-center md:text-left mr-10">Contact Me</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                        <input
                            type="text"
                            name="name"
                            placeholder=" Enter Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border p-3 rounded"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border p-3 rounded"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message...."
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
