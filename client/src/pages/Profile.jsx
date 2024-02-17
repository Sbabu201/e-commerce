import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
const Profile = () => {
    const userId = localStorage.getItem("userId");
    const [user, setUser] = useState({});
    const getData = async () => {
        try {
            const user = await axios.get(`user/user/${userId}`);
            setUser(user.data.existUser);
            // console.log('user', user)
        } catch (error) {
            console.log('error', error)
            toast.error('heloo');
        }
    }
    useEffect(() => {
        getData();
    }, [])

    console.log('user', user)
    // console.log('profile', userId)
    return (
        <div className='mt-32 flex items-center flex-col  gap-20'>
            <div className='flex justify-start mx-40 '>
                <h1 className=' px-20 font-bold text-lg uppercase'>Profile : hello {user.name}</h1>
            </div>
            <div className=' h-fit mb-10 b flex flex-col items-start justify-evenly w-2/3 border shadow-md font-medium '>
                <div className='flex w-full h-2/3  justify-between gap-10 p-10   items-center'>
                    <div className='flex w-2/3  justify-evenly text-lg' >
                        <div className='flex flex-col gap-4 justify-evenly'>
                            <p className='mx-4'>Email  </p>
                            <p className='mx-4'>name  </p>
                            <p className='mx-4'>Number  </p>
                            <p className='mx-4'>street  </p>
                            <p className='mx-4'>City  </p>
                            <p className='mx-4'>country  </p>
                            <p className='mx-4'>postalCode  </p>
                            <p className='mx-4'>state </p>
                        </div>
                        <div className='flex flex-col gap-4 justify-evenly'>
                            <p>{user?.email}</p>
                            <p>{user?.name}</p>
                            <p>{user?.address?.contactNumber}</p>
                            <p>{user?.address?.street}</p>
                            <p>{user?.address?.city}</p>
                            <p>{user?.address?.country}</p>
                            <p>{user?.address?.postalCode}</p>
                            <p>{user?.address?.state}</p>
                        </div>


                    </div>
                    <div className='w-1/3 rounded-lg '>
                        <img className=' rounded-full w-80 h-72' src={user ? user.profilePhoto : ""} alt="" />
                    </div>

                </div>
                <div className='w-full h-10 flex text-lg my-10  font-bold justify-center'>
                    <button className='bg-blue-300 w-1/3 h-full  rounded-md hover:bg-blue-400'>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Profile