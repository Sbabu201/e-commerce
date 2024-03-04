import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBagItem } from '../../store/reducres/bagreducer';
import { deleteWishList } from '../../store/reducres/wishListReducers';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import CancelIcon from '@mui/icons-material/Cancel';
const WishListItems = ({ item }) => {
    const userId = localStorage.getItem("userId");
    const dispatch = useDispatch();
    const ratings = useSelector(state => state.ratingReducer.ratingItems);
    // console.log('ratings[0].product', ratings[0].product === item?.product?._id)
    const foundRatings = ratings.filter(items => items?.product === item?.product?._id);
    // console.log(foundRatings, "hello")
    const averageRatingValue = foundRatings.length > 0 ? Math.floor(foundRatings.reduce((total, rating) => total + rating.ratingValue, 0)) / foundRatings.length : 0;

    const removeHandle = async () => {
        dispatch(deleteWishList(item._id));
    }

    const addToBagHandle = async () => {
        dispatch(addBagItem({ user: userId, product: item?.product._id, finalPrice: item?.finalPrice, size: item?.size, color: item?.color, quantity: item?.quantity }));
    }

    return (
        <div className='relative md:h-[400px] h-72 w-[46%] md:w-1/5  shadow-md flex flex-col justify-between'>
            <div className='h-4/5 p-2 w-full relative'>
                <img className="h-full w-full rounded-md object-cover" src={item?.product?.image1[0]} alt="" />
                <div className="absolute bottom-2 left-2  px-2 py-1 rounded-md">
                    <span className='text-md font-bold flex gap-2 justify-center items-center  bg-sky-200 rounded-md w-10 '>  <p>{averageRatingValue} </p>  <FaStar
                        key={averageRatingValue}
                        color={'#ffc107'} // Update color based on ratingValue
                        size={40}
                        style={{ height: "20px", width: "20px" }}
                    /></span>
                </div>
                <button className='absolute top-2 right-2 text-sky-100 hover:text-sky-300 h-8 w-8 rounded-full flex justify-center items-center' onClick={removeHandle}><CancelIcon /></button>
            </div>
            <div className='pl-5 w-full h-1/5 '>
                <p className='text-md'>{item?.product?.name}</p>
                <p className='font-bold'>Price: {item?.product?.price}</p>
            </div>
            <div className='w-full gap-1 p-1 h-1/6 flex border justify-center items-center '>
                <button className='w-full bg-blue-200 hover:bg-blue-500 h-full rounded-md font-bold' onClick={addToBagHandle}>Move to Bag</button>
            </div>
        </div>
    );
}

export default WishListItems;
