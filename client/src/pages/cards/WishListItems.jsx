import React from 'react'
import login from "../../assets/login4.jpg"
const WishListItems = () => {
    return (
        <div className='md:h-1/2 h-72 w-[46%] md:w-1/5  shadow-md flex flex-col justify-between'>
            <div className='h-3/5 w-full object-cover '>
                <img className="h-full w-full" src={login} alt="" />
            </div>
            <div className='pl-5 w-full  h-1/5 '>
                <p className='text-md'>Title</p>
                <p className='font-bold'>price : 999</p>
            </div>
            <div className='w-full gap-1 p-1 h-1/6 flex   justify-between items-center '>
                <button className='w-2/3 bg-blue-200 hover:bg-blue-500 h-2/3 rounded-md font-bold'>Move to Bag</button>
                <button className='w-2/3 bg-blue-200 hover:bg-blue-500 h-2/3 rounded-md font-bold'>Remove</button>
            </div>
        </div>
    )
}

export default WishListItems
