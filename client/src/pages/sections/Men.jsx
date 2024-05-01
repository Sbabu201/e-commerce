import React, { useState } from 'react'
import ItemList from '../cards/ItemList'
import HomeImageSlides from '../cards/HomeImageSlides'
import { menBrand, mencatagory } from './Items'


const Men = () => {
    const [menItem, setMenItem] = useState({});

    const arr1 = menBrand();
    const arr2 = mencatagory();

    return (
        <div className='bg-white'>
            <div className='pt-28 flex flex-col justify-start md:justify-center items-center md:h-screen h-fit  '>
                <HomeImageSlides />
            </div>
            <div className='relative min-w-full  overflow-hidden scrollbar-hide   md:p-10  '>
                <h1 className='font-bold md:text-4xl '>Top Brands...</h1>
                <div className='py-10 flex overflow-x-auto scrollbar-hide  gap-4 scroll-smooth' >

                    {arr1.map((item, i) => {
                        return (
                            <ItemList item={item} />
                        )
                    })}
                </div>
            </div>
            <div className='relative min-w-full  overflow-x-auto scrollbar-hide   md:p-10  '>
                <h1 className='font-bold md:text-4xl '>Catagories to watch....</h1>
                <div className='py-10 flex overflow-x-auto scrollbar-hide  gap-4 scroll-smooth' >
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