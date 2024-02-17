import React from 'react'
import axios from 'axios'
import { UseDispatch, useDispatch } from 'react-redux'
import { addBagItem } from '../../store/reducres/bagreducer';
import { deleteWishList } from '../../store/reducres/wishListReducers';

import toast from 'react-hot-toast'
const WishListItems = ({ item }) => {
    const userId = localStorage.getItem("userId");
    const dispatch = useDispatch();
    // console.log('item', item)
    const removeHandle = async () => {
        dispatch(deleteWishList(item._id));
    }

    const addToBagHandle = async () => {
        dispatch(addBagItem({ user: userId, product: item?.product._id, quantity: 1, finalPrice: item.product.price }));
    }
    return (
        <div className='md:h-[300px] h-72 w-[46%] md:w-1/5  shadow-md flex flex-col justify-between'>
            <div className='h-3/5 w-full object-cover '>
                <img className="h-full w-full" src={item?.product?.image1[0]} alt="" />
            </div>
            <div className='pl-5 w-full  h-1/5 '>
                <p className='text-md'>{item?.product?.name}</p>
                <p className='font-bold'>price :{item?.product?.price}</p>
            </div>
            <div className='w-full gap-1 p-1 h-1/5 flex   justify-between items-center '>
                <button className='w-2/3 bg-blue-200 hover:bg-blue-500 h-2/3 rounded-md font-bold' onClick={addToBagHandle} >Move to Bag</button>
                <button className='w-2/3 bg-blue-200 hover:bg-blue-500 h-2/3 rounded-md font-bold' onClick={removeHandle} >Remove</button>
            </div>
        </div>
    )
}

export default WishListItems
