import React, { useEffect, useState } from 'react';
import BagCard from './cards/BagCard';
import { useNavigate } from 'react-router-dom';
import { OrderDetails } from './utilities/OrderDetails';
import { useDispatch, useSelector } from 'react-redux';
import { setBag } from '../store/reducres/bagreducer';

const Bag = () => {
    const dispatch = useDispatch();
    const bagItems = useSelector(state => state.bagreducer.bagItems);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const navigate = useNavigate();

    const pageReloadParent = () => {
        navigate("/address");
    }

    // Calculate the index range of items to display based on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentItems = bagItems.slice(startIndex, endIndex);

    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <div className='pt-20 flex flex-col md:flex-row m-20 items-start gap-5 min-h-fit'>
                <div className='bg-transparent gap-4 w-full flex-col flex justify-between md:w-2/3 h-max '>
                    {currentItems.map((item, i) => (<BagCard key={i} item={item} />))}
                </div>
                {bagItems?.length === 0 && <p className='flex justify-start'>Bag is Empty</p>}
                {bagItems?.length > 0 && <OrderDetails pageReload={pageReloadParent} />}
            </div>

            {/* Pagination controls */}
            {Math.ceil(bagItems.length / itemsPerPage) > 0 && (
                <div className='flex justify-center mt-4 '>
                    {[...Array(Math.ceil(bagItems.length / itemsPerPage))].map((_, index) => (
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
    )
}

export default Bag;
