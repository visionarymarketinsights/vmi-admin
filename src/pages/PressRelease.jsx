import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { apiUrl, toCapitalCase } from '../constants';
import moment from 'moment';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import RequestSample from '../components/RequestSample';
import SEO from '../components/SEO';


export default function PressRelease() {
    const { pressReleaseUrl } = useParams();
    const [pressRelease, setPressRelease] = useState({});
    const [report, setReport] = useState({});
    const [formOpen, setFormOpen] = useState(false);
    const [enquiryType, setEnquiryType] = useState('Request Sample');
    const handleFormOpen = () => setFormOpen(true);
    const handleFormClose = () => setFormOpen(false);


    useEffect(() => {
        axios.get(`${apiUrl}/press_release/url/${pressReleaseUrl}`)
            .then((res) => {
                setPressRelease(res.data.data);
                getReportByReportId(res.data.data.report_id)
            })
    }, [])


    const getReportByReportId = (reportId) => {
        axios.get(`${apiUrl}/reports/${reportId}`).then((res) => {
            setReport(res.data.data);
        })
    }

    return (
        <div>
            <SEO title={pressRelease.meta_title} description={pressRelease.meta_desc} keywords={pressRelease.meta_keyword} name='Congruence Market Research' type='article' />

            <div className="max-w-6xl px-4 mx-auto sm:px-6">
                <div className='flex justify-between'>
                    <nav className="flex pt-8 pb-4" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link to='/'>
                                    <div className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 ">
                                        <svg className="w-3 h-3 me-1 md:me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                        <span className='hidden md:block'>Home</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                    </svg>
                                    <Link to={`/all-press-release/${pressRelease.category_url}`}>
                                        <div className="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 ">{pressRelease.category_name}</div>
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-500 ms-1 md:ms-2 ">{pressRelease.url && toCapitalCase(pressRelease?.url)}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="py-2 text-center md:pt-2 md:text-left">
                    <div className="pb-12 mx-auto max-w-8xl md:pb-10">
                        <div className='md:flex'>
                            <div className="w-full">
                                <div className='relative border rounded-lg shadow-lg'>
                                    <div className='absolute top-[-10px] right-[20px] text-xs md:text-sm lg:text-md py-1 px-4 bg-primary text-white rounded-sm'>
                                        {moment(pressRelease.created_date).format('Do MMM YYYY')}
                                    </div>

                                    <div className="px-4 py-6 mb-2 bg-[#2C3E50] text-white rounded-lg shadow-sm">
                                        <div className='text-xl font-semibold'>
                                            {pressRelease.title}
                                        </div>
                                        <div className='flex flex-col items-center justify-between mt-4 md:flex-row'>
                                            <div className='flex flex-col gap-4 md:flex-row'>
                                                <div className='flex flex-col gap-1 md:flex-row'>
                                                    <div>
                                                        Formats:
                                                    </div>
                                                    <div className='flex justify-center gap-1 md:justify-normal'>
                                                        <img loading="lazy" className='h-6' src={"/format_icons/pdf.png"} alt="pdf-icon" />
                                                        <img loading="lazy" className='h-6' src={"/format_icons/ppt.png"} alt="ppt-icon" />
                                                        <img loading="lazy" className='h-6' src={"/format_icons/xls.png"} alt="xls-icon" />
                                                    </div>
                                                </div>
                                                {report?.pages &&
                                                    <div>
                                                        Pages: {report?.pages}
                                                    </div>}
                                            </div>
                                            <div className='flex flex-col gap-4 mt-4 md:flex-row md:mt-0'>
                                                {pressRelease.report_id > 0 &&
                                                    <Link to={`/buy-now/${pressRelease.report_id}/1`}>
                                                        <button className="inline-flex items-center justify-center gap-4 py-2 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md w-44 text-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                                                            Buy Now
                                                        </button>
                                                    </Link>}
                                                <button onClick={handleFormOpen} className="gap-4 font-semibold text-white transition-all codepen-button w-44 ">
                                                    <span className='flex items-center justify-center py-2'>
                                                        Request Sample
                                                    </span>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 p-4 py-6 select-none'>
                                        <div dangerouslySetInnerHTML={{ __html: pressRelease.description }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={formOpen}
                onClose={handleFormClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <div className='flex items-center justify-center'>
                        <div className=' m-2 p-4 md:p-6 w-[350px] md:w-[700px] rounded-md bg-white'>
                            <div className="flex justify-between pb-2 mb-2 text-xl font-semibold text-center">
                                <div>{enquiryType}</div>
                                <svg height={24} width={24} onClick={handleFormClose} className="cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#1C274C" /> </g></svg>
                            </div>
                            <div className="h-[82vh] overflow-auto text-sm md:text-md">
                                <RequestSample reportTitle={report?.title || 'PR - ' + pressRelease.title} enquiryType={enquiryType} closeModal={handleFormClose} />
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div >
    );
}
