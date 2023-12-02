import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { reCaptchaKey } from '../constants';
import { motion } from 'framer-motion';

export default function RequestDiscountForm({ onSubmit }) {
    function onChange() {

    }
    return (
        <section className="">
            <div className="">
                <div className='pb-8 text-xl font-semibold text-center'>Request Discount Form</div>
                <form action="#">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="w-full">
                            {/* <label htmlFor="name" className="block mb-2 text-sm font-medium">Full Name</label> */}
                            <input type="text" name="name" id="name" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Full Name" required />
                        </div>
                        <div className="w-full">
                            {/* <label htmlFor="brand" className="block mb-2 text-sm font-medium">Business Email</label> */}
                            <input type="text" name="brand" id="brand" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Business Email" required />
                        </div>
                        <div>
                            {/* <label htmlFor="category" className="block mb-2 text-sm font-medium">Designation</label> */}
                            <input type="text" name="designation" id="designation" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Designation" required />
                        </div>
                        <div>
                            {/* <label htmlFor="category" className="block mb-2 text-sm font-medium">Country</label> */}
                            <select id="category" defaultValue='Select Country' className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                <option>Select Country</option>
                                <option value="India">India</option>
                                <option value="US">US</option>
                                <option value="UK">UK</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </div>
                        <div>
                            {/* <label htmlFor="item-weight" className="block mb-2 text-sm font-medium">Phone Number</label> */}
                            <input type="text" placeholder='Phone Number' name="item-weight" id="item-weight" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " required />
                        </div>
                        <div className="w-full">
                            {/* <label htmlFor="price" className="block mb-2 text-sm font-medium">Company</label> */}
                            <input type="text" name="price" id="price" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Company" required />
                        </div>
                        <div className="sm:col-span-2">
                            {/* <label htmlFor="description" className="block mb-2 text-sm font-medium">Description</label> */}
                            <textarea id="description" rows={8} className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg outline-0 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your description here" defaultValue={""} />
                        </div>
                        <div className="flex items-center justify-center sm:col-span-2">
                            <ReCAPTCHA
                                sitekey={reCaptchaKey}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <motion.button type="submit" className="inline-flex items-center justify-center gap-2 px-4 py-3 mt-6 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        ></motion.button>
                    </div>
                </form>
            </div>
        </section>
    )
}
