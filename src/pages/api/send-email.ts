// pages/api/send-email.js
import nodemailer from "nodemailer";
import { generatePdf } from "../../helpers/generatePdf";

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;

export default async (req, res) => {
  const pdfBuffer = await generatePdf(req.body);
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: email,
      pass: password,
    },
  });
  console.log(req.body.contact.email);

  const mailOptions = {
    from: email,
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
