import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
export const OrderDetails = ({ pageReload }) => {
    const navigate = useNavigate();
    return (
        <div className='bg-transparent shadow-lg w-full rounded-sm md:w-1/3 h-[400px] flex flex-col justify-between'>
            <p className='w-full bg-gray-300  my-5 px-5 h-10 flex items-center font-bold'>Price Summary</p>
            <div className='w-full   px-5 h-3/5 flex  justify-between flex-col '>
                <p>Total Mrp :</p>
                <p>Delivery Fee :</p>
                <p>Bag Discount :</p>
                <p>Sub Total :</p>
            </div>
            <div className='w-full   px-5 h-1/3 flex  justify-between items-center '>
                <p>total : </p>
                <button className='w-2/3 bg-blue-200 text-gray-600 hover:bg-blue-500  hover:text-white h-1/3 rounded-md font-bold' onClick={pageReload}>Place Order</button>
            </div>
        </div>
    )
}
