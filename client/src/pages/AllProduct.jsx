
import React, { useEffect, useState } from 'react';
import AllItem from './cards/AllItem';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom"
const AllProduct = () => {

    const products = useSelector(state => state.productReducer.productItems);
    const params = useParams()
    console.log('params', params)
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        category: params?.category || null,
        brand: params?.brand || null,
        gender: params?.gender || null,
        color: null
    });

    useEffect(() => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            category: params?.category || null,
            brand: params?.brand || null,
            gender: params?.gender || null
        }));
    }, [params]);

    console.log('filters', filters)
    const itemsPerPage = 15;
    const filterProducts = (products2, criteria) => {
        return products2.filter(product => {
            return criteria.every(criterion => Object.values(product).includes(criterion));
        });
    };
    const filteredProducts = filterProducts(products, Object.values(filters).filter(value => value !== null))
    console.log('filteredProducts', filteredProducts)
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
            <div className='md:min-h-screen  h-fit w-2/5 md:w-1/5 flex text-xs md:text-base flex-col border  border-gray-200'>
                <div className='p-4'>
                    <p className='font-semibold uppercase'>Categories</p>
                    <div className='mt-2 flex flex-col gap-2'>
                        <label className='inline-flex items-center'>
                            <input
                                type='checkbox'
                                className='form-checkbox'
                                checked={filters.category === 'shoe'}
                                onChange={() => handleFilterChange('category', 'shoe')}
                            />
                            <span className='ml-2'>Shoe</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input
                                type='checkbox'
                                className='form-checkbox'
                                checked={filters.category === 'shirt'}
                                onChange={() => handleFilterChange('category', 'shirt')}
                            />
                            <span className='ml-2'>Shirt</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input
                                type='checkbox'
                                className='form-checkbox'
                                checked={filters.category === 'pants'}
                                onChange={() => handleFilterChange('category', 'pants')}
                            />
                            <span className='ml-2'>Pants</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input
                                type='checkbox'
                                className='form-checkbox'
                                checked={filters.category === 'belt'}
                                onChange={() => handleFilterChange('category', 'belt')}
                            />
                            <span className='ml-2'>Belts</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input
                                type='checkbox'
                                className='form-checkbox'
                                checked={filters.category === 'kurta'}
                                onChange={() => handleFilterChange('category', 'kurta')}
                            />
                            <span className='ml-2'>Kurta</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input
                                type='checkbox'
                                className='form-checkbox'
                                checked={filters.category === 't-shirt'}
                                onChange={() => handleFilterChange('category', 't-shirt')}
                            />
                            <span className='ml-2'>T-shirts</span>
                        </label>
                    </div>

                </div>

                <div className='p-4 border-t border-gray-200'>
                    <h2 className='font-semibold'>Price Range</h2>
                    <div className='mt-2 flex flex-col '>
                        <input type='range' className='form-range' />
                        {/* You can add more options like sliders or input fields for price range */}
                    </div>
                </div>

                <div className='p-4 border-t border-gray-200'>
                    <h2 className='font-semibold'>Brand</h2>
                    <div className='mt-2 flex flex-col gap-2'>
                        <label className='inline-flex items-center'>
                            <input
                                type='checkbox'
                                checked={filters.brand === 'hrx'}
                                onChange={() => handleFilterChange('brand', 'hrx')}
                                className='form-checkbox'
                            />
                            <span className='ml-2'>hrx</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input
                                type='checkbox'
                                checked={filters.brand === 'puma'}
                                onChange={() => handleFilterChange('brand', 'puma')}
                                className='form-checkbox'
                            />
                            <span className='ml-2'>puma</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input
                                type='checkbox'
                                checked={filters.brand === 'nike'}
                                onChange={() => handleFilterChange('brand', 'nike')}
                                className='form-checkbox'
                            />
                            <span className='ml-2'>nike</span>
                        </label>
                        {/* Repeat for other brands */}
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
                <div className=' min-h-screen flex flex-wrap md:gap-4  justify-center   md:justify-evenly  w-full  md:p-10 '>
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

