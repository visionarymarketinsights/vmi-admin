import React, { useEffect, useState } from 'react'
import BuyNowForm from '../components/BuyNowForm'
import { useParams } from 'react-router-dom'
import { apiUrl } from '../constants';
import axios from 'axios';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import ReturnPolicy from '../components/ReturnPolicy';
import Terms from '../components/Terms';
import Privacy from '../components/Privacy';
import SEO from '../components/SEO';

export default function BuyNow() {


    const detailsList = [
        {
            id: 1,
            title: 'Return Policy',
        },
        {
            id: 2,
            title: 'Terms & Conditions',
        },
        {
            id: 3,
            title: 'Privacy',
        },
    ]


    const [detailsOpen, setDetailsOpen] = useState(false);
    const [details, setDetails] = useState(detailsList[0]);
    const handleDetailsOpen = (title) => {
        setDetails(detailsList.find(r => r.title === title))
        setDetailsOpen(true)
    };
    const handleDetailsClose = () => setDetailsOpen(false);

    const { reportId, buyId } = useParams();
    const [report, setReport] = useState({});
    const [license, setLicense] = useState({});

    useEffect(() => {
        axios.get(`${apiUrl}/reports/${reportId}`).then(res => {
            console.log(res.data.data);
            setReport(res.data.data);
            getPriceList();
        })
    }, [])


    const getPriceList = () => {
        axios.get(`${apiUrl}/price/`).then(res => {
            setLicense(res.data.data.find(res => res.id === Number(buyId)))
        })
    };


    return (
        <div className="p-4 mx-auto max-w-7xl sm:px-6">
            <SEO title={'Congruence Market Insights'} description={'Congruence Market Insights report gives an appropriate market research study of major industries like automotive, aerospace and defence, equipment and machinery, information and communications technology, semiconductors and more industry.'} keywords={'Market Research Reports, Industry Reports, Congruence Market Insights, Strategy and Stats, Business Consulting, Market Research Firm'} name='Congruence Market Research' type='article' />
            <div className="py-2 text-center md:pt-2 md:text-left">
                <div className="pb-12 mx-auto max-w-8xl md:pb-10">
                    <div className='flex flex-col gap-4 md:flex-row'>
                        <div className="border rounded-md shadow-md md:w-2/5">
                            <div className='relative p-4'>
                                <div className="mb-2 text-xl font-semibold">Order Summary</div>
                                <div className='flex flex-col justify-between py-2'>
                                    <div>
                                        <div className='flex flex-col items-center gap-4 md:items-start md:flex-row'>
                                            <img loading="lazy" src={report.cover_img} className='object-cover w-16 h-20 rounded-md bg-slate-500' alt="" />
                                            {/* <div className='object-fill font-semibold text-white rounded-md overflow-clip bg-slate-500'>
                                            </div> */}
                                            <div>
                                                <div className='font-semibold'>
                                                    {/* {report.title.split('2030')[0] + '2030'} */}
                                                    {report.url?.split('-').map(res => res[0].toUpperCase() + res.slice(1)).join(' ')}
                                                </div>
                                                <div className='flex justify-center pt-2 text-sm md:justify-normal'>
                                                    <div className='pr-4 border-r-2 border-slate-300'>
                                                        <div>Report ID</div>
                                                        {/* <div>CNG{getAbrByCategory(report.category)}{report.id}</div> */}
                                                        <div>CNG{report.category_url}{report.id}</div>
                                                    </div>
                                                    <div className='pl-4'>
                                                        <div>Category</div>
                                                        <div>{report.category}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='py-4 text-xs'>Format Type: PDF / WORD / EXCEL / PPT</div>
                                        <div className='flex flex-col pt-4 pb-20'>
                                            <div className='px-4 py-3 border-b-2'>
                                                Selected License
                                            </div>
                                            <div className='flex justify-between px-4 py-3 border-b-2'>
                                                <div>
                                                    {license.license}
                                                </div>
                                                <div className='font-bold'>
                                                    {license.price}
                                                </div>
                                            </div>
                                            <div className='flex justify-between px-4 py-3'>
                                                <div>
                                                    Total <span className='text-xs'>(Inclusive of all taxes)</span>
                                                </div>
                                                <div className='font-bold text-primary'>
                                                    {license.price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='relative flex justify-between gap-3 p-6 border rounded-sm '>
                                            <div className='absolute top-[-8px] text-xs right-0 w-full flex justify-center'>
                                                <div className='px-4 bg-white'>
                                                    We Accept all major credit cards
                                                </div>
                                            </div>
                                            <div>
                                                <img loading="lazy" src={"/payment-methods.webp"} alt="payments" />
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-center p-4 text-sm'>
                                            {detailsList.map((r, i) => {
                                                return <div key={i} onClick={() => handleDetailsOpen(r.title)} className={`px-3 cursor-pointer ${r.id < 3 && 'border-r-2'} `}>{r.title}</div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-md shadow-md md:w-3/5">
                            <div className='relative p-4'>
                                <div className='flex flex-col gap-2 '>
                                    <BuyNowForm license={license} reportTitle={report.url} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={detailsOpen}
                onClose={handleDetailsClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <div className='flex items-center justify-center'>
                        <div className=' m-2 py-6 px-6 w-[700px] rounded-md bg-white'>
                            <div className="flex justify-between pb-2 mb-2 text-xl font-semibold text-center">
                                <div></div>
                                <div>{details.title}</div>
                                <svg height={24} width={24} onClick={handleDetailsClose} className="cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#1C274C" /> </g></svg>
                            </div>
                            <div className='h-[82vh] overflow-auto whitespace-pre-wrap'>
                                {details.title === 'Return Policy' && <ReturnPolicy />}
                                {details.title === 'Terms & Conditions' && <Terms />}
                                {details.title === 'Privacy' && <Privacy />}
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>

    )
}
