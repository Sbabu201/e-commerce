import React, { useEffect, useState } from 'react';
import OrderCard from './cards/OrderCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../store/reducres/orderReducer';
import Loader from './cards/Loader';

const Orders = () => {
    const orders = useSelector(state => state.orderReducer.orders);
    const isLoading = useSelector(state => state.orderReducer.status);
    console.log('isLoading', isLoading)// Add loading state
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentItems = orders.slice(startIndex, endIndex);
    useEffect(() => {
        dispatch(getAllOrders());
    }, [dispatch]);

    return (
        <>
            {/* Conditional rendering for skeleton loader */}
            {(isLoading === "loading") && (
                <Loader />
            )}
            {(isLoading === "failed") && (
                <div className='mt-80 flex w-full h-fit items-center justify-center'>
                    failed to load the orders .......
                </div>
            )}

            {/* Render content if not loading */}
            {(isLoading === "succeeded") && (
                <>
                    {orders.length === 0 && (
                        <div className='mt-80 flex w-full h-fit items-center justify-center'>
                            no orders are made .......
                        </div>
                    )}
                    <div className='flex flex-col justify-center items-center min-h-screen'>
                        <div className='pt-20 flex flex-col w-full md:flex-row m-20 items-center gap-5 min-h-fit justify-center'>
                            <div className='bg-transparent gap-4 w-full flex-col flex justify-between md:w-2/3 h-max '>
                                {currentItems.map((item, i) => (<OrderCard key={i} item={item} />))}
                            </div>
                        </div>

                        {/* Pagination controls */}
                        {Math.ceil(orders.length / itemsPerPage) > 0 && (
                            <div className='flex justify-center mt-4 '>
                                {[...Array(Math.ceil(orders.length / itemsPerPage))].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentPage(index + 1)}
                                        className={`mx-1 px-4 py-2 border border-gray-400 rounded-md ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default Orders;
