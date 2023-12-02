import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { apiUrl, reCaptchaKey } from '../constants';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { notifySuccess, notifyError } from '../App';
import axios from 'axios';
import CreateEmail from '../utils/CreateEmail'


export default function RequestSample({ reportTitle, enquiryType, closeModal }) {
    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors },
    } = useForm();

    const [captchaChecked, setCaptchaChecked] = useState(false)
    const [captchaToken, setCaptchaToken] = useState('')

    function onChange(value) {
        console.log("Captcha value:", value);
        if (value) {
            setCaptchaChecked(true)
            setCaptchaToken(value)
        }
    }
    function onErrored(value) {
        setCaptchaChecked(false)
    }
    function onExpired(value) {
        setCaptchaChecked(false)
    }
    function onSubmit(formData) {
        formData = { report: reportTitle, ...formData }
        console.log(CreateEmail(enquiryType, formData))
        if (captchaChecked) {
            window.grecaptcha.reset();

            const url = `${apiUrl}/email`;
            const data = {
                subject: enquiryType + ' - ' + reportTitle,
                content: CreateEmail(enquiryType, formData),
                response_token: captchaToken,
            };

            axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    console.log(response.data);
                    closeModal()
                    setCaptchaChecked(false)
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
            <div className="my-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-4">
                        <div className="w-full">
                            <input {...register('name')} type="text" name="name" id="name" defaultValue={""} className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Full Name" required />
                        </div>
                        <div className="w-full">
                            <input {...register('email')} type="text" name="email" id="email" defaultValue={""} className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Business Email" required />
                        </div>
                        <div className="w-full">
                            <input {...register('company')} type="text" name="company" id="company" defaultValue={""} className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Company Name" required />
                        </div>
                        <div>
                            <input {...register('designation')} type="text" name="designation" id="designation" defaultValue={""} className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Job/Designation" required />
                        </div>
                        <div>
                            <select  {...register('country')} id="country" defaultValue='Select Country' className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                <option value="">Select Country</option>
                                <option value="India">India</option>
                                <option value="US">US</option>
                                <option value="UK">UK</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </div>
                        <div>
                            <input {...register('contact')} type="text" placeholder='Contact No' name="contact" id="contact" defaultValue={""} className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " required />
                        </div>

                        <div className="sm:col-span-2">
                            <textarea {...register('message')} id="message" defaultValue={""} rows={8} className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg outline-0 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Kindly specify your research needs." />
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
                            whileTap={{ scale: 0.9 }}
                        >
                            {/* <button > */}
                            Submit Request <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 14l11 -11" />
                                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                            </svg>

                            {/* </button> */}
                        </motion.button>
                    </div>
                </form>
            </div>
        </section>
    )
}
