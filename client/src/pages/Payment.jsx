import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentCrd from './cards/PaymentCrd';
import { OrderDetails } from './utilities/OrderDetails';
import PaymentPaypal from './utilities/PaymentPaypal';

const Payment = () => {
    const navigate = useNavigate();
    const [selectedPayment, setSelectedPayment] = useState(null);

    const handlePaymentSelect = (paymentMethod) => {
        setSelectedPayment(paymentMethod);
    };

    const pageReload = () => {
        navigate("/payment");
    };

    return (
        <>
            <div className='pt-20 flex items-center mx-40 mt-10 font-bold text-lg'>
                <h1>Payment Method :</h1>
            </div>
            <div className='flex flex-col md:flex-row mx-20 mt-5 items-start gap-5 h-screen'>

                {/* Payment options */}
                <div className='bg-transparent shadow-lg gap-4 w-full flex-col flex justify-between md:w-2/3 h-1/2 '>
                    <button
                        className={`border border-gray-400 rounded-md p-2 ${selectedPayment === "Credit Card" ? "bg-gray-200" : ""}`}
                        onClick={() => handlePaymentSelect("Credit Card")}
                    >
                        Credit Card
                    </button>
                    <button
                        className={`border border-gray-400 rounded-md p-2 ${selectedPayment === "PayPal" ? "bg-gray-200" : ""}`}
                        onClick={() => handlePaymentSelect("PayPal")}
                    >
                        PayPal
                    </button>
                    {/* Add more payment methods as needed */}
                </div>

                {/* Selected payment method */}
                <div className='w-full md:w-1/3'>
                    {selectedPayment === "Credit Card" && <PaymentCrd />}
                    {selectedPayment === "PayPal" && <PaymentPaypal />}
                    {/* Add more components for each payment method */}
                </div>

                <OrderDetails pageReload={pageReload} />
            </div>
        </>
    );
};

export default Payment;
