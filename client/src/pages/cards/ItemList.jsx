import React, { useState } from 'react';
import login from "../../assets/login.jpg";
import { useNavigate } from 'react-router-dom';
const ItemList = ({ item }) => {
    const [items, setItems] = useState(item);
    const navigate = useNavigate()
    // console.log('items', items)
    const handleSection = () => {
        const { gender, category, brand } = items;
        console.log('items', items)
        let url = `/allproducts`;


        const queryParams = new URLSearchParams();
        brand && queryParams.append('type', brand);
        gender && queryParams.append('gender', gender);
        category && queryParams.append('category', category);

        navigate(`${url}?${queryParams.toString()}`);
    }
    return (
        <div onClick={handleSection} className='  bg-sky-50 flex flex-row   min-w-[200px] md:min-w-[200px] w-[250px] md:w-[300px] transition-transform transform hover:scale-105 h-full object-cover cursor-pointer'>
            <div className='flex flex-col justify-between  w-full h-[250px] ]  shadow-md rounded-lg '>
                <div className='w-full h-2/3 justify-center flex '>
                    <img src={items ? items.poster : ""} alt="image" className=' w-44 rounded-full aspect-video h-44 object-cover' />
                </div>
                <div className='h-1/3 items-center flex justify-center'>
                    <h1 className='font-bold md:text-2xl uppercase'> {items?.category ? items?.category : items?.brand}</h1>
                </div>
            </div>
        </div>
    );
};

export default ItemList;
