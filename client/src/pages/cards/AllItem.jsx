import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWishList } from '../../store/reducres/wishListReducers';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FaHeart } from "react-icons/fa6";

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

const AllItem = ({ item }) => {
    // console.log('item', item)
    const [slide, setSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false); // State to track hover
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        size: '',
        quantity: '',
        color: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const [isWishlisted, setIsWishlisted] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const moveToWishList = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem("userId");
        dispatch(addWishList({ user: userId, product: item?._id, finalPrice: item?.price - item?.discount, size: formData.size, quantity: formData.quantity, color: formData.color }));
        setFormData({
            size: '',
            quantity: '',
            color: ''
        });
    };

    const productHandle = () => {
        localStorage.setItem("productId", item._id);
        navigate("/product");
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlide(slide === item?.image1?.length - 1 ? 0 : slide + 1);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [slide, item]);

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={moveToWishList} className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
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
                                Move To WishList
                            </button>
                        </div>
                    </form>
                </Box>
            </Modal>

            <div
                className='md:h-[350px] gap-2 h-72 w-[46%] md:w-1/5 shadow-xl flex cursor-pointer flex-col justify-between rounded-md '
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className='h-full w-full flex flex-col   justify-start' >

                    <div className='h-[75%]  w-full p-4 '>
                        {isHovered ? (
                            <div className='carousel min-w-full h-full   '>
                                <p className='absolute top-0 left-0 text-black  font-bold p-2'>{item?.brand}</p>
                                <button className='absolute top-0 right-0 text-black font-bold    p-2' onClick={handleOpen}>
                                    <span className="flex flex-col justify-end  items-end  font-bold group">
                                        <FaHeart className=' text-xl' style={{ color: isWishlisted ? "red" : "white" }} />
                                        <p class="opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-semibold text-xs ">WishList</p>
                                    </span>
                                </button>
                                <div className='w-full h-full'>

                                    {item?.image1?.map((items, idx) => (
                                        <img key={idx} onClick={productHandle} style={{ width: '100%' }} className={slide === idx ? "slide scale-effect " : "slide slide-hidden "} src={items} alt="" />
                                    ))}

                                    {/* <img onClick={productHandle} style={{ height: '90%' }} className='slide scale-effect' src={item?.image1[0]} alt='' /> */}


                                </div>
                            </div>
                        ) : (
                            <div className='carousel min-w-full h-full   '>
                                <button className='absolute top-0 right-0 text-white p-2' onClick={handleOpen}>
                                    <span className="flex flex-col justify-end  items-end  font-bold group">
                                        <FaHeart className=' text-xl' style={{ color: isWishlisted ? "red" : "white" }} />
                                        <p class="opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-semibold text-xs ">WishList</p>
                                    </span>
                                </button>
                                <img onClick={productHandle} className='slide scale-effect' src={item?.image1[0]} alt='' />
                            </div>
                        )}
                    </div>
                    <div className='pl-5 w-full h-[15%]  flex flex-col  gap-2'>
                        <p className='text-md'>{item?.name}</p>
                        <span className='flex gap-2  items-center   '><p className='font-bold '> RS. {item?.price - item?.discount}</p> <s className=' text-xs '> {item?.price}RS </s> <p className=' text-sm text-green-400'> ( Dis - {(item?.discount * 100 / item?.price).toFixed(2)} % )</p> </span>
                    </div>
                </div >
            </div >
        </>
    );
};

export default AllItem;
