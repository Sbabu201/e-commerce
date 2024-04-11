
import React, { useState } from 'react';
import AllItem from './cards/AllItem';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom"
const AllProduct = () => {
    const products = useSelector(state => state.productReducer.productItems);
    const params = useParams()
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        category: params?.category || null,
        brand: params?.brand || null,
        type: params?.type || null,
    });
    const itemsPerPage = 15;
    const filterProducts = (products2, criteria) => {
        return products2.filter(product => {
            return criteria.every(criterion => Object.values(product).includes(criterion));
        });
    };
    const filteredProducts = filterProducts(products, Object.values(params).filter(value => value !== undefined))
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentItems = filteredProducts.slice(startIndex, endIndex);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleFilterChange = (filterName, value) => {
        setFilters({
            ...filters,
            [filterName]: value,
        });
        setCurrentPage(1);
    };

    return (
        <div className='mt-24  flex  '>
            <div className='md:min-h-screen  h-fit w-1/5 flex flex-col border  border-gray-200'>
                <div className='p-4'>
                    <p className='font-semibold uppercase'>Categories</p>
                    <div className='mt-2 flex flex-col gap-2'>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox ' />
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
                            <input type='checkbox' checked={params?.brand === "hrx"} className='form-checkbox' />
                            <span className='ml-2'>hrx</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' checked={params?.brand === "puma"} className='form-checkbox' />
                            <span className='ml-2'>puma</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' checked={params?.brand === "nike"} className='form-checkbox' />
                            <span className='ml-2'>nike</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' checked={params?.brand === "adidas"} className='form-checkbox' />
                            <span className='ml-2'>adidas</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' checked={params?.brand === "beingHuman"} className='form-checkbox' />
                            <span className='ml-2'>beingHuman</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' checked={params?.brand === "killer"} className='form-checkbox' />
                            <span className='ml-2'>killer</span>
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
                <div className='w-4/5 min-h-screen flex justify-center gap-4   md:justify-evenly  md:w-full  md:p-10 flex-wrap'>
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