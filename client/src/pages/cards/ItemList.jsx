import React, { useState } from 'react';
import login from "../../assets/login.jpg";
import { useNavigate } from 'react-router-dom';
const ItemList = ({ item }) => {
    const [items, setItems] = useState(item);
    const navigate = useNavigate()
    console.log('items', items)
    const handleSection = () => {
        const obj = {
            catagory: items?.catagory,
            brand: items?.brand,
            type: items?.name

        }
        localStorage.setItem("query", JSON.stringify(obj))
        navigate("/allproduct")
    }
    return (
        <div onClick={handleSection} className='  flex flex-row mx-10 min-w-[300px] w-[400px] h-full object-cover cursor-pointer'>
            <div className='flex flex-col justify-between  w-full h-[400px]  shadow-md rounded-lg transition-transform transform hover:scale-105'>
                <div className='w-full h-2/3 justify-center flex '>
                    <img src={items ? items.poster : ""} alt="image" className=' w-[80%] aspect-video rounded-lg object-cover' />
                </div>
                <div className='h-1/3 items-center flex justify-center'>
                    <h1 className='font-bold text-4xl uppercase'> {items?.brand ? items?.brand : items?.name}</h1>
                </div>
            </div>
        </div>
    );
};

export default ItemList;
