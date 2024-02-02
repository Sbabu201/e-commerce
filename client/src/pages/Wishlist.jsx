import React from 'react'
import WishListItems from './cards/WishListItems'

const Wishlist = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 14, 18, 19]
    return (
        <div className='mt-20 h-screen w-full flex justify-center  gap-2 md:gap-4 md:justify-evenly md:w-full   md:p-10 flex-wrap '>
            {
                arr.map((item) => (
                    <WishListItems />
                ))
            }

        </div>
    )
}

export default Wishlist
