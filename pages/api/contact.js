import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, projectType, mobile, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // ✅ Correct SMTP Host for Hostinger
      port: 465, // ✅ Use 465 for SSL (or 587 for TLS)
      secure: true, // ✅ true for SSL, false for STARTTLS
      auth: {
        user: "hellp@upsurgemedia.in", // ✅ Your Hostinger email
        pass: "#Matrix@007", // ✅ Your Hostinger email password
      },
    });

    const mailOptions = {
      from: email,
      to: "hellp@upsurgemedia.in", // Your receiving email
      subject: `New Contact Form Submission from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nProject Type: ${projectType}\nMobile: ${mobile}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
