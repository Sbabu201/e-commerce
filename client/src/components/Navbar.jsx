import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import logo from "../assets/logo1.png";
import { logoutAuth } from '../store/reducres/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBagItems } from '../store/reducres/bagreducer';
import { getAllWishLists } from '../store/reducres/wishListReducers';
import { getAllProductItems } from '../store/reducres/productReducer';
const Navbar = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.authReducer.isLogin);
    const bagCount = useSelector(state => state.bagreducer.bagItems);
    const wishCount = useSelector(state => state.wishListReducers.wishListItems);
    const handleLogout = () => {
        dispatch(logoutAuth());
        localStorage.clear("userId");
    }
    useEffect(() => {
        dispatch(getAllWishLists());
        dispatch(getAllBagItems());
        dispatch(getAllProductItems())
    }, [dispatch])
    return (
        <div className='flex  fixed top-0  z-10 justify-between items-center text-black bg-white shadow-md w-full h-20 '>
            <img className='w-1/12  h-20 object-cover' src={logo} alt="" />
            <div className='w-5/12 font-bold flex justify-evenly items-center  h-20'>
                <NavLink to="/men" className="hover:text-sky-400">Men</NavLink>
                <NavLink to="/women" className="hover:text-sky-400">Women</NavLink>
                <NavLink to="/kid" className="hover:text-sky-400">Kids</NavLink>
            </div>
            <div className=' flex items-center w-4/12  h-20'>
                <form className='mx-10  bg-gray-300 rounded-md flex space-between text-center items-center overflow-hidden  h-1/2 w-full' action="post">
                    <SearchIcon className='mx-2' />
                    <input className='w-full h-full p-4 rounded-md  outline-none bg-gray-300 ' type="text" name="search" placeholder='search here' />
                </form>
            </div>
            <div className=' flex justify-evenly text-xs font-bold items-center p-2 w-2/12  h-20'>
                <section className='flex relative group  flex-col items-center cursor-pointer'><PersonOutlineIcon />profile
                    <div className="absolute top-10  bg-white w-80 h-80  rounded-md shadow-md  invisible  group-hover:visible transition duration-300">
                        <div className='flex text-center flex-col justify-evenly items-start w-full h-full'>
                            <div className=" border-b-2 flex flex-col justify-center w-full items-center h-2/5">
                                <p className='my-3'>{isLogin ? "hello .. account details here " : "welcome ! please login to access the account"}</p>
                                <NavLink to={isLogin ? "/profile" : "/login"} className=" flex justify-center text-white px-20 h-12 items-center w-1/3 bg-blue-300 rounded-sm"  >{isLogin ? "Account" : "login/signUp"}</NavLink>
                            </div>
                            <div className=" border-b-2 flex flex-col justify-evenly w-full h-2/5">
                                <NavLink to="/" className="flex justify-start mx-4 text-black text-center  h-1/6 ">orders</NavLink>
                                <NavLink to="/wishlist" className="flex justify-start mx-4 text-black text-center  h-1/6  ">wishlist</NavLink>
                                <NavLink to="/address" className="flex  justify-start items-start mx-4 text-black text-center  h-1/6 w-full">saved addresses</NavLink>
                            </div>
                            {isLogin && <div className='flex justify-end items-center w-full h-1/5'>
                                <button className=" flex justify-center text-black mx-10 h-8 items-center w-20 bg-blue-300 rounded-sm" onClick={handleLogout}>logout</button>
                            </div>}
                        </div>
                    </div>
                </section>
                <NavLink to="/wishlist" className='flex flex-col items-center text-black'><FavoriteBorderIcon /> wishlist {wishCount && `(${wishCount.length})`}</NavLink>
                <NavLink to="/bag" className='flex flex-col items-center'><ShoppingCartCheckoutIcon />bag {bagCount && `(${bagCount.length})`}</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
