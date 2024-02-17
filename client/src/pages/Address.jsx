import React, { useEffect, useState } from 'react'
import AddressCard from './cards/AddressCard'
import { OrderDetails } from './utilities/OrderDetails'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import axios from "axios"
const Address = () => {
    const userId = localStorage.getItem("userId");
    const [address, setAddress] = useState([]);
    const getUserDetails = async () => {
        try {
            const { data } = await axios.get(`/user/user/${userId}`);
            (data.existUser) ? setAddress([data?.existUser]) : toast.error(data.message)

        } catch (error) {
            console.log('error', error)
        }
    }
    useEffect(() => {
        getUserDetails()
    }, [])
    console.log('address', address)
    const navigate = useNavigate();
    const arr = [1, 2, 3, 4, 5]
    const pageReload = () => {
        navigate("/payment");
    }
    return (
        <div className='min-h-screen'>
            <div className='pt-20 flex items-center mx-40 mt-10 font-bold text-lg'>
                <h1>add address :</h1>
                <button className='w-20 h-8 hover:bg-blue-500 bg-sky-200 mx-4 rounded-md'>ADD</button>
            </div>
            <div className=' flex flex-col md:flex-row mx-20 mt-5 items-start gap-5 h-full'>

                <div className='bg-transparent shadow-lg gap-4 w-full flex-col flex justify-between  md:w-2/3 h-full p-4 '>
                    {
                        address?.map((item, i) => (<AddressCard key={i} item={item} />))
                    }
                </div>
                <OrderDetails pageReload={pageReload} />
            </div>
        </div>
    )
}

export default Address

