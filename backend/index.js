import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactsRoutes from "./routes/contactsRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js"; // ✅ Resume route import

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contacts", contactsRoutes);
app.use("/api/resume", resumeRoutes); // ✅ Resume download route

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
