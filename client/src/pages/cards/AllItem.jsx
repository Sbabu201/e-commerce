import React from 'react'
import login from "../../assets/login4.jpg"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const AllItem = () => {
    return (
        <div className='md:h-[300px] h-72 w-[46%] md:w-1/5  shadow-md flex flex-col justify-between'>
            <div className='h-4/5 w-full object-cover relative inline-block group '>
                <img className="h-4/5  w-full" src={login} alt="" />
                <button class="absolute  left-1/2 bottom-0  w-full bg-blue-200  h-10 rounded-md font-bold  transform -translate-x-1/2 -translate-y-1/2  text-black px-4   opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    WISHLIST <FavoriteBorderIcon />
                </button>
            </div>
            <div className='pl-5 w-full  h-1/5 '>
                <p className='text-md'>Title</p>
                <p className='font-bold'>price : 999</p>
            </div>

        </div>
    )
}

export default AllItem
