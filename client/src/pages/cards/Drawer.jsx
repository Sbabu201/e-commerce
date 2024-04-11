import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

import shoe from "../../assets/shoe.png"
import shirt from "../../assets/shirt2.jpg"
import tshirt from "../../assets/tshirt.jpg"
import pant from "../../assets/pant.avif"
import belt from "../../assets/belt.jpg"
import kurta from "../../assets/kurta.webp"
import { useNavigate } from "react-router-dom"
export default function LeftDrawer({ open, setOpen }) {
    const mencatagory = [{ gender: "men", category: "shoe", poster: shoe }, { gender: "men", category: "shirt", poster: shirt }, { gender: "men", category: "pants", poster: pant }, { gender: "men", category: "belt", poster: belt }, { gender: "men", category: "kurta", poster: kurta }, { gender: "men", category: "t-shirt", poster: tshirt }];
    const womenCatagory = [{ gender: "women", category: "shoe", poster: shoe }, { gender: "women", category: "shirt", poster: shirt }, { gender: "women", category: "pants", poster: pant }, { gender: "women", category: "belt", poster: belt }, { gender: "women", category: "kurta", poster: kurta }, { gender: "women", category: "t-shirt", poster: tshirt }];
    const navigate = useNavigate()

    const [contentOpen, setContentOpen] = React.useState({
        men: false,
        women: false,
        kid: false
    })
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleSection = (items) => {

        navigate(`/allproducts/${items?.gender}/${items?.category}`)
    }

    return (
        <div>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" >
                    <div className='w-full h-screen '>

                        <img className='w-full hidden md:flex h-32 object-cover' src="https://imgs.search.brave.com/k0dLSCkgdBLLpAsasOi6twdh730eexldbPKhGyPk_WM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW5kaWFuZXhw/cmVzcy5jb20vMjAy/NC8wMy9OZXctUHJv/amVjdC04MS5qcGc_/dz0yMTA" alt="" />

                        <div className='w-full   p-4'>
                            <div className='flex h-32  flex-col justify-between'>
                                <img className='w-16 h-16 object-cover rounded-md' src="https://imgs.search.brave.com/k0dLSCkgdBLLpAsasOi6twdh730eexldbPKhGyPk_WM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW5kaWFuZXhw/cmVzcy5jb20vMjAy/NC8wMy9OZXctUHJv/amVjdC04MS5qcGc_/dz0yMTA" alt="" />

                                <div className='flex h-12  items-center justify-between'>
                                    <span className=' capitalize font-bold text-sm '>username</span>
                                    {!contentOpen?.men ? <FaAngleRight className='font-sm text-gray-400' /> :
                                        <FaAngleDown className='font-sm text-gray-400' />}
                                </div>
                            </div>
                            <div onClick={() => { setContentOpen((state) => ({ ...state, men: !state.men })) }} className='flex h-12  items-center justify-between'>
                                <span className=' capitalize font-bold text-sm '>men</span>
                                {!contentOpen?.men ? <FaAngleRight className='font-sm text-gray-400' /> :
                                    <FaAngleDown className='font-sm text-gray-400' />}
                            </div>
                            {contentOpen?.men && <div className='flex flex-col pl-4 transition-all  duration-300 ease-in'>
                                {
                                    mencatagory?.map((item, index) => (
                                        <div onClick={() => { handleSection(item) }} className='flex h-12  items-center justify-between'>
                                            <span className='text-sm p-2' key={index}>{item?.category}</span>
                                            <FaAngleRight className='font-sm text-gray-400' />
                                        </div>
                                    ))
                                }
                            </div>}
                            <div onClick={() => { setContentOpen((state) => ({ ...state, women: !state.women })) }} className='flex  h-12  items-center justify-between'>
                                <span className=' capitalize font-bold text-sm '>women</span>
                                {!contentOpen?.women ? <FaAngleRight className='font-sm text-gray-400' /> :
                                    <FaAngleDown className='font-sm text-gray-400' />}
                            </div>
                            {contentOpen?.women && <div className='flex flex-col pl-4 transition-all  duration-300 ease-in'>
                                {
                                    womenCatagory?.map((item, index) => (
                                        <div onClick={() => { handleSection(item) }} className='flex h-12  items-center justify-between'>
                                            <span className='text-sm p-2' key={index}>{item?.category}</span>
                                            <FaAngleRight className='font-sm text-gray-400' />
                                        </div>
                                    ))
                                }
                            </div>}
                            <div onClick={() => { setContentOpen((state) => ({ ...state, kid: !state.kid })) }} className='flex  h-12  items-center justify-between'>
                                <span className=' capitalize font-bold text-sm '>kid</span>
                                {!contentOpen?.kid ? <FaAngleRight className='font-sm text-gray-400' /> :
                                    <FaAngleDown className='font-sm text-gray-400' />}
                            </div>
                            {contentOpen?.kid && <div className='flex flex-col pl-4 transition-all  duration-300 ease-in'>
                                {
                                    mencatagory?.map((item, index) => (
                                        <div className='flex h-12  items-center justify-between'>
                                            <span className='text-sm p-2' key={index}>{item?.category}</span>
                                            <FaAngleRight className='font-sm text-gray-400' />
                                        </div>
                                    ))
                                }
                            </div>}
                        </div>
                    </div>
                </Box>
            </Drawer>
        </div >
    );
}