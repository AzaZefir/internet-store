import { IGoods } from "../../types";
import { actionTypes } from "./types";

export const addToCart = (goods: IGoods, count: number) => ({
    type: actionTypes.CART_ADD_ITEM,
    payload: {goods,count},
})

export const removeFromCart = (goodsId: string) => ({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: goodsId,
})