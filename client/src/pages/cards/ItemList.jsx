import React, { useState } from 'react';
import login from "../../assets/login.jpg";
import { useNavigate } from 'react-router-dom';
const ItemList = ({ item }) => {
    console.log('item', item)
    const [items, setItems] = useState(item);
    const navigate = useNavigate()
    // console.log('items', items)
    const handleSection = () => {
        const obj = {
            category: items?.category,
            brand: items?.brand,
            gender: items?.gender

        }
        localStorage.setItem("query", JSON.stringify(obj))
        navigate("/allproduct")
    }
    return (
        <div onClick={handleSection} className='  bg-sky-50 flex flex-row mx-10 min-w-[300px] w-[400px] transition-transform transform hover:scale-105 h-full object-cover cursor-pointer'>
            <div className='flex flex-col justify-between  w-full h-[400px]  shadow-md rounded-lg '>
                <div className='w-full h-2/3 justify-center flex '>
                    <img src={items ? items.poster : ""} alt="image" className=' w-[80%] aspect-video rounded-lg object-cover' />
                </div>
                <div className='h-1/3 items-center flex justify-center'>
                    <h1 className='font-bold text-4xl uppercase'> {items?.category ? items?.category : items?.brand}</h1>
                </div>
            </div>
        </div>
    );
};

export default ItemList;
