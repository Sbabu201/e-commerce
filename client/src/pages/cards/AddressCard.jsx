import React from 'react'
import image from "../../assets/login.jpg"

const AddressCard = () => {
    return (
        <div className='w-full h-full flex border rounded-sm shadow-md'>
            <div className='w-3/5  flex h-80 flex-col gap-7 justify-between items-start  '>
                <div className='w-full  flex flex-col justify-evenly px-10   h-2/3  '>
                    <p className=' font-bold '>Name </p>
                    <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aliquid, velit nisi illo at dolor facilis voluptas, vitae ducimus vel ipsum cupiditate alias minima est quo aut. Facilis, expedita exercitationem.</p>
                    <p className='text-green-500 '> mobile : </p>
                </div>

                <div className='flex w-full justify-between mx-4 font-bold h-1/4 p-4'>
                    <button className='w-1/3 h-max p-3 bg-sky-200 mx-4 rounded-md'>remove</button>
                    <button className='w-1/3 h-max p-3 bg-sky-200 mx-4 rounded-md'>wishlist</button>
                </div>
            </div>
            <div className='w-2/5 flex justify-center items-center'><img className='w-2/3 object-cover  rounded-md' src={image} alt="" /></div>
        </div>
    )
}

export default AddressCard
