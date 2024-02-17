import React from 'react'
import image from "../../assets/login.jpg"

const AddressCard = ({ item }) => {
    return (
        <div className='w-full h-full flex border rounded-sm shadow-md'>
            <div className='w-3/5  flex h-80 flex-col gap-7 justify-between items-start  '>
                <div className='w-full  flex flex-col justify-evenly px-10   h-2/3  '>
                    <p className=' font-bold '>{item?.name} </p>
                    <p className=' font-bold '>{item?.email} </p>
                    <p className='font-medium'>{item?.address?.street} , {item?.address?.state} , {item?.address?.country} ,{item?.address?.postalCode}</p>
                    <p className='text-green-500 '> mobile : {item?.address?.contactNumber} </p>
                </div>

                <div className='flex w-full justify-end mx-4 font-bold h-1/4 p-4'>
                    <button className='w-1/3 h-max p-3 bg-sky-200 hover:bg-blue-500 mx-4 rounded-md'>Select</button>
                    {/* <button className='w-1/3 h-max p-3 bg-sky-200 mx-4 rounded-md'>wishlist</button> */}
                </div>
            </div>
            <div className='w-2/5 flex justify-center items-center'><img className='w-2/3 h-2/3 object-cover  rounded-full' src={item?.profilePhoto} alt="" /></div>
        </div>
    )
}

export default AddressCard
