import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../../store/reducres/orderReducer';

const PaymentCrd = ({ item }) => {
    console.log('payment', item)
    const bagItems = useSelector(state => state.bagreducer.bagItems);
    const user = localStorage.getItem("userId")
    const address = JSON.parse(localStorage.getItem("addressId"))
    // console.log('address._id', address._id)
    const [upiId, setUpiId] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleUpiIdChange = (e) => {
        setUpiId(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!upiId.trim()) {
            setError('Please fill in all fields.');
            return;
        }
        setLoading(true);
        setUpiId('');
        setError('');
        toast.success("payment successfull")
        bagItems.forEach((item1) => {
            const formData = {
                user: user,
                address: address?._id,
                finalPrice: item1?.product.price - item1?.product?.discount,
                product: item1?.product?._id,
                size: item1?.size

            }
            dispatch(addOrder(formData));
            setLoading(false)

        })
        setLoading(false);
        toast.success("order placed");
        navigate("/order")

    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">UPI ID Payment</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                    <input
                        type="text"
                        id="upiId"
                        name="upiId"
                        value={upiId}
                        onChange={handleUpiIdChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter UPI ID"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
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

export default PaymentCrd;
