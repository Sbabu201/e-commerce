import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../../store/reducres/orderReducer';

const CreditCard = ({ item }) => {
    const bagItems = useSelector(state => state.bagreducer.bagItems);
    const user = localStorage.getItem("userId")
    const address = JSON.parse(localStorage.getItem("addressId"))
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    // const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
    };

    const handleCvvChange = (e) => {
        setCvv(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cardNumber.trim() || !expiryDate.trim() || !cvv.trim()) {
            setError('Please fill in all fields.');
            return;
        }
        // Show loader
        setLoading(true);
        // Reset input fields and error message
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
        setError('');
        // setPaymentSuccess(true);
        // Reset success message after 2 seconds
        toast.success("payment successfull")
        bagItems.forEach((item1) => {
            const formData = {
                user: user,
                address: address?._id,
                finalPrice: item1?.product.price - item1?.product?.discount,
                product: item1?.product?._id
            }
            dispatch(addOrder(formData));

        })
        setLoading(false)
        toast.success("order placed");
        navigate("/order")

    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Credit Card Payment</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter Card Number"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="MM/YYYY"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={cvv}
                        onChange={handleCvvChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter CVV"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">amount</label>
                    <p
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-center">{item}</p>

                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>
            </form>

        </div>
    );
};

export default CreditCard;
