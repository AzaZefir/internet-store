import React from "react";
import { IGoods } from "../types";
import CleanerItem from "..//components/goodsItem";
// import '..//components/css/goods.css'
import {} from "react-router-dom";

const cleaner: IGoods[] = [
  {
    _id: "wawvrrawa",
    dateOfReceipt: "20.10.21",
    category: "ПЫЛЕСОС",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_24_726_2_1_160.webp",
    description: "Описание",
    name: "SAMSUNG RT62K7000EF/WT",
    price: 500,
  },
  {
    _id: "wawawatttwi",
    dateOfReceipt: "3.09.21",
    category: "ПЫЛЕСОС",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_24_785_8_1_160.webp",
    description: "Описание",
    name: "SAMSUNG WW70J52E02WDLD",
    price: 200,
  },
  {
    _id: "wdfvasa",
    dateOfReceipt: "12.13.21",
    category: "ПЫЛЕСОС",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_24_696_4_160.webp",
    description: "Описание",
    name: "SAMSUNG VC18M31A0HP/EV",
    price: 100,
  },
  {
    _id: "wasabefeferie",
    dateOfReceipt: "23.12.21",
    category: "ПЫЛЕСОС",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_24_322_6_6_160.webp",
    description: "Описание",
    name: "XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "wasaebefreeir",
    dateOfReceipt: "20.10.21",
    category: "ПЫЛЕСОС",
    manufacturer: "Китай",
    imagePath: "https://object.pscloud.io/cms/cms/Photo/img_0_24_60_6_160.webp",
    description: "Описание",
    name: "ПЫЛЕСОС XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "waseeabti",
    dateOfReceipt: "20.10.21",
    category: "ПЫЛЕСОС",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_24_637_3_1_160.webp",
    description: "Описание",
    name: "ПЫЛЕСОС XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
];

const Goods = () => {
  return (
    <div className="mt-5">
      {cleaner.map((cleaner) => (
        <CleanerItem goods={cleaner} key={cleaner._id} />
      ))}
    </div>
  );
};

export default Goods;
