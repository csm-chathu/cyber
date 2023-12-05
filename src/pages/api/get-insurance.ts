import { INSURANCELIST } from "../../mock-data/insurance";

export default async (req: any, res: any) => {
  

  let conObj: any = [];
  let serviceCategory: any = [];
  let getService = INSURANCELIST.map((item, i) => {
    conObj.push({
      label: `(${item["Payer"]}(${item["Procedure"]})) ${item["DESCR"]}`,
      value: item,
      code: item["Procedure"],
      id: i,
    });
    serviceCategory.push({
      label: item["Payer"],
      value: item["Payer"],
      id: i,
    });
  });

  const unique = serviceCategory.filter((obj: any, index: any) => {
    return (
      index === serviceCategory.findIndex((o: any) => obj.label === o.label)
    );
  });

  res.status(200).json({ option: conObj, category: unique,all:INSURANCELIST });

  // let conObj: any = [];
  // let serviceCategory: any = [];
  // // let getService = INSURANCELIST.filter((item, i) => item.Procedure == req.body.serviceCode);
  // // res.status(200).json({ option: getService});

  // const uniqueNames:any = [];
  // INSURANCELIST.forEach((item) => {
  //   if (uniqueNames.map((u:any) => u['Payer']).indexOf(item['Payer']) === -1) {
  //     uniqueNames.push(item);
  //   }
  // });

  // res.status(200).json({ option: INSURANCELIST, category: uniqueNames });
};
