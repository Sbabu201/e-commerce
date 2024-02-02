import React from 'react'
import image from "../assets/login4.jpg"
import { Navigate, useNavigate } from 'react-router-dom'
const ProductView = () => {
    const navigate = useNavigate();
    return (
        <div className=' mt-20 w-full  h-screen justify-center items-center flex-col md:justify-between md:flex-row flex '>
            <div className='w-3/5 h-screen flex  flex-wrap mt-10 '>
                <img className='md:w-1/2 w-full h-1/12 md:h-2/3 object-cover p-4   ' src={image} alt="" />
                <img className='md:w-1/2 w-full h-1/12 md:h-2/3 object-cover p-4  ' src={image} alt="" />
                <img className='md:w-1/2 w-full h-1/12 md:h-2/3 object-cover p-4  ' src={image} alt="" />
                <img className='md:w-1/2 w-full h-1/12 md:h-2/3 object-cover p-4  ' src={image} alt="" />
                <img className='md:w-1/2 w-full h-1/12 md:h-2/3 object-cover p-4  ' src={image} alt="" />
                <img className='md:w-1/2 w-full h-1/12 md:h-2/3 object-cover p-4   ' src={image} alt="" />
            </div>
            <div className='w-full md:w-2/5 h-screen mt-10 md:p-8 '>
                <div className='w-full h-1/2 flex flex-col justify-evenly'>
                    <p className='font-bold text-3xl'>Brand</p>
                    <p className='text-green-500 text-lg'>title</p>
                    <p>rating</p>
                    <p>MRP</p>
                    <p>colours</p>
                    <p>Size</p>

                </div>
                <div className='w-full gap-2  h-20 flex   justify-between items-center '>
                    <button className='w-2/3  bg-blue-200 hover:bg-blue-500 h-2/3 rounded-md font-bold' onClick={() => { navigate("/bag") }}>Move to Bag</button>
                    <button className='w-2/3 bg-blue-200 hover:bg-blue-500 h-2/3 rounded-md font-bold' onClick={() => { navigate("/wishlist") }}>wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default ProductView
