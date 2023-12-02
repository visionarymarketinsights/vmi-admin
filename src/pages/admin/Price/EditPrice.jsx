import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { notifySuccess, notifyError } from '../../../App';
import axios from 'axios';
import { apiUrl } from '../../../constants';
import { useNavigate, useParams } from "react-router-dom";


export default function EditPrice() {
    const { priceId } = useParams();

    const navigate = useNavigate();

    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        axios.get(`${apiUrl}/price/${priceId}`)
            .then(response => {
                const { license, price } = response.data.data;
                setValue('license', license);
                setValue('price', price);
            })
            .then(() => {
            })
            .catch(error => {
                console.error('Error:', error);
                notifyError('Failed to fetch Price data.');
            });
    }, [])


    const onSubmit = (formData) => {
        console.log(formData)
        axios.put(`${apiUrl}/price/${priceId}`, {
            ...formData,
            id: priceId,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                navigate('/price/list')
                notifySuccess("Price updated successfully!");
            })
            .catch(error => {
                console.error('Error:', error);
                notifyError('Something went wrong, please try again!');
            });
    }

    return (
        <div>
            <div className="max-w-6xl px-4 py-2 m-6 mx-auto border rounded-md md:py-12 md:pt-8 sm:px-6">
                <div className='pb-4 text-xl font-semibold'>Edit Price</div>
                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-2">
                        <div className="w-full">
                            <label htmlFor="license" className='text-sm'>License</label>
                            <input {...register('license')} type="text" name="license" id="license" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="License" required />
                        </div>

                        <div className="w-full">
                            <label htmlFor="price" className='text-sm'>Price</label>
                            <input {...register('price')} type="text" name="price" id="price" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Price" required />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="inline-flex items-center justify-center gap-4 px-8 py-3 mt-6 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                            Save
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 14l11 -11" />
                                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                            </svg>

                        </button>
                    </div>
                </form>
            </div >

        </div >
    )
}
