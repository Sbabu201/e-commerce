import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../../store/reducres/orderReducer';
import { useDispatch, useSelector } from 'react-redux';

const PaymentPaypal = ({ item }) => {
    const bagItems = useSelector(state => state.bagreducer.bagItems);
    const dispatch = useDispatch();

    const user = localStorage.getItem("userId")
    const address = JSON.parse(localStorage.getItem("addressId"))
    const navigate = useNavigate()
    const [paypalEmail, setPaypalEmail] = useState('');
    // const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    // const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleEmailChange = (e) => {
        setPaypalEmail(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!paypalEmail.trim()) {
            setError('Please fill in all fields.');
            return;
        }
        // Show loader
        setLoading(true);

        // Reset input fields and error message
        setPaypalEmail('');
        setError('');
        // Hide loader and show payment success message

        toast.success("payment successfull")
        bagItems.forEach((item1) => {
            const formData = {
                user: user,
                address: address?._id,
                finalPrice: item1?.product.price - item1?.product?.discount,
                product: item1?.product?._id
            }
            dispatch(addOrder(formData));
            setLoading(false)

        })
        toast.success("order placed");
        setLoading(false);
        navigate("/order")
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">PayPal Payment</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="paypalEmail" className="block text-sm font-medium text-gray-700 mb-1">PayPal Email</label>
                    <input
                        type="email"
                        id="paypalEmail"
                        name="paypalEmail"
                        value={paypalEmail}
                        onChange={handleEmailChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter PayPal Email"
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

export default PaymentPaypal;
