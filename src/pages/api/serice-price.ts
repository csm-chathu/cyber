import { PRICELIST } from "../../mock-data/price";

export default async (req: any, res: any) => {
  let conObj: any = [];
  let serviceCategory: any = [];
  let getService = PRICELIST.map((item, i) => {
    conObj.push({
      label: `(${item["Service Code"]}) ${item["Service Description"]}`,
      value: item,
      code: item["Service Code"],
      id: i,
    });
    serviceCategory.push({
      label: item["Service Category"],
      value: item["Service Category"],
      id: i,
    });
  });

  const unique = serviceCategory.filter((obj: any, index: any) => {
    return (
      index === serviceCategory.findIndex((o: any) => obj.label === o.label)
    );
  });

  res.status(200).json({ option: conObj, category: unique });
};
