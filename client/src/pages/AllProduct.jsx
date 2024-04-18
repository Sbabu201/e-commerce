
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
            <div className='md:min-h-screen  h-fit w-1/5 flex flex-col border  border-gray-200'>
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

// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// const AllProduct = () => {
//     const products = useSelector(state => state.productReducer.productItems);
//     const params = useParams();
//     const [currentPage, setCurrentPage] = useState(1);
//     const [filters, setFilters] = useState({
//         category: params?.category || null,
//         brand: params?.brand || null,
//         priceRange: { min: 0, max: 100 }, // Example price range, adjust as needed
//         colors: [],
//     });
//     const itemsPerPage = 15;

//     // Function to filter products based on the applied filters
//     const filterProducts = (products, filters) => {
//         return products.filter(product => {
//             // Check if product matches each filter criterion
//             return (
//                 (!filters.category || product.category === filters.category) &&
//                 (!filters.brand || product.brand === filters.brand) &&
//                 (!filters.priceRange || (product.price >= filters.priceRange.min && product.price <= filters.priceRange.max)) &&
//                 (!filters.colors.length || filters.colors.includes(product.color))
//             );
//         });
//     };

//     // Filter products based on the applied filters
//     const filteredProducts = filterProducts(products, filters);

//     // Pagination
//     const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = currentPage * itemsPerPage;
//     const currentItems = filteredProducts.slice(startIndex, endIndex);

//     // Handle page change
//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     // Handle filter change (e.g., category, brand, price range, color)
//     const handleFilterChange = (filterName, value) => {
//         setFilters({
//             ...filters,
//             [filterName]: value,
//         });
//         setCurrentPage(1); // Reset to the first page when filter changes
//     };

//     return (
//         <div className='md:min-h-screen mt-24 h-fit w-1/5 flex flex-col border  border-gray-200'>
//             {/* Categories */}
//             <div className='p-4'>
//                 <p className='font-semibold uppercase'>Categories</p>
//                 <div className='mt-2 flex flex-col gap-2'>
//                     <label className='inline-flex items-center'>
//                         <input
//                             type='checkbox'
//                             className='form-checkbox'
//                             onChange={() => handleFilterChange('category', 'shoe')}
//                         />
//                         <span className='ml-2'>Shoe</span>
//                     </label>
//                     {/* Repeat for other categories */}
//                 </div>
//             </div>

//             {/* Price Range */}
//             <div className='p-4 border-t border-gray-200'>
//                 <h2 className='font-semibold'>Price Range</h2>
//                 <div className='mt-2 flex flex-col'>
//                     <input
//                         type='range'
//                         className='form-range'
//                         min={0}
//                         max={100}
//                         value={filters.priceRange.min}
//                         onChange={e => handleFilterChange('priceRange', { ...filters.priceRange, min: parseInt(e.target.value) })}
//                     />
//                     <input
//                         type='range'
//                         className='form-range'
//                         min={0}
//                         max={100}
//                         value={filters.priceRange.max}
//                         onChange={e => handleFilterChange('priceRange', { ...filters.priceRange, max: parseInt(e.target.value) })}
//                     />
//                 </div>
//             </div>

//             {/* Brand */}
//             <div className='p-4 border-t border-gray-200'>
//                 <h2 className='font-semibold'>Brand</h2>
//                 <div className='mt-2'>
//                     <label className='inline-flex items-center'>
//                         <input
//                             type='checkbox'
//                             checked={params?.brand === "hrx"}
//                             className='form-checkbox'
//                             onChange={() => handleFilterChange('brand', 'hrx')}
//                         />
//                         <span className='ml-2'>hrx</span>
//                     </label>
//                     {/* Repeat for other brands */}
//                 </div>
//             </div>

//             {/* Color */}
//             <div className='p-4 border-t border-gray-200'>
//                 <h2 className='font-semibold'>Color</h2>
//                 <div className='mt-2'>
//                     {/* Implement color checkboxes and attach onChange event handlers */}
//                 </div>
//             </div>

//             {/* Render product list */}
//             <div>
//                 {currentItems.map(product => (
//                     <div key={product.id}>
//                         {/* Render product details */}
//                     </div>
//                 ))}
//             </div>

//             {/* Pagination controls */}
//             <div className='flex justify-center mt-4'>
//                 {Array.from({ length: totalPages }, (_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => handlePageChange(index + 1)}
//                         className={`mx-1 px-4 py-2 border border-gray-400 rounded-md ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}
//                     >
//                         {index + 1}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllProduct;
