import React from 'react'
import { NavLink, Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import logo from "../assets/logo1.png"

const Navbar = () => {
    return (
        <div className='flex  fixed top-0  z-10 justify-between items-center text-black bg-white shadow-md w-full h-20 '>
            <img className='w-1/12  h-20 object-cover' src={logo} alt="" />
            <div className='w-5/12 font-bold flex justify-evenly items-center  h-20'>

                <NavLink to="/" className="hover:text-sky-400">Men</NavLink>
                <NavLink to="/" className="hover:text-sky-400">Women</NavLink>
                <NavLink to="/" className="hover:text-sky-400">Kids</NavLink>
                <NavLink to="/" className="hover:text-sky-400">Home & Living</NavLink>
                <NavLink to="/" className="hover:text-sky-400">Beauty</NavLink>

            </div>
            <div className=' flex items-center w-4/12  h-20'>

                <form className='mx-10  bg-gray-300 rounded-md flex space-between text-center items-center overflow-hidden  h-1/2 w-full' action="post">
                    <SearchIcon className='mx-2' />
                    <input className='w-full h-full p-4 rounded-md  outline-none bg-gray-300 ' type="text" name="search" placeholder='search here' />
                </form>
            </div>
            <div className=' flex justify-evenly text-xs font-bold items-center p-2 w-2/12  h-20'>
                <section className='flex relative group  flex-col items-center'><PersonOutlineIcon />profile
                    <div className="absolute top-10  bg-white w-80 h-80  rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                        <div className='flex text-center flex-col justify-evenly items-start w-full h-full'>
                            <div className=" border-b-2 flex flex-col justify-center w-full h-2/5">
                                <p className='my-3'>welcome ! please login to access the account</p>
                                <NavLink to="/login" className=" flex justify-center text-white mx-20 h-12 items-center w-32 bg-red-500 rounded-sm"  >login/signUp</NavLink>
                            </div>
                            <div className=" border-b-2 flex flex-col justify-evenly w-full h-2/5">
                                <NavLink to="/" className="flex justify-start mx-4 text-black text-center  h-1/6 ">orders</NavLink>
                                <NavLink to="/" className="flex justify-start mx-4 text-black text-center  h-1/6  ">wishlist</NavLink>
                                <NavLink to="/" className="flex  justify-start items-start mx-4 text-black text-center  h-1/6 w-full">saved addresses</NavLink>
                            </div>
                            <div className='flex justify-end items-center w-full h-1/5'>
                                <button className=" flex justify-center text-white mx-10 h-8 items-center w-20 bg-red-500 rounded-sm">logout</button>

                            </div>
                        </div>
                    </div>
                </section>
                <NavLink to="/wishlist" className='flex flex-col items-center'><FavoriteBorderIcon />wishlist</NavLink>
                <NavLink to="/bag" className='flex flex-col items-center'><ShoppingCartCheckoutIcon />bag</NavLink>
            </div>
        </div>
    )
}

export default Navbar
