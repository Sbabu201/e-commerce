import React from 'react'
import AddressCard from './cards/AddressCard'
import { OrderDetails } from './utilities/OrderDetails'
import { useNavigate } from 'react-router-dom'

const Address = () => {
    const navigate = useNavigate();
    const arr = [1, 2, 3, 4, 5]
    const pageReload = () => {
        navigate("/payment");
    }
    return (
        <>
            <div className='pt-20 flex items-center mx-40 mt-10 font-bold text-lg'>
                <h1>add address :</h1>
                <button className='w-20 h-8 hover:bg-blue-500 bg-sky-200 mx-4 rounded-md'>ADD</button>
            </div>
            <div className=' flex flex-col md:flex-row mx-20 mt-5 items-start gap-5 h-full'>

                <div className='bg-transparent shadow-lg gap-4 w-full flex-col flex justify-between  md:w-2/3 h-full p-4 '>
                    {
                        arr.map((item) => (<AddressCard />))
                    }
                </div>
                <OrderDetails pageReload={pageReload} />
            </div>
        </>
    )
}

export default Address

