import axios from 'axios';
import { motion } from 'framer-motion';
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { apiUrl, toCapitalCase } from '../constants';
import { notifyError } from '../App';
import moment from 'moment';

export default function LatestPressRelease() {

    const [pressReleaseList, setPressReleaseList] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}/press_release/latest?page=1&per_page=6`).then(res => {
            let reportList = res.data.data;
            if (reportList.length) {
                setPressReleaseList(reportList)
            } else {
                setPressReleaseList([])
                notifyError('No latest reports')
            }
        })
    }, []);

    return (
        <div className="py-12">
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
                <div className="max-w-4xl mx-auto text-center ">
                    <h2 className="mb-6 text-3xl font-extrabold text-slate-600">Latest Press Release</h2>

                    <div className='flex flex-col flex-wrap justify-between md:gap-0 md:flex-row'>
                        {pressReleaseList.map((res, i) => {
                            return (
                                <div key={i} className="p-4 md:w-1/2">
                                    {/* <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }}> */}
                                    <div className="text-left border rounded-md md:flex ">
                                        <div className='flex items-center justify-center md:w-2/5 rounded-s-md rounded-e-md md:rounded-e-none overflow-clip'>
                                            <img loading="lazy" src={res.cover_img} className='object-cover w-full h-48' alt="cover_img" />
                                        </div>
                                        <div className="relative flex flex-col p-4 text-sm md:w-3/5">
                                            <div className='text-xs font-semibold text-right'>
                                                {moment(res.created_date).format('Do MMM YYYY')}
                                            </div>
                                            <div className='py-2 font-semibold'>
                                                {toCapitalCase(res.url)}
                                            </div>
                                            <div className='h-12 mb-8 text-xs md:text-justify'>
                                                {res.summary.split('').filter((r, i) => i < 150).join('').split(' ').slice(0, -1).join(' ')}...
                                            </div>
                                            <div className='absolute bottom-[-10px] right-[35%] md:right-[20px] flex justify-center md:justify-end'>
                                                <Link to={`/press-release/${res.url}`}>
                                                    <button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                                                        Read Me
                                                    </button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    {/* </motion.div> */}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
