import { generatePdf } from "../../helpers/generatePdf";

export default async (req: any, res: any) => {
  req.image = req.headers.origin + "/covina.png";
  const pdfBuffer = await generatePdf(req.body);
  res.setHeader("Content-Type", "application/pdf");
  res.send(pdfBuffer);
};
