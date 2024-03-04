import React, { useEffect } from 'react'
import image from "../../assets/login.jpg"

const AddressCard = ({ item, addressId, setValue }) => {
    console.log('addressId', addressId)
    const handleClick = () => {
        setValue(item)
    }

    console.log('item', item)
    return (
        <div className='w-full h-full flex border rounded-sm shadow-md'>
            <div className='w-3/5  flex h-80 flex-col gap-7 justify-between items-start  '>
                <div className='w-full  flex flex-col justify-evenly px-10   h-2/3  '>
                    <p className=' font-bold '>{item?.user?.name} </p>
                    <p className=' font-bold '>{item?.user?.email} </p>
                    <p className='font-medium'>{item?.street} , {item?.state} , {item?.country} ,{item?.postalCode}</p>
                    <p className='text-green-500 '> mobile : {item?.contactNumber} </p>
                </div>

                <div className='flex w-full justify-end mx-4 font-bold h-1/4 p-4'>
                    <button className='w-1/3 h-max p-3 bg-sky-200 hover:bg-blue-500 mx-4 rounded-md' onClick={handleClick}  >{addressId === item ? "Selected" : "select"}</button>
                    {/* <button className='w-1/3 h-max p-3 bg-sky-200 mx-4 rounded-md'>wishlist</button> */}
                </div>
            </div>
            <div className='w-2/5 flex justify-center items-center'><img className='w-2/3 h-2/3 object-cover  rounded-full' src={item?.user?.profilePhoto} alt="" /></div>
        </div>
    )
}

export default AddressCard
