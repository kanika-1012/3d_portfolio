// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please fill in all fields.' });
        }

        // Configure the SMTP transporter with your environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.gmail.com,         // e.g., smtp.gmail.com
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true', // true for port 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        try {
            await transporter.sendMail({
                from: email, // You can also use a no-reply address here
                to: process.env.kanikasingh7482, // Your email address to receive messages
                subject: `New Contact Form Submission from ${name}`,
                text: message,
            });
            return res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        // If not a POST request, return 405
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
}
