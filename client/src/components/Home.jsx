import React from 'react'
import HomeImageSlides from '../pages/cards/HomeImageSlides'
import BrandList from '../pages/BrandList'
import ItemList from '../pages/cards/ItemList'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addToWishList, setWishList } from '../store/reducres/wishListReducers';
import { useEffect } from 'react';
import { addToBag, setBag } from '../store/reducres/bagreducer';
import { Brand, Catagory } from '../pages/sections/Items';
const Home = () => {
    const arr1 = Brand();
    const arr2 = Catagory();
    return (
        <div className='bg-white'>
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

export default Home
