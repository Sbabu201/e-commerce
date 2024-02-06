import React from 'react'
import login from "../../assets/login.jpg"
const ItemList = () => {
    return (

        <div className='flex flex-row mx-10 min-w-[300px] w-[400px] h-full '>
            <div className=' flex flex-col justify-between w-full h-80 shadow-md rounded-lg'>
                <img src={login} alt="" className='h-2/3 w-full rounded-lg' />
                <div>hello</div>
            </div>
        </div>


    )
}

export default ItemList
