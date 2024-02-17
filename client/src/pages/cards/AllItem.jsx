import React from 'react';
import login from "../../assets/login4.jpg";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { addWishList } from '../../store/reducres/wishListReducers';
import { useNavigate } from 'react-router-dom';
const AllItem = ({ item }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const moveToWishList = async () => {
        const userId = localStorage.getItem("userId")
        dispatch(addWishList({ user: userId, product: item?._id, finalPrice: item?.price }))

    };
    const productHandle = () => {
        localStorage.setItem("productId", item._id)
        navigate("/product")
    }
    // console.log('item', item)
    return (
        <>
            <div className='md:h-[400px] gap-2 h-72 w-[46%] md:w-1/5 shadow-md flex cursor-pointer flex-col justify-between rounded-md transition-transform transform-gpu hover:scale-105'>
                <div className='h-80% w-full flex flex-col justify-between' onClick={productHandle}>
                    <div className='h-[75%]  w-full object-cover aspect[21/9] relative inline-block group'>
                        <img className=" h-[250px] w-full object-cover rounded-md" src={item?.image1[0]} alt="" />

                    </div>
                    <div className='pl-5 w-full h-[15%] flex flex-col  gap-2'>
                        <p className='text-md'>{item?.name}</p>
                        <p className='font-bold'>price : {item?.price} RS</p>
                    </div>
                </div>
                <button className='w-full bg-blue-500 h-[10%] rounded-lg' onClick={moveToWishList}>
                    <span className="flex justify-center items-center font-bold">
                        WISHLIST <FavoriteBorderIcon />
                    </span>
                </button>
            </div>
        </>
    );
}

export default AllItem;
