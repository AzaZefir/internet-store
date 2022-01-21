import React from "react";
import { IGoods } from "../types";
import WasherItem from "..//components/goodsItem";
// import '..//components/css/goods.css'
import {} from "react-router-dom";

const washer: IGoods[] = [
  {
    _id: "wavwawa",
    dateOfReceipt: "20.10.21",
    category: "СТИРАЛЬНАЯ МАШИНА",
    manufacturer: "Китай",
    imagePath: "https://object.pscloud.io/cms/cms/Photo/img_0_8_566_0_160.webp",
    description: "Описание",
    name: "SAMSUNG RT62K7000EF/WT",
    price: 500,
  },
  {
    _id: "wawaweawi",
    dateOfReceipt: "3.09.21",
    category: "СТИРАЛЬНАЯ МАШИНА",
    manufacturer: "Китай",
    imagePath: "https://object.pscloud.io/cms/cms/Photo/img_0_8_825_0_160.webp",
    description: "Описание",
    name: "SAMSUNG WW70J52E02WDLD",
    price: 200,
  },
  {
    _id: "waswa",
    dateOfReceipt: "12.13.21",
    category: "СТИРАЛЬНАЯ МАШИНА",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_8_944_1_1_160.webp",
    description: "Описание",
    name: "SAMSUNG VC18M31A0HP/EV",
    price: 100,
  },
  {
    _id: "waesabie",
    dateOfReceipt: "23.12.21",
    category: "СТИРАЛЬНАЯ МАШИНА",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_8_494_12_160.webp",
    description: "Описание",
    name: "XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "wasaebir",
    dateOfReceipt: "20.10.21",
    category: "СТИРАЛЬНАЯ МАШИНА",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_8_865_1_1_160.webp",
    description: "Описание",
    name: "СТИРАЛЬНАЯ МАШИНА XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
    price: 50,
  },
  {
    _id: "wasvabti",
    dateOfReceipt: "20.10.21",
    category: "СТИРАЛЬНАЯ МАШИНА",
    manufacturer: "Китай",
    imagePath: "https://object.pscloud.io/cms/cms/Photo/img_0_8_789_1_160.webp",
    description: "Описание",
    name: "СТИРАЛЬНАЯ МАШИНА XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)",
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
