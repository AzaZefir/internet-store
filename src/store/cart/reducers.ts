import {Card} from '../../types'
import { actionTypes, TypeActionCart } from './types'


const initialState: Card[] = []

export const cartReducer = (state = initialState, action: TypeActionCart) => {
    switch (action.type) {
        case actionTypes.CART_ADD_ITEM:
            {
                const cart = [...state]
                const {count, goods} = action.payload

                const foundGoods = cart.find(item => item._id === goods._id)

                if (foundGoods) {
                    foundGoods.count =count
                } else {
                    cart.push({
                        ...goods,
                        count,
                    })
                }
                return cart
            }
            
        case actionTypes.CART_REMOVE_ITEM:
            {
                return state.filter(item => item._id !== action.payload)
            }

        default:
            return state
    }
}
