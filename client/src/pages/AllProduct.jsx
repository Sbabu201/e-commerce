
import React, { useState } from 'react';
import AllItem from './cards/AllItem';
import { useSelector } from 'react-redux';

const AllProduct = () => {
    const products = useSelector(state => state.productReducer.productItems);
    const query = JSON.parse(localStorage.getItem("query"));

    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        category: query?.category || '',
        brand: query?.brand || '',
        type: query?.type || '',
    });
    const itemsPerPage = 15;

    // Apply filters to products
    const filteredProducts = products.filter(product => {
        return (
            (!filters.category || product.category === filters.category) &&
            (!filters.brand || product.brand === filters.brand) &&
            (!filters.type || product.type === filters.type)
        );
    });

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // Calculate the index range of items to display based on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    // Get the list items for the current page
    const currentItems = filteredProducts.slice(startIndex, endIndex);

    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Function to handle filter change
    const handleFilterChange = (filterName, value) => {
        setFilters({
            ...filters,
            [filterName]: value,
        });
        setCurrentPage(1); // Reset to the first page when filter changes
    };

    return (
        <div className='mt-20 bg-gray-300 flex  '>
            <div className='md:min-h-screen  h-fit w-1/5 flex flex-col border  border-gray-200'>
                <div className='p-4'>
                    <h2 className='font-semibold'>Category</h2>
                    <div className='mt-2'>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox' />
                            <span className='ml-2'>Category 1</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox' />
                            <span className='ml-2'>Category 2</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox' />
                            <span className='ml-2'>Category 3</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox' />
                            <span className='ml-2'>Category 4</span>
                        </label>
                    </div>
                </div>

                <div className='p-4 border-t border-gray-200'>
                    <h2 className='font-semibold'>Price Range</h2>
                    <div className='mt-2 flex flex-col'>
                        <input type='range' className='form-range' />
                        {/* You can add more options like sliders or input fields for price range */}
                    </div>
                </div>

                <div className='p-4 border-t border-gray-200'>
                    <h2 className='font-semibold'>Brand</h2>
                    <div className='mt-2'>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox' />
                            <span className='ml-2'>Brand 1</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox' />
                            <span className='ml-2'>Brand 2</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox' />
                            <span className='ml-2'>Brand 3</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox' />
                            <span className='ml-2'>Brand 4</span>
                        </label>
                    </div>
                </div>

                <div className='p-4 border-t border-gray-200'>
                    <h2 className='font-semibold'>Color</h2>
                    <div className='mt-2'>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox' />
                            <span className='ml-2'>Color 1</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox' />
                            <span className='ml-2'>Color 2</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox' />
                            <span className='ml-2'>Color 3</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox' />
                            <span className='ml-2'>Color 4</span>
                        </label>
                    </div>
                </div>

            </div>

            <div className='h-full w-full'>
                {/* Right panel for product items */}
                <div className='w-4/5 h-full flex justify-center gap-2  md:gap-4 md:justify-evenly md:w-full md:p-12 flex-wrap'>
                    {/* Render list items for the current page */}
                    {currentItems.map((item) => (
                        <AllItem key={item._id} item={item} />
                    ))}
                </div>

                {/* Pagination controls */}
                <div className='flex justify-center mt-4'>
                    {/* Render page numbers */}
                    {Array.from({ length: totalPages }, (_, index) => (
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
        </div>
    );
};

export default AllProduct;
