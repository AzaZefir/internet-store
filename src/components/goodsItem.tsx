import React, {FC, useState} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/action";
import { IGoods } from "../types";
import Quantity from "./quantity";
import '..//components/css/goodsitems.css'

interface IGoodsItem {
    goods: IGoods
}


const GoodsItem: FC<IGoodsItem> = ({goods}) => {
    const [count, setCount] = useState(0)
    
    const dispatch = useDispatch()

    const addHandler = () => {
        dispatch(addToCart(goods, count))
        
    }
    
    return (
        <div className="goodsdiv">
            <img src={goods.imagePath} alt={goods.name} />
            <div className="name">{goods.name}</div>
            <div className="text">${goods.price}</div>
            <Quantity count={count} setCount={setCount} />
            <button onClick={addHandler} className="btn">В корзину</button>
        </div>
    )
}

export default GoodsItem