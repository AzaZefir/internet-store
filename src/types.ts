import { Dispatch, SetStateAction } from "react"

export interface IGoods{
    _id: string
    name: string
    imagePath: string
    price: number
}

export interface Card extends IGoods {
	count: number
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>
