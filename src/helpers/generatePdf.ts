import puppeteer from "puppeteer";
import moment from "moment";
import { readPublicLogo } from "../utils/imageRead";

export async function generatePdf(params: any) {
  const browser = await puppeteer.launch({
  headless: true,
  args: ['--enable-gpu', '--no-sandbox', '--disable-setuid-sandbox'],
});
  const page = await browser.newPage();
  const imageBuffer = readPublicLogo();
  const customContent = `
  <html>
  <head>
    <style>
      .banner{
        width:100%;background-color:#22C55E ;height: 170px;display: flex;
      }
      @media print {
   body {
      -webkit-print-color-adjust: exact;
   }
}
    </style>
  </head>
  <body style="font-family: poppins,sans-serif;">
 <div style="width:100%;">

 <div class="banner">

  <div style="width: 60%;height: inherit;">
  <Image src=${imageBuffer} height="106px" width="361px" style="margin-top: 45px; margin-left: 20px;">

  </div>
  <div style="width: 40%;height: inherit;color: white;font-size: 16px;font-weight: 500; padding-top:30px ;">
    <p>725 S, Orange Av, West Covina, CA 91790</p>
    <p>626-338-8481</p>
    <p>administration@westcovinamc.com</p>
  </div>

</div>
<div style="padding: 10px 30px;">
<div style="width: 100%;">
  <p style="color: #22C55E;font-size: 35px;font-weight: 500;">Price Estimation</p>
</div>
<div style="width: 100%;display: flex;">
  <div style="width: 40%;">
    <label style="color: #82889B;font-size: 16px;font-weight: 400;line-height: normal;padding-top: 10px;padding-bottom: 5px;">Prepared For</label>
    <p style="color: black;font-size: 18px;font-weight: 500;line-height: normal;font-style: normal;">${
      params?.contact?.Fname + " " + params?.contact?.Lname
    }</p>
  </div>
  <div style="width: 40%;">
    <label style="color: #82889B;font-size: 16px;font-weight: 400;line-height: normal;padding-top: 10px;padding-bottom: 5px;">Reference Id</label>
    <p style="color: black;font-size: 18px;font-weight: 500;line-height: normal;font-style: normal;">${
      params?.ref || "N/A"
    }</p>
  </div>
  <div style="width:25%;">
    <label style="color: #82889B;font-size: 16px;font-weight: 400;line-height: normal;padding-top: 10px;padding-bottom: 5px;">Prepared</label>
    <p style="color: black;font-size: 18px;font-weight: 500;line-height: normal;font-style: normal;">${moment(
      new Date()
    ).format("MMMM Do YYYY")}</p>
  </div>
</div>

  <div style="width: 100%; ">
    <p style="color:black;font-size:20;font-weight: 500;">Patient Details</p>
</div>
<div style="width: 100%;display: flex;border: 1px solid #CEDCF6;">
  <div style="width: 50%;">
    <p style="color:#82889B;font-size:16;font-weight: 400;padding: 3px 10px;">Patient Name</p>
  </div>
  <div style="width: 50%;">
    <p style="color:#020202;font-size:16;font-weight: 400;text-align: right;padding: 3px 10px;">${
      params?.contact?.Fname + " " + params?.contact?.Lname
    }</p>
  </div>
  </div>

  
<div style="width: 100%;display: flex;border: 1px solid #CEDCF6;border-top: none;">
  <div style="width: 50%;">
    <p style="color:#82889B;font-size:16;font-weight: 400;padding: 3px 10px;">Patient Plan</p>
  </div>
  <div style="width: 50%;">
    <p style="color:#020202;font-size:16;font-weight: 400;text-align: right;padding: 3px 10px;">${
      params?.insurance?.insured || "N/A"
    }</p>
  </div>
</div>

<div style="width: 100%;display: flex;border: 1px solid #CEDCF6;border-top: none;">
  <div style="width: 50%;">
    <p style="color:#82889B;font-size:16;font-weight: 400;padding: 3px 10px;">Patient Phone Number</p>
  </div>
  <div style="width: 50%;">
    <p style="color:#020202;font-size:16;font-weight: 400;text-align: right;padding: 3px 10px;">${
      params?.contact?.phone || "N/A"
    }</p>
  </div>
</div>

<div style="width: 100%;display: flex;border: 1px solid #CEDCF6;border-top: none;">
  <div style="width: 50%;">
    <p style="color:#82889B;font-size:16;font-weight: 400;padding: 3px 10px;">Patient Address</p>
  </div>
  <div style="width: 50%;">
    <p style="color:#020202;font-size:16;font-weight: 400;text-align: right;padding: 3px 10px;">${
      params?.contact?.address1 +
      "," +
      params?.contact?.address2 +
      "," +
      params?.contact?.city
    }</p>
  </div>
</div>

<div style="width: 100%;margin-top: 42px; ">
  <p style="color:black;font-size:20;font-weight: 500;">Estimate Details</p>
</div>
<div style="width: 100%;display: flex;border: 1px solid #CEDCF6;">
<div style="width: 50%;">
  <p style="color:#82889B;font-size:16;font-weight: 400;padding: 5px 10px;">Service</p>
</div>
<div style="width: 50%;">
  <p style="color:#020202;font-size:16;font-weight: 400;text-align: right;padding: 5px 10px;">${
    params?.service?.value["Service Description"]
  }</p>
</div>
</div>

<div style="width: 100%;display: flex;border: 1px solid #CEDCF6;border-top: none;">
<div style="width: 50%;">
  <p style="color:#82889B;font-size:16;font-weight: 400;padding: 5px 10px;margin-top: 25px;">Total Estimated Patient Responsibility</p>
</div>
<div style="width: 50%;">
  <p style="color:#020202;font-size:25px;font-weight: 400;text-align: right;padding: 5px 10px">${
    params?.service?.value?.Price
  }</p>
</div>
</div>
<div style="width: 100%; margin-top: 20px; ">
  <p style="font-size: 14px;font-weight: 400;color: #82889B"><span style="color: #020202;">Disclaimer : </span> Please read carefully and understand that the estimate provided is not a quote or guarantee for the final amount you will owe. It is only our best estimate at this time given the information you provided, which is subject to change if your medical condition or insurance coverage changes. You may want to contact your health insurance company to determine your health coverage benefits and to get an estimate of what you may owe for your visit.</p>
</div>
</div>
</div>
  </body>
</html>
  
  `;

  await page.setContent(customContent);

  const pdfBuffer = await page.pdf();

  await browser.close();

  return pdfBuffer;
}
