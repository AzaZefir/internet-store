import { IGoods } from "../../types";

export enum actionTypes {
    CART_QTY_ITEM = 'CART_QTY_ITEM',
    CART_ADD_ITEM = 'CART_ADD_ITEM',
    CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
}


interface ICartAddItemPayLoad{
    goods: IGoods,
    count: number
}

interface ICartAddItem {
    type: actionTypes.CART_ADD_ITEM
    payload: ICartAddItemPayLoad
}


interface ICartRemoveitem {
    type: actionTypes.CART_REMOVE_ITEM
    payload: string
}

export type TypeActionCart = ICartAddItem | ICartRemoveitem