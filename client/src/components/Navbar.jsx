import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { FaUser } from "react-icons/fa";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import logo from "../assets/logo1.png";
import { logoutAuth } from '../store/reducres/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBagItems } from '../store/reducres/bagreducer';
import { getAllWishLists } from '../store/reducres/wishListReducers';
import { getAllProductItems } from '../store/reducres/productReducer';
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from '../pages/cards/Drawer';
import LeftDrawer from '../pages/cards/Drawer';
const Navbar = () => {
    const dispatch = useDispatch();
    const [drawer, setDrawer] = useState(false)
    const isLogin = useSelector(state => state.authReducer.isLogin);
    const bagCount = useSelector(state => state.bagreducer.bagItems);
    const wishCount = useSelector(state => state.wishListReducers.wishListItems);
    const handleLogout = () => {
        dispatch(logoutAuth());
        localStorage.clear("user");
    }
    const setOpen = (data) => {
        setDrawer(data)
    }
    useEffect(() => {
        dispatch(getAllWishLists());
        dispatch(getAllBagItems());
        dispatch(getAllProductItems())
    }, [dispatch])
    return (
        <div className='flex  fixed top-0 z-10 justify-between items-center text-black bg-white shadow-md w-full h-16 md:h-20 '>
            <NavLink to="/" className='w-[8%] hidden  h-20 md:flex '>
                <img className='object-cover w-full' src={logo} alt="" /></NavLink>
            <div className='md:hidden ml-4  flex'>
                <GiHamburgerMenu onClick={() => { setDrawer(true) }} className='text-base  md:text-base' />
                <LeftDrawer open={drawer} setOpen={setOpen} />

            </div>
            <div className='md:w-5/12 w-[20%]  md:font-bold hidden md:flex justify-evenly items-center  h-20'>
                <NavLink to="/men" className="hover:text-sky-400 text-xs md:text-base"><span className='flex md:hidden'>M</span><span className='hidden md:flex'>Men</span></NavLink>
                <NavLink to="/women" className="hover:text-sky-400 text-xs md:text-base"><span className='flex md:hidden'>w</span><span className='hidden md:flex'>WoMen</span></NavLink>
                <NavLink to="/kid" className="hover:text-sky-400 text-xs md:text-base"><span className='flex md:hidden'>k</span><span className='hidden md:flex'>Kid</span></NavLink>
            </div>


            <div className=' flex items-center md:w-4/12 w-[55%]  h-20'>
                <form className='md:mx-10  bg-gray-300 rounded-md flex space-between text-center items-center overflow-hidden  h-1/2 w-full' action="post">
                    <SearchIcon className='mx-2' />
                    <input className='w-full h-full flex p-4 rounded-md  outline-none bg-gray-300 ' type="text" name="search" placeholder='search here' />
                </form>
            </div>
            <div className=' flex justify-evenly text-xs font-bold items-center md:p-2 md:w-2/12 w-[30%]  h-20'>
                <section className='md:flex hidden relative group  flex-col items-center cursor-pointer'>
                    <FaUser className='text-sm md:text-base' /><span className='md:flex hidden'>profile</span>
                    <div className="absolute top-5  bg-white w-full md:w-80 h-80 flex md:justify-end justify-center rounded-md md:shadow-md  invisible  group-hover:visible transition duration-300">
                        <div className='flex text-center flex-col justify-evenly items-start w-80 md:w-full h-full'>
                            <div className=" border-b-2 flex flex-col justify-center w-full items-center h-2/5">
                                <p className='my-3'>{isLogin ? "hello .. account details here " : "welcome ! please login to access the account"}</p>
                                <NavLink to={isLogin ? "/profile" : "/login"} className=" flex justify-center text-white px-20 h-12 items-center w-1/3 bg-blue-300 rounded-sm"  >{isLogin ? "Account" : "login/signUp"}</NavLink>
                            </div>
                            <div className=" border-b-2 flex flex-col justify-evenly w-full h-2/5">
                                <NavLink to="/order" className="flex justify-start mx-4 text-black text-center  h-1/6 ">orders</NavLink>
                                <NavLink to="/wishlist" className="flex justify-start mx-4 text-black text-center  h-1/6  ">wishlist</NavLink>
                                <NavLink to="/address" className="flex  justify-start items-start mx-4 text-black text-center  h-1/6 w-full">saved addresses</NavLink>
                            </div>
                            {isLogin && <div className='flex justify-end items-center w-full h-1/5'>
                                <button className=" flex justify-center text-black mx-10 h-8 items-center w-20 bg-blue-300 rounded-sm" onClick={handleLogout}>logout</button>
                            </div>}
                        </div>
                    </div>
                </section>
                <NavLink to="/wishlist" className='flex md:flex-col relative items-center text-black'><FaRegHeart className='text-base md:text-lg' /> <span className='md:flex hidden'>wishlist</span> {isLogin && <span className=' absolute top-[-7px] text-[10px] md:text-base right-[-10px]'>{wishCount && `(${wishCount.length})`}</span>}</NavLink>
                <NavLink to="/bag" className='flex md:flex-col pr-2 relative items-center'><TiShoppingCart className='text-[17px] md:text-lg' /><span className='md:flex hidden'>bag</span>{isLogin && <span className=' absolute top-[-7px] text-[10px] md:text-base right-[-10px]'>{bagCount && `(${bagCount.length})`}</span>}</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
