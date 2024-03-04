import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentCrd from './cards/PaymentCrd';
import { OrderDetails } from './utilities/OrderDetails';
import PaymentPaypal from './utilities/PaymentPaypal';
import CreditCard from './cards/CreditCard';
import { useSelector } from 'react-redux';

const Payment = () => {
    const navigate = useNavigate();
    const data = useSelector(state => state.bagreducer.bagItems);
    console.log('data', data)
    let mrp = data?.reduce((accumulator, currentItem) => {
        const priceNumeric = parseFloat(currentItem?.product?.price);
        return accumulator + priceNumeric;
    }, 0);;
    let discount = data?.reduce((accumulator, currentItem) => {
        const priceNumeric = parseFloat(currentItem?.product?.discount);
        return accumulator + priceNumeric;
    }, 0);

    const [selectedMethod, setSelectedMethod] = useState(null);

    const pageReload = () => {
        navigate("/payment");
    };

    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <div className='pt-20 flex flex-col md:flex-row m-20 items-start gap-5 min-h-fit'>
                <div className="container mx-auto p-4 w-2/3 ">
                    <h1 className="text-2xl font-bold mb-4">Select Payment Method</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <button
                            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${selectedMethod === 'upi' && 'bg-blue-700'}`}
                            onClick={() => setSelectedMethod('upi')}
                        >
                            UPI ID
                        </button>
                        <button
                            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${selectedMethod === 'creditCard' && 'bg-blue-700'}`}
                            onClick={() => setSelectedMethod('creditCard')}
                        >
                            Credit Card
                        </button>
                        <button
                            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${selectedMethod === 'paypal' && 'bg-blue-700'}`}
                            onClick={() => setSelectedMethod('paypal')}
                        >
                            PayPal
                        </button>
                    </div>

                    {/* Display payment form based on selected method */}
                    {selectedMethod === 'upi' && (
                        <div className="mt-4 p-4 border border-gray-300 rounded-md">
                            {/* UPI ID payment form */}
                            <h2 className="text-lg font-bold mb-2"><PaymentCrd item={mrp - discount} /></h2>
                            {/* Add your UPI ID payment form components here */}
                        </div>
                    )}

                    {selectedMethod === 'creditCard' && (
                        <div className="mt-4 p-4 border border-gray-300 rounded-md">
                            {/* Credit Card payment form */}
                            <h2 className="text-lg font-bold mb-2"><CreditCard item={mrp - discount} /></h2>
                            {/* Add your credit card payment form components here */}
                        </div>
                    )}

                    {selectedMethod === 'paypal' && (
                        <div className="mt-4 p-4 border border-gray-300 rounded-md">
                            {/* PayPal payment form */}
                            <h2 className="text-lg font-bold mb-2"><PaymentPaypal item={mrp - discount} /></h2>
                            {/* Add your PayPal payment form components here */}
                        </div>
                    )}
                </div>

                {<OrderDetails pageReload={pageReload} />}
            </div>
        </div>
    );
};

export default Payment;
