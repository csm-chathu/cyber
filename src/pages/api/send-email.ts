// pages/api/send-email.js
import nodemailer from "nodemailer";
import { generatePdf } from "../../helpers/generatePdf";

export default async (req: any, res: any) => {
  const pdfBuffer = await generatePdf(req.body);
  var transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 2525,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // pool: true,
    // logger: true,
    // debug: true,
    // secure: false,
    // tls: { rejectUnauthorized: false },
    // connectionTimeout: 5000,
  });

  console.log(req.body.contact.email);

  const mailOptions = {
    from: process.env.EMAIL,
    to: req.body.contact.email,
    subject: "WCMC",
    text: "Please find the PDF attached.",
    attachments: [
      {
        filename: "WCMC" + new Date().getTime() + ".pdf",
        content: pdfBuffer,
      },
    ],
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Email not sent");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent");
    }
  });
};
