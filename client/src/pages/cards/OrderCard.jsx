import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteBagItem } from '../../store/reducres/bagreducer';
import { addWishList } from '../../store/reducres/wishListReducers';
import toast from 'react-hot-toast';
import RatingView from '../RatingView';
import { getAllRating } from '../../store/reducres/ratingReducer';
import { Step, Stepper } from 'react-form-stepper';
const OrderCard = ({ item }) => {
    console.log('item', item)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRating())
    }, [dispatch])
    return (
        <div className='w-full h-fit flex flex-col border rounded-sm shadow-md'>


            <div>
                <Stepper activeStep={item?.status === "ordered" ? 0 : item?.status === "Dispatched" ? 1 : item?.status === "Delivered" ? 2 : 0}>
                    <Step label="Ordered" />
                    <Step label="Dispatched" />
                    <Step label="Delivered" />
                </Stepper>
            </div>

            <div className='w-full flex h-80  gap-7  justify-between'>
                <div className='w-3/5 h-full'>
                    <div className=' w-full  flex flex-col items-start'>
                        <div className='w-full flex py-5 justify-start gap-10 px-10 items-start '>
                            <p className='font-medium'>{item?.product?.name}</p>
                            <p className='font-bold'> Order value: {item?.finalPrice} RS</p>
                        </div>
                        <div className='w-full  flex items-start flex-col md:flex-row  px-10'>
                            <p>Size: {item?.size}</p>
                        </div>

                    </div>
                    <div className='h-2/3 flex flex-col justify-evenly items-start '>
                        <div className='w-full  flex flex-col justify-evenly px-10       h-full  '>
                            <p className=' font-bold '>{item?.user?.name} </p>
                            <p className='font-medium'>{item?.address?.street} , {item?.address?.state} , {item?.address?.country} ,{item?.address?.postalCode}</p>
                            <p className='text-green-500 '> mobile : {item?.address?.contactNumber} </p>

                        </div>
                        <div className='flex w-full flex-row justify-evenly items-center mx-4 font-bold '>
                            <RatingView item={item?.product} />
                        </div>
                    </div>
                </div>




                <div className='w-2/5  flex justify-center items-center'>{item?.product?.image1?.slice(0, 1)?.map((item) => (<img className='w-full h-full p-2 object-cover rounded-md' src={item} alt="" />))}</div>

            </div>
        </div>
    );
};

export default OrderCard;
