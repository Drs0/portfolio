import nodemailer from 'nodemailer';

export default async (req: any, res: any) => {
    if (req.method === 'POST') {
        try {
            const { recipient, subject, message } = req.body;

            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.MY_EMAIL,
                    pass: process.env.MY_PASSWORD,
                },
            });

            const mailOptions = {
                from: process.env.MY_EMAIL,
                to: recipient,
                subject: subject,
                text: message,
            };

            const info = await transporter.sendMail(mailOptions);

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Email error:', error);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
