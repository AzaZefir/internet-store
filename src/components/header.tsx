import React, { FC, useState } from 'react'
import cn from 'classnames'
import '..//components/css/header.css'

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


    return <div className="header">
        <img src={logo} alt="" width='50'/>

        <button className='btn' onClick={()=>setIsShowCard(!isShowCard)}>
            <img src={logoBtn} alt="" />
            <div className='btntext'>{cart.length}</div>
        </button>
        
        <div className={cn('bg-white absolute top-20 right-0 p-5 shadow-md', {
            hidden: !isShowCard,
        })}>
            {cart.map(item=> (
                <div className='cardname' key={`${item.name}`}>
                    <img src={item.imagePath} alt={item.name}/>
                    <div>
                        <div>{item.name}</div>
                        <div>{`${item.count} x $${item.price.toLocaleString()}`}</div>
                        <button className='btnremove' onClick={()=> removeHandler(item._id)}>Delete</button>
                    </div>
                </div>
            ))}

            <div className='total'>
                Total: <b>${total.toLocaleString()}</b>
            </div>
        </div>
        </div>
} 

export default Header