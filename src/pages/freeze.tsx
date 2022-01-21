import React from "react";
import { IGoods } from "../types";
import FreezeItem from "..//components/goodsItem";
import {} from "react-router-dom";

const freeze: IGoods[] = [
  {
    _id: "wawcfawa",
    dateOfReceipt: "20.10.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_25_693_0_160.webp",
    description: "Описание",
    name: "SAMSUNG RT62K7000EF/WT",
    price: 500,
  },
  {
    _id: "wawawrvawi",
    dateOfReceipt: "3.09.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_25_970_0_6_160.webp",
    description: "Описание",
    name: "SAMSUNG WW70J52E02WDLD",
    price: 200,
  },
  {
    _id: "wavrrbsa",
    dateOfReceipt: "12.13.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_25_987_2_6_160.webp",
    description: "Описание",
    name: "SAMSUNG VC18M31A0HP/EV",
    price: 100,
  },
  {
    _id: "wasbrabie",
    dateOfReceipt: "23.12.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_25_991_1_6_160.webp",
    description: "Описание",
    name: "XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "wasagvbir",
    dateOfReceipt: "20.10.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_25_602_4_6_160.webp",
    description: "Описание",
    name: "ФИТНЕС БРАСЛЕТ XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "wasaevbti",
    dateOfReceipt: "20.10.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_25_581_0_160.webp",
    description: "Описание",
    name: "ФИТНЕС БРАСЛЕТ XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "waseaxewbi",
    dateOfReceipt: "20.10.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_25_1186_3_1_160.webp",
    description: "Описание",
    name: "ФИТНЕС БРАСЛЕТ XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
];

const Goods = () => {
  return (
    <div className="mt-5">
      {freeze.map((freeze) => (
        <FreezeItem goods={freeze} key={freeze._id} />
      ))}
    </div>
  );
};

export default Goods;
