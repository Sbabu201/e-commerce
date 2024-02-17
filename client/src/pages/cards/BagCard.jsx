import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteBagItem } from '../../store/reducres/bagreducer';
import { addWishList } from '../../store/reducres/wishListReducers';
import toast from 'react-hot-toast';

const BagCard = ({ item }) => {
    const dispatch = useDispatch();
    const userId = localStorage.getItem("userId");
    const [loading, setLoading] = useState(false);
    const moveToWishList = async () => {
        setLoading(true);
        dispatch(addWishList({ user: userId, product: item?.product?._id, finalPrice: item?.product?.price }))
        setLoading(false);
    };

    const deleteFromBag = async () => {
        dispatch(deleteBagItem(item._id));
    };

    return (
        <div className='w-full h-max flex border rounded-sm shadow-md'>
            <div className='w-3/5 flex h-80 flex-col gap-7 justify-between items-start'>
                <div className='w-full flex flex-col justify-evenly px-10 h-1/2'>
                    <p className='font-medium'>{item?.product?.name}</p>
                    <p className='font-bold'>{item?.product?.price} RS | discount value: {item?.product?.price - item?.product?.discount} RS</p>
                    <p className='text-green-500'>You saved {item?.product?.discount} RS</p>
                </div>
                <div className='w-full h-1/4 flex items-center flex-col md:flex-row justify-evenly px-10'>
                    <p>Size: {item?.product?.size}</p>
                    <p>Qty: {item?.quantity}</p>
                </div>
                <div className='flex w-full justify-between mx-4 font-bold h-1/4'>
                    <button className={`w-1/3 h-2/3 bg-sky-200 mx-4 rounded-md ${loading ? 'cursor-not-allowed opacity-50' : ''}`} onClick={deleteFromBag} disabled={loading}>
                        {loading ? <div className="loader"></div> : 'Remove'}
                    </button>
                    <button className={`w-1/3 h-2/3 bg-sky-200 mx-4 rounded-md ${loading ? 'cursor-not-allowed opacity-50' : ''}`} onClick={moveToWishList} disabled={loading}>
                        {loading ? <div className="loader"></div> : 'WishList'}
                    </button>
                </div>
            </div>
            <div className='w-2/5 flex justify-center items-center'>{item?.product?.image1?.slice(0, 1)?.map((item) => (<img className='w-2/3 object-cover rounded-md' src={item} alt="" />))}</div>
        </div>
    );
};

export default BagCard;
