import React from "react";
import { IGoods } from "../types";
import TvItem from "..//components/goodsItem";
// import '..//components/css/goods.css'
import {} from "react-router-dom";

const tv: IGoods[] = [
  {
    _id: "wawawga",
    dateOfReceipt: "20.10.21",
    category: "Tv",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_95_1687_0_160.webp",
    description: "Описание",
    name: "SAMSUNG RT62K7000EF/WT",
    price: 500,
  },
  {
    _id: "wawagwawi",
    dateOfReceipt: "3.09.21",
    category: "Tv",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_95_2028_11_1_160.webp",
    description: "Описание",
    name: "SAMSUNG WW70J52E02WDLD",
    price: 200,
  },
  {
    _id: "wafsa",
    dateOfReceipt: "12.13.21",
    category: "Tv",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_95_1716_0_1_160.webp",
    description: "Описание",
    name: "SAMSUNG VC18M31A0HP/EV",
    price: 100,
  },
  {
    _id: "wasabeie",
    dateOfReceipt: "23.12.21",
    category: "Tv",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_95_2036_0_6_160.webp",
    description: "Описание",
    name: "XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "wasaebir",
    dateOfReceipt: "20.10.21",
    category: "ХОЛОДИЛЬНИК",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_95_1767_0_160.webp",
    description: "Описание",
    name: "Tv XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
];

const Goods = () => {
  return (
    <div className="mt-5">
      {tv.map((tv) => (
        <TvItem goods={tv} key={tv._id} />
      ))}
    </div>
  );
};

export default Goods;
