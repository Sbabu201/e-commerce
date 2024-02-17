import React from 'react'
import ItemList from '../cards/ItemList'
import HomeImageSlides from '../cards/HomeImageSlides'
import { womenBrand, womenCatagory } from './Items';
const Women = () => {
    const arr1 = womenBrand();
    const arr2 = womenCatagory();

    return (
        <div className='bg-gray-300'>
            <div className='pt-20 flex flex-col justify-center items-center h-screen  '>
                <HomeImageSlides />
            </div>
            <div className='relative min-w-full  overflow-hidden scrollbar-hide   p-10  '>

                <div className='py-10 flex overflow-x-auto scrollbar-hide  scroll-smooth' >
                    {arr1.map((item) => {
                        return (
                            <ItemList item={item} />
                        )
                    })}
                </div>  
                <div className='py-10 flex overflow-x-auto scrollbar-hide  scroll-smooth' >
                    {arr2.map((item) => {
                        return (
                            <ItemList item={item} />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Women