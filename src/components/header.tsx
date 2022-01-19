import React, { FC, useState } from 'react'
import cn from 'classnames'

import logo from './../img/web-internet-online-network-seo-svgrepo-com.svg'
import logoBtn from './../img/reply-arrow-direction-right-svgrepo-com.svg'


import { useTypedSelector } from '../hook/useTypedSelector'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/cart/action'




const Header: FC = () => {
    const [isShowCard, setIsShowCard] = useState(false)
    const cart = useTypedSelector(state => state.cart)
    const total = cart.reduce((acc, item) =>
        acc + item.price
        , 0)
    
    const dispatch = useDispatch()
    
    const removeHandler = (id:string) => {
        dispatch(removeFromCart(id))
        
    }


    return <div className="flex items-center justify-between relative bg-indigo-300 w-full py-2 px-4">
        <img src={logo} alt="" width='50'/>

        <button className='bg-transparent border-none relative' onClick={()=>setIsShowCard(!isShowCard)}>
            <img src={logoBtn} alt="" width='55'/>
            <div className='text-red-500 absolute bottom-0 right-1 font-bold p-2 rounded-full bg-white w-3 h-5 flex'>{cart.length}</div>
        </button>
        
        <div className={cn('bg-white absolute top-20 right-0 p-5 shadow-md', {
            hidden: !isShowCard,
        })}>
            {cart.map(item=> (
                <div className='flex item-center mb-4' key={`${item.name}`}>
                    <img
                        src={item.imagePath}
                        alt={item.name}
                        width='55'
                        height='55'
                        className='mr-3'
                    />
                    <div>
                        <div>{item.name}</div>
                        <div>{`${item.count} x $${item.price.toLocaleString()}`}</div>
                        <button
                            className='text-red-600 bg-transparent border-0'
                            onClick={()=> removeHandler(item._id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}

            

            <div className='text-lg border-solid border-t-2 border-red-100 pt-1 mt-2'>
                Total: <b>${total.toLocaleString()}</b>
            </div>
        </div>
        </div>
} 

export default Header