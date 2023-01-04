import React, {useState} from "react";
import {IProduct} from "../models";
import {products} from "../data/products";
import axios from "axios";
import {Product} from "./Product";
import {ErrorMessage} from "./ErrorMessage";

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10,
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHadler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title.')
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    const changeHadler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={submitHadler}>
            <input
                type='text'
                className='placeholder:italic placeholder:text-slate-400 border border-slate-300 rounded-md shadow-sm py-2 px-4 mb-2 w-full outline-0'
                placeholder='Enter product title...'
                value={value}
                onChange={changeHadler}
            />

            {error && <ErrorMessage error={error} />}

            <button
                type='submit'
                className='py-2 px-4 border border-slate-300 rounded-md bg-sky-500 hover:bg-sky-700 hover:text-white'
            >
                Create
            </button>
        </form>
    )
}