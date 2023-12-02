import React, { Component, useState } from 'react'
import CountUpUtil from '../utils/CountUpUtil';

export default function Insights() {
    const [reportsPublished, setReportsPublished] = useState(1000);
    const [clientsServed, setClientsServed] = useState(250);
    const [consultingProjectsPerMonth, setConsultingProjectsPerMonth] = useState(50);
    const [repeatCustomers, setRepeatCustomers] = useState(35);
    const [analystHoursPerReport, setAnalystHoursPerReport] = useState(200);

    return (
        <div className="max-w-6xl px-4 py-8 mx-auto md:pt-10 sm:px-6" >
            <div className="max-w-4xl mx-auto text-center md:pb-10">
                <h2 className="mb-6 text-3xl font-extrabold text-slate-600">Insights</h2>
                <h2 className="text-xl font-semibold mb-14">Numbers tell the story; our data fuels your business growth.</h2>
                <div className='flex flex-col justify-between gap-10 md:gap-4 md:flex-row'>
                    <div className='flex flex-col gap-1 md:w-1/5'>
                        <div className='text-5xl font-bold'>
                            <CountUpUtil startValue={reportsPublished  - 50 } endValue={reportsPublished} />
                            <span className='text-4xl text-blue-500'>+</span></div>
                        <div className='text-sm font-semibold'>Reports Published</div>
                    </div>
                    <div className='flex flex-col gap-1 md:w-1/5'>
                        <div className='text-5xl font-bold'>
                            <CountUpUtil startValue={clientsServed / 1.6} endValue={clientsServed} />
                            <span className='text-4xl text-blue-500'>+</span></div>
                        <div className='text-sm font-semibold'>Clients Served</div>
                    </div>
                    <div className='flex flex-col gap-1 md:w-1/5'>
                        <div className='text-5xl font-bold'>
                            <CountUpUtil startValue={consultingProjectsPerMonth / 1.6} endValue={consultingProjectsPerMonth} />
                            <span className='text-4xl text-blue-500'>+</span></div>
                        <div className='text-sm font-semibold'>Consulting Projects <br /> </div>
                    </div>
                    <div className='flex flex-col gap-1 md:w-1/5'>
                        <div className='text-5xl font-bold'>
                            <CountUpUtil startValue={repeatCustomers / 1.6} endValue={repeatCustomers} />
                            <span className='text-4xl text-blue-500'>%</span></div>
                        <div className='text-sm font-semibold'>Repeat Customers</div>
                    </div>
                    <div className='flex flex-col gap-1 md:w-1/5'>
                        <div className='text-5xl font-bold'>
                            <CountUpUtil startValue={analystHoursPerReport / 1.6} endValue={analystHoursPerReport} />
                            <span className='text-4xl text-blue-500'>+</span></div>
                        <div className='text-sm font-semibold'>Analyst Hours <br /> per Report</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
