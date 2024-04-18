import React, { useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const OrderDetails = ({ pageReload }) => {
    const data = useSelector(state => state.bagreducer.bagItems);
    console.log('data', data)
    let mrp = data?.reduce((accumulator, currentItem) => {
        const priceNumeric = parseFloat(currentItem?.product?.price);
        return accumulator + priceNumeric;
    }, 0);;
    let discount = data?.reduce((accumulator, currentItem) => {
        const priceNumeric = parseFloat(currentItem?.product?.discount);
        return accumulator + priceNumeric;
    }, 0);
    useEffect(() => {
        // console.log('data', data)
        mrp = data?.reduce((accumulator, currentItem) => {
            console.log('currentItem', currentItem.product?.price)
            const priceNumeric = parseFloat(currentItem?.product?.price);
            return accumulator + priceNumeric;
        }, 0);
        console.log('mrp', mrp)
        discount = data?.reduce((accumulator, currentItem) => {
            const priceNumeric = parseFloat(currentItem?.product?.discount);
            return accumulator + priceNumeric;
        }, 0);
        console.log('discount', discount)
    }, [])
    // console.log('mrp', mrp)
    // console.log('discount', discount)
    const navigate = useNavigate();
    return (
        <div className='bg-transparent text-xs md:text-base shadow-lg w-full rounded-sm md:w-1/3 h-[300px] md:h-[400px] flex flex-col justify-between'>
            <p className='w-full bg-gray-300  my-5 px-5 h-10 flex items-center font-bold'>Price Summary</p>
            <div className='w-full   px-5 h-3/5 flex  justify-evenly  font-semibold  '>

                <div className='flex gap-10 flex-col justify-center'>
                    <p>Total Mrp</p>
                    <p>Delivery Fee </p>
                    <p>Bag Discount</p>
                    <p>Sub Total</p>
                </div>
                <div className='flex gap-10 flex-col justify-center' >
                    <p> {mrp ? mrp : ""} RS </p>
                    <p> 70.00 RS </p>
                    <p> {discount ? discount : ""} RS </p>
                    <p> {mrp ? discount ? mrp - discount : "" : ""} RS </p>
                </div>
            </div>
            <div className='w-full   px-5 h-1/3 flex font-bold  justify-evenly items-center uppercase '>
                <p>total : {mrp ? discount ? mrp - discount + 70 : "" : ""} RS  </p>
                <button className='w-1/3 bg-blue-200 text-gray-600 hover:bg-blue-500  hover:text-white h-1/3 rounded-md font-bold' onClick={pageReload}>Place Order</button>
            </div>
        </div>
    )
}
