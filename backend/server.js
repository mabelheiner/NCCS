const express = require('express');
const nodemailer = require('nodemailer');

require('dotenv').config();

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173' 
}));
app.options('*', cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
});

/* const mailOptions = {
    from: 'mabelsmagicalstitches@gmail.com',
    to: 'mabelheiner5@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email using Nodemailer'
} 

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('An error occurred:', error);
    } else {
        console.log('Email send successfully:', info.response);
    }
}) */

app.post('/api/contact', async (req, res) => {
    const {name, email, subject, message} = req.body;

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.NODEMAILER_USER,
            subject: `Contact Form Submission: ${subject}`,
            text: `You have a new contact form submission:
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}`,
            replyTo: email,
        });
        
        res.status(200).send({ message: 'Email sent successfully!'});
    } catch (error) {
        console.error("Error sending email: ", error)
        res.status(500).send({ error: 'Failed to send email.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})