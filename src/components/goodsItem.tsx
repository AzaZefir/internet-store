import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/action";
import { IGoods } from "../types";
import Quantity from "./quantity";
import "..//components/css/goodsitems.css";

interface IGoodsItem {
  goods: IGoods;
}

const GoodsItem: FC<IGoodsItem> = ({ goods }) => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(addToCart(goods, count));
  };

  return (
    <div className="goodsdiv">
      <img src={goods.imagePath} alt={goods.category} />
      <div className="name">{goods.name}</div>
      <div className="name">Дата поступления - {goods.dateOfReceipt}</div>
      <div className="name">Производитель - {goods.manufacturer}</div>
      <div className="name">
        <div className="btn-group">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Описание
            </button>
            <div className="dropdown-menu p-4 text-muted">
              <p>
                Очистка барабана Eco - упрощает уход за стиральной машиной с
                фронтальной загрузкой и содержит ее в чистоте без использования
                едких химических соединений. Технология Eco Bubble™ - превращает
                стиральный порошок в активную пену. Отстирывание даже при низких
                температурах. Моющее средство превращается в пузырьки, что
                позволяет ему быстро проникнуть в ткань и легко удалить
                загрязнения, при этом защищая ткань и экономя энергию. Digital
                Inverter Motor - Инвертированный двигатель обеспечивает
                невероятно высокую энергоэффективность, минимальный уровень шума
                и длительный срок эксплуатации стиральной машины.
              </p>
            </div>
          </div>
        </div>
        <div className="text">{goods.price} сом</div>
        <Quantity count={count} setCount={setCount} />
        <button onClick={addHandler} className="btn">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default GoodsItem;
