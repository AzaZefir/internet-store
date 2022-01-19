import React, { FC } from "react";
import { TypeSetState } from "../types";
import '..//components/css/quantity.css'

interface IQuantity {
    count: number
    setCount: TypeSetState<number>
}


const Quantity: FC<IQuantity> = ({count, setCount}) => {


    return (
        <div className="count">
            <button onClick={()=> count > 0 && setCount(count + 1)}>+</button>
            <input type="number" className="inputmar" onChange={e => setCount(+e.target.value)} value={count}/>
            <button onClick={()=> count < 30 && setCount(count - 1)}>-</button>
        </div>
    )
}

export default Quantity