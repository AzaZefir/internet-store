import React, {FC, useState} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/action";
import { IGoods } from "../types";
import Quantity from "./quantity";

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
        <div className="shadow-sm rounded-md p-5 w-80 mx-auto mb-5 bg-white flex justify-center flex-col text-center item-center">
            <img src={goods.imagePath} alt={goods.name} />
            <div className="text-lg font-bold my-3">{goods.name}</div>
            <div className="text-sm text-gray-500">${goods.price}</div>
            <Quantity count={count} setCount={setCount} />
            <button onClick={addHandler} className="bg-orange-500 font-semibold text-white rounded-sm px-1 py-3 ">В корзину</button>
        </div>
    )
}

export default GoodsItem