import React from 'react'
import image from "../../assets/login.jpg"
const BagCard = () => {
    return (
        <div className='w-full h-max  flex border rounded-sm shadow-md'>
            <div className='w-3/5 flex h-80 flex-col gap-7 justify-between items-start '>
                <div className='w-full  flex flex-col justify-evenly px-10 h-1/2 '>
                    <p className=' font-medium'>Title </p>
                    <p className='font-bold'> value | discount value</p>
                    <p className='text-green-500'> you saved </p>
                </div>
                <div className='w-full h-1/4 flex items-center flex-col md:flex-row justify-evenly px-10'>
                    <p>size: </p>
                    <select className=' h-1/2 border border-gray-300 outline-none rounded-md mr-2' name="size">
                        <option value="select">select</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <p>qty: </p>
                    <select className=' h-1/2 border border-gray-300 outline-none rounded-md' name="qty">
                        <option value="select">select</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>

                </div>
                <div className='flex w-full justify-between mx-4 font-bold h-1/4 '>
                    <button className='w-1/3 h-2/3 bg-sky-200 mx-4 rounded-md'>remove</button>
                    <button className='w-1/3 h-2/3 bg-sky-200 mx-4 rounded-md'>wishlist</button>
                </div>
            </div>
            <div className='w-2/5 flex justify-center items-center'><img className='w-2/3 object-cover  rounded-md' src={image} alt="" /></div>
        </div>
    )
}

export default BagCard
