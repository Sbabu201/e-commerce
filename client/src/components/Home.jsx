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
            <div className='pt-28 flex flex-col justify-start md:justify-center items-center h-screen  '>
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
            <div className='relative min-w-full  overflow-x-auto scrollbar-hide   p-10  '>
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

export default Home
