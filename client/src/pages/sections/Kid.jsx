import React from 'react'
import ItemList from '../cards/ItemList'
import HomeImageSlides from '../cards/HomeImageSlides'

const Kid = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 6, 7]

    return (
        <div className='bg-gray-300'>
            <div className='pt-20 flex flex-col justify-center items-center h-screen  '>
                <HomeImageSlides />
            </div>
            <div className='relative min-w-full  overflow-hidden scrollbar-hide   p-10  '>

                <div className='py-10 flex overflow-x-auto scrollbar-hide  scroll-smooth' >
                    {arr.map((item) => {
                        return (
                            <ItemList />
                        )
                    })}
                </div>
                <div className='py-10 flex overflow-x-auto scrollbar-hide  scroll-smooth' >
                    {arr.map((item) => {
                        return (
                            <ItemList />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Kid