import React, { useState } from 'react';

const CheckoutPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('');

    return (
        <div className=" flex items-center justify-center p-4 md:p-6 lg:p-8">
            <div className="w-full max-w-3xl mx-auto bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Checkout</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Personal Information</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-600">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-gray-600">Address</label>
                                <textarea
                                    id="address"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="3"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Payment Method</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="payment-method"
                                    value="mobile-banking"
                                    checked={paymentMethod === 'mobile-banking'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="form-radio text-blue-500"
                                />
                                <label className="text-gray-700">Mobile Banking</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="payment-method"
                                    value="bank-transfer"
                                    checked={paymentMethod === 'bank-transfer'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="form-radio text-blue-500"
                                />
                                <label className="text-gray-700">Bank Transfer</label>
                            </div>
                            {paymentMethod === 'mobile-banking' && (
                                <div className="mt-4">
                                    <h4 className="text-xs md:text-sm font-medium text-gray-800">Mobile Banking Details</h4>
                                    <input
                                        type="text"
                                        placeholder="Mobile Banking ID"
                                        className="w-full text-xs md:text-sm px-3 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            )}

                            {paymentMethod === 'bank-transfer' && (
                                <div className="mt-4">
                                    <h4 className="text-xs md:text-sm font-medium text-gray-800">Bank Transfer Details</h4>
                                    <input
                                        type="text"
                                        placeholder="Bank Account Number"
                                        className="w-full text-xs md:text-sm px-3 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 text-xs md:text-sm py-2 md:py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Complete Purchase
                    </button>
                    <button
                        type="button"
                        className="mt-4 md:mt-0 text-blue-500 hover:underline"
                        onClick={() => window.history.back()}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
