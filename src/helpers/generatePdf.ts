import puppeteer from "puppeteer";
import moment from "moment";
var fs = require("fs");

export async function generatePdf(params: any) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const imagePath = params?.image || "";
  // var imageAsBase64 = fs.readFileSync(imagePath, "base64");
  console.log(params);

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
    <Image src='data:image/png;base64,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' height="106px" width="361px" style="margin-top: 45px; margin-left: 20px;">
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
  <div style="width: 33.3%;">
    <label style="color: #82889B;font-size: 16px;font-weight: 400;line-height: normal;padding-top: 10px;padding-bottom: 5px;">Prepared For</label>
    <p style="color: black;font-size: 18px;font-weight: 500;line-height: normal;font-style: normal;">${
      params?.contact?.Fname + " " + params?.contact?.Lname
    }</p>
  </div>
  <div style="width: 33.3%;">
    <label style="color: #82889B;font-size: 16px;font-weight: 400;line-height: normal;padding-top: 10px;padding-bottom: 5px;">Reference Id</label>
    <p style="color: black;font-size: 18px;font-weight: 500;line-height: normal;font-style: normal;">${
      params?.ref || "N/A"
    }</p>
  </div>
  <div style="width: 33.3%;">
    <label style="color: #82889B;font-size: 16px;font-weight: 400;line-height: normal;padding-top: 10px;padding-bottom: 5px;">Prepared</label>
    <p style="color: black;font-size: 18px;font-weight: 500;line-height: normal;font-style: normal;">${moment(
      new Date()
    ).format("MMMM Do YYYY")}</p>
  </div>
</div>

  <div style="width: 100%; ">
    <p style="color:black;font-size:20;font-weight: 500;">Patient Details</p>
</div>
<div style="width: 100%;display: flex;border: 1px solid black;">
  <div style="width: 50%;">
    <p style="color:#82889B;font-size:16;font-weight: 400;padding: 3px 10px;">Patient Name</p>
  </div>
  <div style="width: 50%;">
    <p style="color:#020202;font-size:16;font-weight: 400;text-align: right;padding: 3px 10px;">${
      params?.contact?.Fname + " " + params?.contact?.Lname
    }</p>
  </div>
  </div>

  
<div style="width: 100%;display: flex;border: 1px solid black;border-top: none;">
  <div style="width: 50%;">
    <p style="color:#82889B;font-size:16;font-weight: 400;padding: 3px 10px;">Patient Plan</p>
  </div>
  <div style="width: 50%;">
    <p style="color:#020202;font-size:16;font-weight: 400;text-align: right;padding: 3px 10px;">${
      params?.insurance?.insured || "N/A"
    }</p>
  </div>
</div>

<div style="width: 100%;display: flex;border: 1px solid black;border-top: none;">
  <div style="width: 50%;">
    <p style="color:#82889B;font-size:16;font-weight: 400;padding: 3px 10px;">Patient Phone Number</p>
  </div>
  <div style="width: 50%;">
    <p style="color:#020202;font-size:16;font-weight: 400;text-align: right;padding: 3px 10px;">${
      params?.contact?.phone || "N/A"
    }</p>
  </div>
</div>

<div style="width: 100%;display: flex;border: 1px solid black;border-top: none;">
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
<div style="width: 100%;display: flex;border: 1px solid black;">
<div style="width: 50%;">
  <p style="color:#82889B;font-size:16;font-weight: 400;padding: 5px 10px;">Service</p>
</div>
<div style="width: 50%;">
  <p style="color:#020202;font-size:16;font-weight: 400;text-align: right;padding: 5px 10px;">${
    params?.service?.value["Service Description"]
  }</p>
</div>
</div>

<div style="width: 100%;display: flex;border: 1px solid black;border-top: none;">
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
