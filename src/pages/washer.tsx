import React from "react";
import { IGoods } from "../types";
import WasherItem from "..//components/goodsItem";
// import '..//components/css/goods.css'
import {} from "react-router-dom";

const washer: IGoods[] = [
  {
    _id: "wawawa",
    dateOfReceipt: "20.10.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_25_604_2_6_160.webp",
    description: "Описание",
    name: "SAMSUNG RT62K7000EF/WT",
    price: 500,
  },
  {
    _id: "wawawawi",
    dateOfReceipt: "3.09.21",
    category: "СТИРАЛЬНАЯ МАШИНА",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_8_623_0_1_160.webp",
    description: "Описание",
    name: "SAMSUNG WW70J52E02WDLD",
    price: 200,
  },
  {
    _id: "wasa",
    dateOfReceipt: "12.13.21",
    category: "ПЫЛЕСОС",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_24_322_6_6_160.webp",
    description: "Описание",
    name: "SAMSUNG VC18M31A0HP/EV",
    price: 100,
  },
  {
    _id: "wasabie",
    dateOfReceipt: "23.12.21",
    category: "ФИТНЕС БРАСЛЕТ",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_912_66_1_1_160.webp",
    description: "Описание",
    name: "XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "wasabir",
    dateOfReceipt: "20.10.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_912_66_1_1_160.webp",
    description: "Описание",
    name: "ФИТНЕС БРАСЛЕТ XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "wasabti",
    dateOfReceipt: "20.10.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_912_66_1_1_160.webp",
    description: "Описание",
    name: "ФИТНЕС БРАСЛЕТ XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "wasawbi",
    dateOfReceipt: "20.10.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_912_66_1_1_160.webp",
    description: "Описание",
    name: "ФИТНЕС БРАСЛЕТ XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "wasaqbi",
    dateOfReceipt: "20.10.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_912_66_1_1_160.webp",
    description: "Описание",
    name: "ФИТНЕС БРАСЛЕТ XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "wawsabti",
    dateOfReceipt: "20.10.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_912_66_1_1_160.webp",
    description: "Описание",
    name: "ФИТНЕС БРАСЛЕТ XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "wasqabi",
    dateOfReceipt: "20.10.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_912_66_1_1_160.webp",
    description: "Описание",
    name: "ФИТНЕС БРАСЛЕТ XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "watsabi",
    dateOfReceipt: "20.10.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_912_66_1_1_160.webp",
    description: "Описание",
    name: "ФИТНЕС БРАСЛЕТ XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
];

const Goods = () => {
  return (
    <div className="mt-5">
      {washer.map((washer) => (
        <WasherItem goods={washer} key={washer._id} />
      ))}
    </div>
  );
};

export default Goods;
