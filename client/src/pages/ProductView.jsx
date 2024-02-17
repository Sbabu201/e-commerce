import React, { useState } from 'react';
import image from "../assets/login4.jpg";
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBagItem } from '../store/reducres/bagreducer';
import { addWishList } from '../store/reducres/wishListReducers';

const ProductView = () => {
    const dispatch = useDispatch();
    const [bagLoading, setBagLoading] = useState(false);
    const [wishlistLoading, setWishlistLoading] = useState(false);
    const productId = localStorage.getItem("productId");
    const allWishlist = useSelector(state => state.wishListReducers.wishListItems);
    const foundWishList = allWishlist.find(item => item?.product?._id === productId);
    const userId = localStorage.getItem("userId");
    const allProduct = useSelector(state => state.productReducer.productItems);
    const foundObject = allProduct.find(item => item?._id === productId);
    const navigate = useNavigate();

    const addToBagHandle = async () => {
        setBagLoading(true);
        try {
            await dispatch(addBagItem({ user: userId, product: foundObject?._id, quantity: 1, finalPrice: foundObject?.price }));
            setBagLoading(false);
        } catch (error) {
            console.error("Error adding to bag:", error);
            setBagLoading(false);
        }
    };

    const moveToWishList = async () => {
        setWishlistLoading(true);
        try {
            await dispatch(addWishList({ user: userId, product: foundObject?._id, finalPrice: foundObject?.price }));
            setWishlistLoading(false);
        } catch (error) {
            console.error("Error adding to wishlist:", error);
            setWishlistLoading(false);
        }
    };

    return (
        <div className=' mt-20 mb-4 md:mb-20 w-full bg-gray-300 h-fit justify-center items-center flex-col  md:justify-between md:flex-row flex '>
            <div className='w-3/5 h-fit flex  flex-wrap mt-10  rounded-md '>
                {foundObject?.image1?.map((item, i) => (
                    <img className='md:w-1/2 w-full h-1/12 md:h-[400px] rounded-md object-cover p-4   ' key={i} src={item} alt="" />
                ))}
            </div>
            <div className='w-full md:w-2/5 h-fit mt-10 md:p-8 bg-white rounded-md shadow-md'>
                <p className='font-bold text-3xl m-10'>{foundObject?.brand}</p>
                <p className='text-green-500 text-lg m-10'>{foundObject?.name}</p>
                <div className='w-full h-1/2 flex font-bold justify-evenly'>

                    <div className='flex flex-col gap-10 py-10'>

                        <p>Rating</p>
                        <p>MRP  </p>
                        <p>Discount </p>
                        <p>FinalPrice </p>
                        <p className='w-[40px] h-[40px] flex justify-center items-center'>Color </p>
                        <p className='w-[40px] h-[40px] flex justify-center items-center'>SIZE </p>

                    </div>
                    <div className='flex flex-col gap-10 py-10'>
                        <p> {foundObject?.rating ? foundObject?.rating : "0"}</p>
                        <p>{foundObject?.price} RS</p>
                        <p> {foundObject?.discount} RS</p>
                        <p> {foundObject?.price - foundObject?.discount} RS</p>
                        <p className='bg-sky-500 rounded-full w-[40px] h-[40px] text-center flex justify-center items-center'>{foundObject?.color[0]}</p>
                        <p className='font-bold bg-sky-500 rounded-full w-[40px] h-[40px] flex justify-center items-center'>{foundObject?.size[0] === "Small" ? "S" : foundObject?.size[0] === "Medium" ? "M" : foundObject?.size[0] === "Large" ? "l" : "NA"}</p>


                    </div>

                </div>
                <div className='w-full gap-2  h-20 flex   justify-between items-center '>
                    <button className={`w-2/3  bg-red-200 hover:bg-red-500 hover:text-white h-2/3 rounded-md font-bold ${bagLoading ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={addToBagHandle}>
                        {bagLoading ? 'Adding to Bag...' : 'Move to Bag'}
                    </button>
                    <button className={`w-2/3 bg-blue-200 hover:bg-blue-500 h-2/3 rounded-md font-bold ${wishlistLoading || foundWishList ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={moveToWishList} disabled={wishlistLoading || foundWishList}>
                        {wishlistLoading ? 'Adding to Wishlist...' : foundWishList ? 'Wishlisted' : 'Add to Wishlist'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
