import React from 'react'
import BagCard from './cards/BagCard'
import { useNavigate } from 'react-router-dom'
import { OrderDetails } from './utilities/OrderDetails'
const Bag = () => {
    const arr = [1, 2, 3, 4, 5]
    const navigate = useNavigate();
    const pageReloadParent = () => {
        navigate("/address");
    }
    return (
        <>

            <div className='pt-20 flex flex-col md:flex-row m-20 items-start gap-5 h-screen'>

                <div className='bg-transparent shadow-lg gap-4 w-full flex-col flex justify-between  md:w-2/3 h-max '>
                    {
                        arr.map((item, i) => (<BagCard key={i} />))
                    }
                </div>
                <OrderDetails pageReload={pageReloadParent} />
            </div>
        </>
    )
}

export default Bag
