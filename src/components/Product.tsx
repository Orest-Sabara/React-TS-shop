import React, {useState} from "react";
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct
}

export function Product(props: ProductProps) {
    const [details, setDetails] = useState(false)

    const btnClasses = details ? 'bg-blue-400' : 'bg-yellow-400'
    const btnClass = ['py-2 px-4 border', btnClasses]

    return (
        <div
            className='border py-2 px-4 rounded flex flex-col items-center mb-2'
        >
            <img src={props.product.image} className='w-1/6' alt={props.product.title}/>
            <p>{props.product.title}</p>
            <p className='font-bold'>{props.product.price}</p>
            <button
                className={btnClass.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide details' : 'Show details'}
            </button>
            {details && <div>
                <p>{props.product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{props.product?.rating?.rate}</span></p>
            </div>}

        </div>
    )
}