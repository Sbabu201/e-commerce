import React from 'react'
import login from "../assets/login4.jpg"
import git from "../assets/git1.png"
import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter1.png"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast'


const Signup = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");


    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleImage = async (e) => {
        setLoading(true)
        // console.log('first', e.target.files[0])
        setImage(e.target.files[0]);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "soumya");
        try {
            const resImage = await axios.post("https://api.cloudinary.com/v1_1/dwztqzfeh/image/upload", formData)
            // console.log('resImage', resImage.data)
            setImage(resImage.data.url);
            // console.log('image', image)
            setLoading(false);
        } catch (error) {
            console.log('error', error)

        }
    }

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await axios.post("user/signup", {
                email: input.email, password: input.password, name: input.name, profilePhoto: image,
            })
            console.log('data', user)
            if (user) {
                toast.success("Register successful");
                navigate("/login");
            }
        } catch (error) {
            console.log('error', error)
            toast.error(error.response.data.message);
            setInput({
                name: "",
                email: "",
                password: "",

            });
        }
    }
    return (
        <>

            <div className='flex flex-wrap justify-between items-center h-screen w-full ' style={{ backgroundImage: `url(${login})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='m-10 flex flex-col items-center  w-4/5 md:w-1/3 h-5/6 justify-between font-bold bg-gray-200 rounded-lg ' >
                    <form className='mt-8 flex flex-col text-c justify-center items-center  w-full  h-4/5' onSubmit={handleSubmit}>
                        <p className='w-full px-16  '>UserName :</p>
                        <input className='h-12 w-3/4 bg-transparent border-b-2 border-black my-4 outline-none rounded-md ' name="name" value={input.name} required onChange={handleChange} type="text" />
                        <p className='w-full px-16  '>ProfilePic :</p>
                        <input className='h-12 w-3/4 bg-transparent border-b-2 border-black my-4 outline-none rounded-md ' type="file" name="file" onChange={handleImage} required />
                        <p className='w-full px-16  '>Email :</p>
                        <input className='h-12 w-3/4 bg-transparent border-b-2 border-black my-4 outline-none rounded-md ' name="email" value={input.email} required onChange={handleChange} type="text" />
                        <p className='w-full px-16 '>Password :</p>
                        <input className='h-12 w-3/4 bg-transparent border-b-2 border-black my-4 outline-none rounded-md ' name="password" value={input.password} required onChange={handleChange} type="text" />
                        <button className={`relative bg-blue-300 w-3/4 h-12 rounded-md hover:bg-blue-400 ${loading ? 'hover:cursor-not-allowed' : ''}`} type="submit">
                            {loading && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                                </div>
                            )}
                            {loading ? '' : 'Signup'}
                        </button>
                    </form>

                    <div className='mt-2 flex h-2/5 w-full gap-20 text-center justify-center items-center'>
                        <p className=' w-1/3 text-sm h-2/5 rounded-md '>already have an account ?</p>
                        <button className='bg-blue-300 w-28 h-2/5 rounded-md hover:bg-blue-400' onClick={() => { navigate("/login") }}>Login here</button>
                    </div>
                    <div className='flex justify-between w-40 items-center h-1/5'>
                        <a className='w-1/6 rounded-md ' href="https://instagram.com/_babu.55_" target='blank'><img src={insta} alt="" /></a>
                        <a className='w-1/6 rounded-md ' href="https://github.com/Sbabu201" target='blank'><img src={git} alt="" /></a>
                        <a className='w-1/6 rounded-md ' href="https://twitter.com/_babu55_" target='blank'>  <img src={twitter} alt="" /></a>
                        <a className='w-1/6 rounded-md ' href="https://github.com/Sbabu201" target='blank'> <img src={facebook} alt="" /></a>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Signup
