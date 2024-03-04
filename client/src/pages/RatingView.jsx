import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons/fa
import { useDispatch, useSelector } from 'react-redux';
import { addRating, editRating, getAllRating } from '../store/reducres/ratingReducer';

const RatingView = ({ item }) => {
    // console.log('item._id', item._id)
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0); // State to track hover rating
    const user = localStorage.getItem("userId") // State to track the user's rating
    // const product =localStorage.getItem("productId") // State to track the user's rating
    const ratings = useSelector(state => state.ratingReducer.ratingItems);
    const isProductRated = ratings.filter(items => items.product === item?._id && items.user === user);
    // console.log('isProductRated', isProductRated)
    // console.log('isProductRated.ratingValue', isProductRated[0]?.ratingValue)
    const dispatch = useDispatch();


    // Function to handle user rating selection
    const handleRatingSelect = (value) => {
        // setRating(value);
        const formData = {

            user,
            product: item?._id,
            ratingValue: value


        }
        dispatch(addRating(formData))
    };
    const handleRatingEdit = (value) => {
        console.log('value', value)
        const formData = {


            product: item?._id,
            ratingValue: value


        }
        dispatch(editRating(formData))
    };

    // Function to handle hover over stars
    const handleStarHover = (value) => {
        setHoverRating(value);
    };

    // Function to reset hover state when mouse leaves
    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    return (
        <div className='flex justify-center items-center gap-4 '>
            {!isProductRated.length ? [1, 2, 3, 4, 5].map((value) => (
                <FaStar
                    key={value}
                    onClick={() => handleRatingSelect(value)}
                    onMouseEnter={() => handleStarHover(value)}
                    onMouseLeave={handleMouseLeave}
                    color={(value <= (hoverRating || rating)) ? '#ffc107' : '#e4e5e9'}
                    size={40}
                    style={{ marginRight: 10, cursor: 'pointer', height: "50px", width: "20px" }}
                />
            )) : [1, 2, 3, 4, 5].map((value) => (
                <FaStar
                    key={value}
                    onClick={() => handleRatingEdit(value)}
                    onMouseEnter={() => handleStarHover(value)}
                    onMouseLeave={handleMouseLeave}
                    color={value <= isProductRated[0]?.ratingValue ? '#ffc107' : '#e4e5e9'}
                    size={40}
                    style={{ marginRight: 10, cursor: 'pointer', height: "50px", width: "20px" }}
                />
            ))}
            {isProductRated[0]?.ratingValue ? <p> {isProductRated[0]?.ratingValue} out of 5 stars</p> : <p> Give us Rating</p>}
        </div>
    );
};

export default RatingView;
