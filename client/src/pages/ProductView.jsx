import React, { useEffect, useState } from 'react';
import image from "../assets/login4.jpg";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBagItem } from '../store/reducres/bagreducer';
import { addWishList } from '../store/reducres/wishListReducers';
import { addRating, getAllRating } from "../store/reducres/ratingReducer"
import Rating from "./cards/Rating"
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons/fa
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Loader from './cards/Loader';
import toast from "react-hot-toast"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ProductView = () => {
    const productId = useParams().id;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false); // Add loading state
    const ratings = useSelector(state => state.ratingReducer.ratingItems);
    const foundRatings = ratings.filter(item => item?.product === productId);
    const averageRatingValue = foundRatings.length > 0 ? Math.floor(foundRatings.reduce((total, rating) => total + rating.ratingValue, 0)) / foundRatings.length : 0;
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        size: '',
        quantity: '',
        color: ''
    });
    const [check, setCheck] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleOpen = () => {
        setCheck(true);
        setOpen(true)
    };
    const handleOpen1 = () => {
        setCheck(false);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const allWishlist = useSelector(state => state.wishListReducers.wishListItems);
    const foundWishList = allWishlist.find(item => item?.product?._id === productId);
    const userId = localStorage.getItem("userId");
    const allProduct = useSelector(state => state.productReducer.productItems);
    const foundObject = allProduct.find(item => item?._id === productId);
    console.log('foundObject', foundObject)
    const [clickedImage, setClickedImage] = useState("")
    console.log('clickedImage', clickedImage)


    useEffect(() => {
        dispatch(getAllRating())
        // setLoading(false)
    }, [dispatch])

    // add to bag 
    const addToBagHandle = async (e) => {


        e.preventDefault()
        if (!userId) {
            toast.error("you haven't logged in yet ..");
            return
        }
        try {
            setLoading(true)

            dispatch(addBagItem({ user: userId, product: foundObject?._id, quantity: formData?.quantity, finalPrice: foundObject?.price - foundObject?.discount, color: formData?.color, size: formData?.size }));
        } catch (error) {
            console.error("Error adding to bag:", error);
        }
        finally {
            setLoading(false)
        }
    };

    // wishlist add 
    const moveToWishList = async (e) => {

        e.preventDefault()

        if (!userId) {
            toast.error("you haven't logged in yet ..");
            return
        }
        try {
            setLoading(true)

            dispatch(addWishList({ user: userId, product: foundObject?._id, quantity: formData?.quantity, finalPrice: foundObject?.price - foundObject?.discount, color: formData?.color, size: formData?.size }));

        } catch (error) {
            console.error("Error adding to wishlist:", error);

        }
        finally {
            setLoading(false)

        }
    };
    if (loading) {
        return <Loader />; // Render the loader while data is being fetched
    }

    return (
        <>
            {/* modal  */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {loading ? <Loader /> :
                        <form onSubmit={check ? addToBagHandle : moveToWishList} className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">Size</label>
                                <div>
                                    <label className="mr-4">
                                        <input type="radio" name="size" value="small" onChange={handleChange} />
                                        <span className="ml-2">Small</span>
                                    </label>
                                    <label className="mr-4">
                                        <input type="radio" name="size" value="medium" onChange={handleChange} />
                                        <span className="ml-2">Medium</span>
                                    </label>
                                    <label className="mr-4">
                                        <input type="radio" name="size" value="large" onChange={handleChange} />
                                        <span className="ml-2">Large</span>
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">Quantity</label>
                                <input type="number" name="quantity" value={formData.quantity} onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">Color</label>
                                <div>
                                    <label className="mr-4">
                                        <input type="radio" name="color" value="red" onChange={handleChange} />
                                        <span className="ml-2">Red</span>
                                    </label>
                                    <label className="mr-4">
                                        <input type="radio" name="color" value="blue" onChange={handleChange} />
                                        <span className="ml-2">Blue</span>
                                    </label>
                                    <label className="mr-4">
                                        <input type="radio" name="color" value="green" onChange={handleChange} />
                                        <span className="ml-2">Green</span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-center justify-center mt-6">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                                    {!check ? 'move to wishlist.' : 'Move to Bag'}
                                </button>
                            </div>
                        </form>
                    }
                </Box>
            </Modal>


            {/* my content  */}
            <div className=' mt-20 mb-4 md:mb-20 w-full gap-10  h-fit justify-center items-center flex-col  md:justify-between md:flex-row flex '>
                <div className='w-full md:w-2/5  h-fit flex flex-col md:flex-row gap-10  rounded-md '>
                    <div className='flex md:flex-col md:w-1/6 w-full p-4 gap-2 md:gap-10 h-full md:h-screen  '>
                        {foundObject?.image1?.map((item, i) => (
                            <img onClick={() => setClickedImage(item)} className='md:w-full cursor-pointer w-1/5 h-20 md:h-20 rounded-md object-cover   ' key={i} src={item} alt="" />
                        ))}
                    </div>

                    <div className='md:w-5/6 w-full md:h-screen h-full  '>
                        <img className=' w-full h-80 md:h-2/3 rounded-md    ' key={clickedImage} src={clickedImage ? clickedImage : foundObject?.image1?.slice(0, 1)} alt="" />
                        <div className='w-full gap-2  h-20 flex   justify-between items-center '>
                            <button className={`w-2/3  bg-red-200 hover:bg-red-500 hover:text-white h-2/3 rounded-md font-bold `} onClick={handleOpen}>
                                {'Move to Bag'}
                            </button>
                            <button className={`w-2/3 bg-blue-200 hover:bg-blue-500 h-2/3 rounded-md font-bold ${foundWishList ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleOpen1} disabled={foundWishList}>
                                {foundWishList ? 'Wishlisted' : 'Add to Wishlist'}
                            </button>
                        </div>
                    </div>

                </div>



                <div className='w-full md:w-3/5 h-full md:min-h-screen md:mt-10  md:px-20 md:p-8   flex flex-col gap-2 md:gap-6  rounded-md shadow-md'>
                    <p className=' text-sm md:text-2xl font-bold '>{foundObject?.brand}</p>

                    <p className=' text-xs md:text-xl '>{foundObject?.name} </p>
                    <div className='flex w-2/5 gap-4  flex-row justify-between text-xs md:text-base items-center'> <p className=' text-gray-400'>Rating</p> {[1, 2, 3, 4, 5].map((value) => (
                        <FaStar
                            key={value}
                            color={value <= averageRatingValue ? '#ffc107' : '#e4e5e9'} // Update color based on ratingValue
                            size={40}
                            style={{ height: "50px", width: "20px" }}
                        />
                    ))}</div>
                    <div className='flex justify-start gap-10 w-80 text-sm md:text-2xl font-bold'> <p >{foundObject?.price - foundObject?.discount} RS </p><del> {foundObject?.discount} RS</del></div>
                    <div>
                        <div className='flex flex-row justify-start gap-10 '>
                            <p className='w-[40px] h-[40px] flex justify-center items-center'>Color</p>
                            <div className='flex gap-4 '>
                                <button
                                    className={`radio-label bg-red-500 text-white w-8 md:w-12 text-xs md:text-base h-8 md:h-12 rounded-full`}
                                >
                                    Red
                                </button>
                                <button
                                    className={`radio-label bg-white border border-gray-300 text-xs md:text-base rounded-full w-8 md:w-12  h-8 md:h-12`}
                                // onClick={() => handleColorChange('white')}
                                >
                                    White
                                </button>
                                <button
                                    className={`radio-label bg-blue-500 rounded-full text-white text-xs md:text-base w-8 md:w-12  h-8 md:h-12`}
                                // onClick={() => handleColorChange('blue')}
                                >
                                    Blue
                                </button>
                                <button
                                    className={`radio-label bg-green-500 text-white rounded-full text-xs md:text-base w-8 md:w-12  h-8 md:h-12 `}
                                // onClick={() => handleColorChange('green')}
                                >
                                    Green
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-row justify-start gap-10 mt-10'>
                            <p className='w-[40px] h-[40px] flex justify-center text-xs md:text-base items-center'>SIZE</p>
                            <div>
                                <button
                                    className={`radio-label border border-gray-300  w-7 md:w-10 h-7 md:h-10 rounded mr-4 `}

                                >
                                    S
                                </button>
                                <button
                                    className={`radio-label  border border-gray-300w-7 md:w-10 h-7 md:h-10 rounded mr-4 `}
                                // onClick={() => handleSizeChange('medium')}
                                >
                                    M
                                </button>
                                <button
                                    className={`radio-label border-gray-300   border w-7 md:w-10 h-7 md:h-10 rounded `}
                                // onClick={() => handleSizeChange('large')}
                                >
                                    L
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col justify-start gap-2 w-full text-xs md:text-lg '> <p className='font-bold' >Available Offers </p>
                        <p> Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
                            <br />
                            Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More</p>
                    </div>
                    <div className='flex flex-col justify-start gap-2 w-full text-xs md:text-lg '> <p className='font-bold' >Available Offers </p>
                        <p>
                            Deliver to
                            Enter delivery pincode to
                            Check <br />
                            Delivery by8 Mar, Friday|Free₹70?
                            if ordered before 10:59 AM
                        </p>
                    </div>
                    <div>
                        <div className='flex border justify-start gap-10 flex-col  '>

                            <div className='w-full p-5 border-b-2 text-sm md:text-2xl font-bold flex justify-evenly'>
                                <p>Ratings & Reviews </p><p>
                                    {foundRatings?.length} ratings and {foundRatings?.length} reviews</p>
                            </div>
                            <div className='flex flex-col min-h-40 gap-10 '>

                                {foundRatings?.map((i, inx) => (
                                    <div className='flex justify-evenly items-center  width-full '>
                                        <span className='text-md font-bold flex gap-2 justify-center items-center  bg-sky-200 rounded-md w-10 '>  <p>{i?.ratingValue} </p>  <FaStar
                                            key={inx}
                                            color={'#ffc107'} // Update color based on ratingValue
                                            size={40}
                                            style={{ height: "20px", width: "20px" }}
                                        /></span>
                                        <p>{i?.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>






                </div>
            </div>
        </>
    );
};

export default ProductView;
