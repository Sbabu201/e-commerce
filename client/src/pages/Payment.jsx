import React from 'react'
import { OrderDetails } from './utilities/OrderDetails'
import { useNavigate } from 'react-router-dom'
import PaymentCrd from './cards/PaymentCrd'
const Payment = () => {
    const navigate = useNavigate();
    const arr = [1, 2, 3, 4, 5]
    const pageReload = () => {
        navigate("/payment");
    }
    return (
        <>
            <div className=' pt-20 flex items-center mx-40 mt-10 font-bold text-lg'>
                <h1>Payment Method :</h1>
            </div>
            <div className=' flex flex-col md:flex-row mx-20 mt-5 items-start gap-5 h-screen'>

                <div className='bg-transparent shadow-lg gap-4 w-full flex-col flex justify-between  md:w-2/3 h-1/2 '>

                    <PaymentCrd />

                </div>
                <OrderDetails pageReload={pageReload} />
            </div>
        </>
    )
}

export default Payment
