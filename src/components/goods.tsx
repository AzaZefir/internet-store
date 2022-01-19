import React from "react";
import { IGoods } from "../types";
import GoodsItem from "./goodsItem";

const goods: IGoods[] = [{
    _id: 'wawawa',
    imagePath: 'https://object.pscloud.io/cms/cms/Photo/img_0_25_604_2_6_160.webp',
    name: 'ХОЛОДИЛЬНИК SAMSUNG RT62K7000EF/WT',
    price: 500
    },
    {
    _id: 'wawawawi',
    imagePath: 'https://object.pscloud.io/cms/cms/Photo/img_0_8_623_0_1_160.webp',
    name: 'СТИРАЛЬНАЯ МАШИНА SAMSUNG WW70J52E02WDLD',
    price: 200
    },{
    _id: 'wasa',
    imagePath: 'https://object.pscloud.io/cms/cms/Photo/img_0_24_322_6_6_160.webp',
    name: 'ПЫЛЕСОС SAMSUNG VC18M31A0HP/EV',
    price: 100
    },{
    _id: 'wasabi',
    imagePath: 'https://object.pscloud.io/cms/cms/Photo/img_0_912_66_1_1_160.webp',
    name: 'ФИТНЕС БРАСЛЕТ XIAOMI MI SMART BAND 5 (BHR4215GL/BHR4219RU)',
    price: 50
    },
]

const Goods = () => {
    return (
        <div className="mt-4">
            {goods.map(goods => (
                <GoodsItem goods={goods} key={ goods._id }/>
            ))}
        </div>
    )
}

export default Goods