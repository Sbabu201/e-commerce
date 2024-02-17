import React, { useEffect, useState } from 'react'
import WishListItems from './cards/WishListItems'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWishLists, setWishList } from '../store/reducres/wishListReducers'

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishListItems = useSelector(state => state.wishListReducers.wishListItems);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Define how many items to display per page

    // Calculate the index range of items to display based on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentItems = wishListItems.slice(startIndex, endIndex);


    const totalPages = Math.ceil(wishListItems.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='w-full min-h-screen flex justify-between flex-col'>
            <div>
                <div className='mt-20 h-2/3 w-full flex justify-center gap-2 md:gap-4 md:justify-evenly md:w-full md:p-12 flex-wrap '>
                    {currentItems.map((item) => (
                        <WishListItems key={item.id} item={item} />
                    ))}
                    {wishListItems.length === 0 && "Wishlist is empty"}
                </div>
            </div>
            {/* Pagination controls */}
            <div className='flex justify-center mt-4'>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-4 py-2 border border-gray-400 rounded-md ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Wishlist;
