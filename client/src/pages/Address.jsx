import React, { useEffect, useState } from 'react'
import AddressCard from './cards/AddressCard'
import { OrderDetails } from './utilities/OrderDetails'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import axios from "axios"
import { addAddress, getAllAddressLists } from '../store/reducres/addressReducer'
import { useDispatch, useSelector } from 'react-redux'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

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
const Address = () => {
    const [formData, setFormData] = useState({
        street: '',
        city: '',
        state: '',
        postalCode: '',
        contactNumber: '',
        altContactNumber: '',
        country: ''
    });
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    // console.log('addressId', addressId)
    const setValue = (id) => {
        setAddressId(id);
        localStorage.setItem("addressId", JSON.stringify(id));
    }
    const userId = localStorage.getItem("userId");
    const address = useSelector(state => state.addressReducer.addressItems)
    console.log('address[0]', address)
    const [addressId, setAddressId] = useState();
    // console.log('addressId', addressId)

    // const [user, setUser] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newForm = formData;
        newForm.user = userId
        dispatch(addAddress(newForm))
    }
    useEffect(() => {
        dispatch(getAllAddressLists())
        setAddressId(address[0]?._id);
        // console.log('addressId', addressId)
    }, [dispatch])
    // console.log('address', address)
    const navigate = useNavigate();
    // const arr = [1, 2, 3, 4, 5]
    const pageReload = () => {
        navigate("/payment");
    }
    useEffect(() => {

    }, [])
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
                                <h2 className="text-2xl font-bold mb-4">Address Form</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Street:</label>
                                        <input
                                            type="text"
                                            name="street"
                                            required
                                            value={formData.street}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">City:</label>
                                        <select
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                        >
                                            <option value="">Select City</option>
                                            <option value="keonjhar">keonjhar</option>
                                            <option value="bhadrak">bhadrak</option>
                                            <option value="bbsr">bbsr</option>
                                            <option value="balasore">balasore</option>
                                            {/* Add options for cities */}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">State:</label>
                                        <select
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                        >
                                            <option value="">Select State</option>
                                            <option value="odisha">odisha</option>
                                            <option value="kerala">kerala</option>
                                            <option value="kolkata">kolkata</option>
                                            <option value="delhi">delhi</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Postal Code:</label>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Contact Number:</label>
                                        <input
                                            type="text"
                                            name="contactNumber"
                                            value={formData.contactNumber}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Alternate Contact Number:</label>
                                        <input
                                            type="text"
                                            name="altContactNumber"
                                            value={formData.altContactNumber}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Country:</label>
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                        >
                                            <option value="">Select Country</option>
                                            <option value="india">india</option>
                                            {/* Add options for countries */}
                                        </select>
                                    </div>
                                    <button className='bg-orange-500 flex justify-center items-center w-full h-10 rounded-md text-white' type='submit' >submit</button>
                                </form>
                            </div>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
            <div className='min-h-screen'>
                <div className='pt-20 flex items-center justify-center md:justify-start md:mx-40 mt-10 font-bold text-lg'>
                    <h1>add address :</h1>
                    <button className='w-20 h-8 hover:bg-blue-500 bg-sky-200 mx-4 rounded-md' onClick={handleOpen} >ADD</button>
                </div>
                <div className=' flex flex-col md:flex-row md:mx-20 mt-5 items-start gap-5 h-full'>

                    <div className='bg-transparent  gap-4 w-full flex-col flex justify-between  md:w-2/3 h-full p-4 '>
                        {
                            address?.map((item, i) => (<AddressCard key={i} item={item} addressId={addressId} setValue={setValue} />))
                        }
                    </div>
                    <OrderDetails pageReload={pageReload} />
                </div>
            </div>
        </>
    )
}

export default Address

