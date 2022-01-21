import React from "react";
import { IGoods } from "../types";
import GoodsItem from "./goodsItem";
import {} from "react-router-dom";

import { sortBy } from "sort-by-typescript";

const goods: IGoods[] = [
  {
    _id: "wawaefwa",
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
    _id: "wawefawawi",
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
    _id: "wefreasa",
    dateOfReceipt: "12.02.21",
    category: "ПЫЛЕСОС",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_24_322_6_6_160.webp",
    description: "Описание",
    name: "SAMSUNG VC18M31A0HP/EV",
    price: 100,
  },
  {
    _id: "waserferfeabie",
    dateOfReceipt: "23.01.21",
    category: "РОБОТ-ПЫЛЕСОС",
    manufacturer: "Китай",
    imagePath:
      "https://object.pscloud.io/cms/cms/Photo/img_0_24_696_4_160.webp",
    description: "Описание",
    name: "XIAOMI MI ROBOT",
    price: 50,
  },
  {
    _id: "wefasefabir",
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
goods.sort(sortBy("dateOfReceipt"));


const Goods = () => {
  return (
    <div className="divdiv">
      <h1>Новинки</h1>
      {/* <button className="btnSort1" >сортировать по цене</button>
      <button className="btnSort2">сортировать по дате</button> */}
      {goods.map((goods) => (
        <GoodsItem goods={goods} key={goods._id} />
      ))}
    </div>
  );
};



export default Goods;
