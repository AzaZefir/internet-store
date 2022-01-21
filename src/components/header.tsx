import React, { FC, useState } from "react";
import cn from "classnames";
import "..//components/css/header.css";

import { NavLink } from "react-router-dom";

import logo from "./../img/shopping-world-online-ecommerce-svgrepo-com.svg";
import logoBtn from "./../img/add-to-cart-trolley-shopping-svgrepo-com.svg";

import { useTypedSelector } from "../hook/useTypedSelector";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cart/action";

const Header: FC = () => {
  const [isShowCard, setIsShowCard] = useState(false);
  const cart = useTypedSelector((state) => state.cart);
  const total = cart.reduce(
    (acc, item) => acc + item.price || item.count * item.price,
    0
  );

  const dispatch = useDispatch();

  const removeHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="header">
      <img src={logo} alt="" width="50" />

      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Главная
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Tv" className="nav-link">
                Телевизоры
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Freeze" className="nav-link">
                Холодильники
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Washer" className="nav-link">
                Стиральные машины
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Cleaner" className="nav-link">
                Пылесосы
              </NavLink>
            </li>
          </ul>
        </header>
      </div>

      <button className="btn" onClick={() => setIsShowCard(!isShowCard)}>
        <img src={logoBtn} alt="" />
        <div className="btntext">{cart.length}</div>
      </button>

      <div
        className={cn("bg-white absolute top-20 right-2 p-5 shadow-md", {
          hidden: !isShowCard,
        })}
      >
        {cart.map((item) => (
          <div className="cardname" key={`${item.name}`}>
            <img src={item.imagePath} alt={item.name} />
            <div>
              <div>{item.name}</div>
              <div>{`${item.count} x ${item.price.toLocaleString()} сом`}</div>
              <button
                className="btnremove"
                onClick={() => removeHandler(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        <div className="total">
          Total: <b>{total.toLocaleString()} сом</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
