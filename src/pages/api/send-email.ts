import { generatePdf, generateContent,generateBodyContent } from "../../helpers/generatePdf";

import formData from "form-data";
import Mailgun from "mailgun.js";

export default async (req: any, res: any) => {
  const pdfBuffer = await generatePdf(req.body);
  const contentBuffer = await generateBodyContent(req);
  const file = {
    filename: "WCMC" + new Date().getTime() + ".pdf",
    data: pdfBuffer,
  };
  const attachment = [file];

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({
    username: process.env.MAIL_GUN_USERNAME || "",
    key: process.env.MAIL_GUN_API || "",
  });

  const messageData = {
    from: process.env.MAIL_GUN_FROM || "",
    to: req.body.contact.email,
    subject: "Estimated Pricing Information for the chosen Service ",
    html: contentBuffer,
    attachment,
  };
  client.messages
    .create(process.env.MAIL_GUN_DOMAIN || "", messageData)
    .then((response) => {
      console.log("Email sent: " + res);
      res.status(200).send(response);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Email not sent");
    });
};
