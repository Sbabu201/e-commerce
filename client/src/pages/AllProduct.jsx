
import React, { useEffect, useState } from 'react';
import AllItem from './cards/AllItem';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from "react-router-dom"
const AllProduct = () => {
    const location = useLocation(); // Retrieve query parameters from URL
    const query = new URLSearchParams(location.search);
    const search = query.get("value");

    // console.log('query.search', query.search)
    const [priceRange, setPriceRange] = useState(0);
    const products = useSelector((state) => state.productReducer.productItems);
    // console.log('products', products)
    const [currentPage, setCurrentPage] = useState(1);
    let [filters, setFilters] = useState({
        category: query.get('category') !== null ? [query.get('category')] : [],
        brand: query.get('type') !== null ? [query.get('type')] : [],
        gender: query.get('gender') !== null ? [query.get('gender')] : [],
        color: [],
        search: query.get("value")
    });
    console.log('filters', filters)
    const filterBySearchWord = (product, searchWord) => {

        const lowerCaseSearchWord = searchWord.toLowerCase();
        return Object.values(product).some(
            (value) =>
                typeof value === "string" && // Check only string fields
                lowerCaseSearchWord.toLowerCase().includes(value) // Match search word
        )
    }



    useEffect(() => {
        setFilters({
            category: query.get('category') !== null ? [query.get('category')] : [],
            brand: query.get('type') !== null ? [query.get('type')] : [],
            gender: query.get('gender') !== null ? [query.get('gender')] : [],
            color: [],
            search: query.get("value")
        });
    }, [search]);
    console.log('filters', filters)
    const itemsPerPage = 15;

    const filterProducts = (products, filters) => {
        return products.filter((product) => {
            // console.log('product , filters', product, filters)
            const price = Number(product.price); // Ensure the price is a number
            return (
                (!filters.category.length || filters.category.includes(product.category)) &&
                (!filters.brand.length || filters.brand.includes(product.brand)) &&
                (!filters.gender.length || filters.gender.includes(product.gender)) &&
                (!filters.search || filterBySearchWord(product, filters.search)) &&
                (price >= priceRange) // Correct comparison with price range
            );
        });
    };
    const handlePriceChange = (event) => {
        setPriceRange(event.target.value); // Adjust the price range based on the slider value
    };
    const filteredProducts = filterProducts(products, filters);
    // console.log('filteredProducts', filteredProducts)

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const currentItems = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleFilterChange = (filterName, value) => {
        setFilters((prev) => {
            const currentFilter = prev[filterName];
            const newFilter = currentFilter.includes(value)
                ? currentFilter.filter((v) => v !== value) // Remove if already selected
                : [...currentFilter, value]; // Add if not selected
            return { ...prev, [filterName]: newFilter };
        });
        setCurrentPage(1);
    };


    return (
        <div className='mt-24  flex  '>
            <div className='md:min-h-screen  h-fit w-2/5 md:w-1/5 flex text-xs md:text-base flex-col border  border-gray-200'>
                <div className='p-4'>
                    <p className='font-semibold uppercase'>Categories</p>

                    <div className="flex flex-col gap-2">
                        {['shoe', 'shirt', 'pants', 'belt', 'kurta', 't-shirt'].map((category) => (
                            <label className='flex gap-2 items-center text-center' key={category}>
                                <input
                                    type="checkbox"
                                    checked={filters.category.includes(category)}
                                    onChange={() => handleFilterChange('category', category)}
                                />
                                {category}
                            </label>
                        ))}
                    </div>
                </div>

                <div className='p-4 border-t border-gray-200'>
                    <h2 className='font-semibold'>Price Range</h2>
                    <div className='mt-2 flex flex-col '>
                        <input className=' outline-none border border-gray-600' value={priceRange} onChange={handlePriceChange} type='number' />
                        {/* You can add more options like sliders or input fields for price range */}
                    </div>
                </div>
                <div className='p-4 border-t border-gray-200'>
                    <h2 className='font-semibold'>Brand</h2>

                    <div className="flex flex-col gap-2">
                        {['hrx', 'nike', 'puma', "adidas", "beingHuman", 'killer'].map((brand) => (
                            <label className='flex gap-2 items-center' key={brand}>
                                <input
                                    type="checkbox"
                                    checked={filters.brand.includes(brand)}
                                    onChange={() => handleFilterChange('brand', brand)}
                                />
                                {brand}
                            </label>
                        ))}
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

