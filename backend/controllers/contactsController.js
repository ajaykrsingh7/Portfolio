import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmailController = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ msg: "All fields are required!" });
    }

    try {
        const msg = {
            to: process.env.MY_EMAIL,    // Receive email
            from: process.env.MY_EMAIL,  // Verified sender
            subject: `New Contact Form Message from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`
        };

        await sgMail.send(msg);
        res.status(200).json({ msg: "Message sent successfully!" });
    } catch (error) {
        console.error("SendGrid Error:", error.response ? error.response.body : error);
        res.status(500).json({
            msg: error.response ? error.response.body : "Something went wrong while sending email."
        });
    }
};
