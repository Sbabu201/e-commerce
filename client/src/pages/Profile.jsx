import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import Loader from './cards/Loader';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
const Profile = () => {
    const userId = localStorage.getItem("userId");
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true); // Add loading state
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        const getData = async () => {
            try {
                const user = await axios.get(`user/user/${userId}`);
                setUser(user.data.existUser);
                setLoading(false); // Set loading to false when data is fetched
            } catch (error) {
                console.log('error', error)
                toast.error('hello');
                setLoading(false); // Set loading to false even if there's an error
            }
        }

        getData();
    }, [userId]); // Add userId to dependencies

    if (loading) {
        return <Loader />; // Render the loader while data is being fetched
    }
    return (
        <>
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
                        <button className='bg-blue-300 w-1/3 h-full  rounded-md hover:bg-blue-400' onClick={handleOpen} >Edit</button>
                    </div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>

        </>
    )
}

export default Profile