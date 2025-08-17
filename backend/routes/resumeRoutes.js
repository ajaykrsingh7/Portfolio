import express from "express";
import path from "path";
const router = express.Router();

const resumePath = path.join(process.cwd(), "public", "resume.pdf"); // backend/public/resume.pdf

router.get("/download", (req, res) => {
  res.download(resumePath, "Ajay_Kumar_Singh_Resume.pdf", (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Resume download failed");
    }
  });
});

export default router;
