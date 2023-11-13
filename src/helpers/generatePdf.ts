import puppeteer from "puppeteer";
import moment from "moment";
import { readPublicLogo  } from "../utils/imageRead";

export function generateBodyContent( params:any ){
  return `
  <html>
<head>
    <style>
        @media print {
            body {
                -webkit-print-color-adjust: exact;
            }
        }
    </style>
</head>

<body style="font-family: poppins,sans-serif;margin:0;">
    <div style="width:100%;">
        <div style="padding: 10px 10px;">
            <div style="width: 100%;">
                <p style="color: #000000;font-size: 14px;font-weight: 500;">Dear Patient,</p>
            </div>

            <div style="width:98%; margin-top:2px; line-height: normal;">
                <p style="font-size: 14px;font-weight: 400; color:#000000">
                    Thank you for requesting a price estimation from West Covina Medical Center.
                    This email contains pertinent patient information and an estimate of relevant
                    costs associated with West Covina Medical Center medical services. The estimated
                    cost of the chosen medical service is attached to this email.
                </p>
                <p style="font-size: 14px;font-weight: 400; color:#000000">
                    It is important to carefully review and understand that the estimate is not a definitive quote or
                    guarantee of the final amount owed by the patient. Based on the information provided by the patient,
                    it represents our best estimate at the current time and is subject to change if the patient's
                    medical
                    condition or insurance coverage changes. Patients are advised to contact their health insurance
                    company to ascertain their coverage benefits and obtain an estimate of their potential financial
                    responsibility for their visit
                </p>
            </div>
            <p style="color: #000000;font-size: 14px;font-weight: 500;">Thank you!</p>
            <p style="color: #000000;font-size: 14px;font-weight: 500;">Administration of the West Covina Medical
                Center.</p>
        </div>
        <table>
            <tbody>
                <table cellspacing="0" cellpadding="0">
                    <tbody
                        style="vertical-align:-webkit-baseline-middle; font-size:medium; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; letter-spacing: -0.1px;">
                        <tr>
                            <td>
                                <img style="width: 260px; max-width: 260px; height: 85px; max-height: 85px;" alt="Logo" src="https://price-est.elifeamerica.com/image1.png" align="center" width="180" height="85" alt="">
                            </td>
                            <td style="padding-left: 38px;">
                                <table cellspacing="10" style="vertical-align: middle;">
                                    <tbody style="font-size: 16px;">
                                        <tr>
                                            <td><img src="https://price-est.elifeamerica.com/address.svg"
                                                    alt="icon"></td>
                                            <td style="padding-bottom: 4px; padding-left: 10px;">725 S, Orange Av, West
                                                Covina, CA 91790</td>
                                        </tr>
                                        <tr>
                                            <td><img src="https://price-est.elifeamerica.com/phone.svg"
                                                    alt="icon"></td>
                                            <td style="padding-bottom: 4px; padding-left: 10px;"><a style="color: #000;"
                                                    href="tel:+16263388481">626-338-8481</a></td>
                                        </tr>
                                        <tr>
                                            <td><img src="https://price-est.elifeamerica.com/email.svg"
                                                    alt="icon"></td>
                                            <td style="padding-bottom: 4px; padding-left: 10px;"><a style="color: #000;"
                                                    href="mailto:administration@westcovinamc.com">administration@westcovinamc.com</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table style="margin-top: 20px;" cellspacing="0" cellpadding="0">
                    <tbody
                        style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                        <tr>
                            <td
                                style="width:378px;  border-radius:14px 0 0 14px; overflow: hidden; background-color: #C9FFE2; vertical-align: middle; padding-left:20px;">
                                <p style="font-weight: 500; font-size: 22px;">The Most Trusted Healthcare For <br> You &
                                    Your Family</p>
                                <a style="background-color: #000; font-size: 14px; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 100px;"
                                    href="https://westcovinamc.com/index.html" target="_blank">Visit our website</a>
                            </td>
                            <td
                                style="width:260px; height: 168px;border-radius:0 14px 14px 0; overflow: hidden;  background-image: url('https://github.com/Ragavarman/signaturewcmc/blob/main/hospital.png?raw=true'); background-size: 265px 168px; background-position: right;">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </tbody>
        </table>
</body>
</html> `;
}

export function generateContent( params:any ){
  const imageBuffer = readPublicLogo();
  return  `
  <html>
  <head>
    <style>
      .banner{
        width:100%;;height: 170px;display: flex;
        border-bottom: 1px solid  #CEDCF6;
      }
      @media print {
   body {
      -webkit-print-color-adjust: exact;
   }
}
    </style>
  </head>
  <body style="font-family: poppins,sans-serif;margin:0;">
 <div style="width:100%;">

 <div class="banner">

  <div style="width: 60%;height: inherit;">
  <Image src=${imageBuffer} height="106px" width="361px" style="margin-top: 40px; margin-left: 20px;">

  </div>
  <div style="width: 40%;height: inherit;color: #000;font-size: 15px;font-weight: 500; padding-top:30px ;text-align:left;padding-right:20px">
    <p>725 S, Orange Av, West Covina, CA 91790</p>
    <p>626-338-8481</p>
    <p>administration@westcovinamc.com</p>
  </div>

</div>
<div style="padding: 10px 30px;">
<div style="width: 100%;">
  <p style="color: #008D78;font-size: 42px;font-weight: 500;">Price Estimation</p>
</div>
<div style="width: 100%;display: flex;">
  <div style="width: 40%;">
    <label style="color: #82889B;font-size: 15px;font-weight: 400;line-height: normal;padding-top: 10px;padding-bottom: 5px;">Prepared For</label>
    <p style="color: black;font-size: 18px;font-weight: 500;line-height: normal;font-style: normal;">${
      params?.contact?.Fname + " " + params?.contact?.Lname
    }</p>
  </div>
  <div style="width: 40%;">
    <label style="color: #82889B;font-size: 15px;font-weight: 400;line-height: normal;padding-top: 10px;padding-bottom: 5px;">Reference Id</label>
    <p style="color: black;font-size: 18px;font-weight: 500;line-height: normal;font-style: normal;">${
      params?.ref || "N/A"
    }</p>
  </div>
  <div style="width:25%;">
    <label style="color: #82889B;font-size: 15px;font-weight: 400;line-height: normal;padding-top: 10px;padding-bottom: 5px;">Prepared</label>
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
<div style="width: 30%;">
  <p style="color:#82889B;font-size:16;font-weight: 400;padding: 5px 10px;">Service</p>
</div>
<div style="width: 70%;">
  <p style="color:#020202;font-size:16;font-weight: 400;text-align: right;padding: 5px 10px;">${
    params?.service?.value["Service Description"]
  }</p>
</div>
</div>

<div style="width: 100%;display: flex;border: 1px solid #CEDCF6;border-top: none;">
<div style="width: 50%;">
  <p style="color:#82889B;font-size:16;font-weight: 400;padding: 5px 10px;margin-top: 40px;">Total Estimated Patient Responsibility</p>
</div>
<div style="width: 50%;">
  <p style="color:#020202;font-size:32px;font-weight: 400;text-align: right;padding: 5px 10px">${
    params?.service?.value?.Price
  }</p>
</div>
</div>
</div>
<div style="width:98%; margin-top:2px; background-color:#008D78;padding:15px;line-height: normal;">
  <p style="font-size: 14px;font-weight: 400; color:#FFF"><span style="color:#FFF;font-weight: 600;">Disclaimer : </span> Please read carefully and understand that the estimate provided is not a quote or guarantee for the final amount you will owe. It is only our best estimate at this time given the information you provided, which is subject to change if your medical condition or insurance coverage changes. You may want to contact your health insurance company to determine your health coverage benefits and to get an estimate of what you may owe for your visit.</p>
</div>
</div>
  </body>
</html>
  
  `;
}


export async function generatePdf(params: any) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--enable-gpu", "--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 595, // A4 width in pixels (8.27 inches)
    height: 842, // A4 height in pixels (11.69 inches)
    deviceScaleFactor: 1,
  });
  // const imageBuffer = readPublicLogo();
  const customContent = generateContent( params );

  await page.setContent(customContent);

  const pdfBuffer = await page.pdf({ format: "A4" });

  await browser.close();

  return pdfBuffer;
}
