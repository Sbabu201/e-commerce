import React, { useState } from 'react'
import ItemList from '../cards/ItemList'
import HomeImageSlides from '../cards/HomeImageSlides'
import { menBrand, mencatagory } from './Items'


const Men = () => {
    const [menItem, setMenItem] = useState({});

    const arr1 = menBrand();
    const arr2 = mencatagory();

    return (
        <div className='bg-gray-300'>
            <div className='pt-20 flex flex-col justify-center items-center h-screen  '>
                <HomeImageSlides />
            </div>
            <div className='relative min-w-full  overflow-hidden scrollbar-hide   p-10  '>
                <h1 className='font-bold text-4xl p-10'>Top Brands...</h1>
                <div className='py-10 flex overflow-x-auto scrollbar-hide  scroll-smooth' >

                    {arr1.map((item, i) => {
                        return (
                            <ItemList item={item} />
                        )
                    })}
                </div>
            </div>
            <div className='relative min-w-full  overflow-hidden scrollbar-hide   p-10  '>
                <h1 className='font-bold text-4xl p-10'>Catagories to watch....</h1>
                <div className='py-10 flex overflow-x-auto scrollbar-hide  scroll-smooth' >
                    {arr2.map((item, i) => {
                        return (
                            <ItemList item={item} />
                        )
                    })}
                </div>
            </div>


        </div>
    )
}

export default Men