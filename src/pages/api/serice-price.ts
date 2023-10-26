import * as service from "../../mock-data/service.json";
import * as price from "../../mock-data/price.json";

export default async (req, res) => {
  let conObj: any = [];
  let serviceCategory: any = [];
  price.map((item, i) => {
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

  const unique = serviceCategory.filter((obj, index) => {
    return index === serviceCategory.findIndex((o) => obj.label === o.label);
  });

  res.status(200).json({ option: conObj, category: unique });
};
