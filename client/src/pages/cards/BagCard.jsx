import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteBagItem } from '../../store/reducres/bagreducer';
import { addWishList } from '../../store/reducres/wishListReducers';
import toast from 'react-hot-toast';
import CancelIcon from '@mui/icons-material/Cancel';
import FavoriteIcon from '@mui/icons-material/Favorite';
const BagCard = ({ item }) => {
    console.log('item', item)
    const dispatch = useDispatch();
    const userId = localStorage.getItem("userId");
    const [loading, setLoading] = useState(false);
    const moveToWishList = async () => {
        setLoading(true);
        dispatch(addWishList({ user: userId, product: item?.product?._id, finalPrice: item?.finalPrice, size: item?.size, color: item?.color, quantity: item?.quantity }))
        setLoading(false);
    };

    const deleteFromBag = async () => {
        dispatch(deleteBagItem(item._id));
    };

    return (
        <div className='w-full text-xs md:text-base md:h-max h-fit flex border rounded-sm shadow-md'>
            <div className='w-3/5 flex h-52 flex-col  justify-evenly items-start'>
                <div className='w-full flex flex-col justify-start  pt-5 px-5 h-1/2'>
                    <p className='font-medium'>{item?.product?.name}</p>
                    <p className='font-bold'>{item?.product?.price} RS | discount value: {item?.finalPrice} RS</p>
                    <p className='text-green-500'>You saved {item?.product?.discount} RS</p>
                </div>
                <div className='w-full flex items-center  flex-row justify-start gap-4    px-5 pb-5'>
                    <p className='font-bold'>Size: </p> <p className='border border-black px-2 rounded-md'>{item?.size}</p>
                    <p className='font-bold'>Qty: </p><p className='border border-black px-2 rounded-md'>{item?.quantity}</p>
                </div>
            </div>
            <div className='w-2/5 flex h-52 relative justify-center items-center'>{item?.product?.image1?.slice(0, 1)?.map((item) => (<><img className='w-full h-full p-2 object-cover rounded-md' src={item} alt="" />
                <button className={`absolute top-2 right-2  text-sky-200 hover:text-sky-500 h-8 w-8 rounded-full flex justify-center items-center ${loading ? 'cursor-not-allowed opacity-50' : ''}`} onClick={deleteFromBag} disabled={loading}><CancelIcon /></button>
                <button className={`absolute top-2 left-2  text-red-500 hover:text-red-500 h-8 w-8 rounded-full flex justify-center items-center ${loading ? 'cursor-not-allowed opacity-50' : ''}`} onClick={moveToWishList} disabled={loading}><FavoriteIcon /></button>
            </>))}

            </div>
        </div>
    );
};

export default BagCard;
