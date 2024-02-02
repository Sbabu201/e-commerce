import React from 'react'
import scanner from "../../assets/scanner.jpg"
const PaymentCrd = () => {
    return (
        <div className='w-full h-full flex-col  flex border rounded-sm shadow-md'>
            <div className='w-full flex justify-between h-3/4 '>
                <p>scanner</p>
                <div className='w-1/3 flex justify-center items-center'><img className='w-2/3 object-cover  rounded-md' src={scanner} alt="" /></div>

            </div>
            <div className='flex w-full justify-between mx-4 font-bold h-1/4 '>
                <button className='w-1/3 h-1/2 bg-sky-200 mx-4 rounded-md'> Pay Now</button>
            </div>
        </div>
    )
}

export default PaymentCrd
