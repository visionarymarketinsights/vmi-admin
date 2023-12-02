import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { apiUrl, reCaptchaKey } from '../constants';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { notifySuccess, notifyError } from '../App';
import CreateEmail from '../utils/CreateEmail';
import axios from 'axios';


export default function BuyNowForm({ reportTitle, license }) {

    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors },
    } = useForm();


    const [captchaChecked, setCaptcha] = useState(false)
    const [captchaToken, setCaptchaToken] = useState('')


    function onChange(value) {
        console.log("Captcha value:", value);
        if (value) {
            setCaptcha(true)
            setCaptchaToken(value)
        }
    }
    function onErrored(value) {
        setCaptcha(false)
    }
    function onExpired(value) {
        setCaptcha(false)
    }

    function onSubmit(formData) {
        formData = { report: reportTitle, license: license.license, price: license.price, ...formData }
        console.log(CreateEmail('Buy Now', formData))
        if (captchaChecked) {
            window.grecaptcha.reset();

            const url = `${apiUrl}/email`;
            const data = {
                subject: 'Buy Now' + ' - ' + reportTitle,
                content: CreateEmail('Buy Now', formData),
                response_token: captchaToken,
            };

            axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    console.log(response.data);
                    reset();
                    notifySuccess("We'll contact you soon!!!");
                })
                .catch(error => {
                    console.error('Error:', error);
                    notifyError('Email us at congruencemarketresearch@gmail.com');
                });
        } else {
            notifyError('Check the reCaptcha checkbox')
        }
    }

    return (
        <section className="">
            <div className="">
                <div className='pb-4 text-xl font-semibold'>Buy Now Form</div>
                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
                        <div className="w-full">
                            <input {...register('name')} type="text" name="name" id="name" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Full Name" required />
                        </div>
                        <div className="w-full">
                            <input {...register('email')} type="text" name="email" id="email" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Business Email" required />
                        </div>
                        <div>
                            <select {...register('country')} id="country" defaultValue='Select Country' className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                <option>Select Country</option>
                                <option value="India">India</option>
                                <option value="US">US</option>
                                <option value="UK">UK</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </div>
                        <div>
                            <input {...register('phone')} type="text" placeholder='Phone Number' name="phone" id="phone" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " required />
                        </div>
                        <div>
                            <input {...register('address')} type="text" name="address" id="address" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Address" required />
                        </div>
                        <div>
                            <input {...register('city')} type="text" name="city" id="city" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="City" required />
                        </div>
                        <div>
                            <input {...register('state')} type="text" name="state" id="state" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="State" required />
                        </div>
                        <div>
                            <input {...register('zip')} type="text" name="zip" id="zip" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Zip Code" required />
                        </div>
                        <div className="flex items-center sm:col-span-2">
                            <ReCAPTCHA
                                sitekey={reCaptchaKey}
                                onChange={onChange}
                                onErrored={onErrored}
                                onExpired={onExpired}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <motion.button type="submit" className="inline-flex items-center justify-center gap-2 px-4 py-3 mt-6 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>

                            Submit Request <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 14l11 -11" />
                                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                            </svg>
                        </motion.button>
                    </div>
                </form>
            </div>
        </section>
    )
}
