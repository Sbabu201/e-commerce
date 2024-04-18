import React, { useState } from 'react'
import login from "../assets/login4.jpg"
import git from "../assets/git1.png"
import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter1.png"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast'
import { loginAuth, logoutAuth } from '../store/reducres/authReducer'
import { URL } from './utilities/serverlink';
import { useDispatch } from 'react-redux'
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await axios.post(`${URL}/user/login`, {
                email: input.email, password: input.password,
            });
            console.log('data', data)
            if (data) {
                localStorage.setItem('user', JSON.stringify(data?.data.info));
                localStorage.setItem('userId', data?.data?.info?._id);
                localStorage.setItem('token', data?.data.accessToken);
                dispatch(loginAuth());
                toast.success("login successful");
                navigate("/");
            }
        } catch (error) {
            console.log('error', error)
            toast.error(error?.message);
            setInput({
                email: "",
                password: ""
            });

        }
    }
    console.log('input', input)
    return (
        <>

            <div className='flex flex-wrap justify-between items-center h-screen w-full ' style={{ backgroundImage: `url(${login})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='md:m-10  flex flex-col items-center w-full md:w-1/3 h-3/5 text-xs md:text-base justify-between font-bold bg-gray-200 rounded-lg ' >
                    <form className='mt-8 flex flex-col justify-center items-center  w-full  h-4/5' onSubmit={handleSubmit}>
                        <p className='w-full md:px-16 px-4 '>UserName :</p>
                        <input className='h-12 w-full md:w-3/4 md:my-8 my-2 outline-none bg-transparent border-b-2 border-black rounded-md ' type="text" name="email" required value={input.email} onChange={handleChange} />
                        <p className='w-full  md:px-16 px-4'>Password :</p>
                        <input className='h-12 md:w-3/4 w-full md:my-8 my-2 outline-none bg-transparent border-b-2 border-black rounded-md ' type="text" name="password" required value={input.password} onChange={handleChange} />
                        <button className='bg-blue-300 w-3/4 h-1/6 mt-4 md:mt-0 rounded-md hover:bg-blue-400' type='submit'>login</button>
                    </form>

                    <div className='mt-2 flex h-2/5 w-full gap-20  justify-center items-center'>
                        <button className='bg-blue-300 w-40 md:h-[45%] h-[30%] rounded-md hover:bg-blue-400'>Forgot Password ?</button>
                        <button className='bg-blue-300 w-28 md:h-[45%]  h-[30%] rounded-md hover:bg-blue-400' onClick={() => { navigate("/signup") }}>Sign Up</button>
                    </div>
                    <div className='flex justify-between w-40 items-center h-1/5'>
                        <a className='w-1/6 rounded-md ' href="https://instagram.com/_babu.55_" target='blank'><img className='w-full h-6 rounded-md object-cover' src={insta} alt="" /></a>
                        <a className='w-1/6 rounded-md ' href="https://github.com/Sbabu201" target='blank'><img className='w-full h-6 rounded-md object-cover' src={git} alt="" /></a>
                        <a className='w-1/6 rounded-md ' href="https://twitter.com/_babu55_" target='blank'>  <img className='w-full h-6 rounded-md object-cover' src={twitter} alt="" /></a>
                        <a className='w-1/6 rounded-md ' href="https://github.com/Sbabu201" target='blank'> <img className='w-full h-6 rounded-md object-cover' src={facebook} alt="" /></a>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login
