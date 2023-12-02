import React, { useState } from 'react'

export default function Faq({ faqs }) {
    const [selectedFaqId, setSelectedFaqId] = useState(null)
    return (
        <section className="py-10" >
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl italic font-bold leading-tight text-black underline underline-offset-8 sm:text-2xl ">Frequently Asked Questions</h2>
                </div>
                <div className="mx-auto mt-8 space-y-4 md:mt-8">
                    {
                        faqs.map((faq, key) => {
                            return (
                                <div key={key} onClick={() => key === selectedFaqId ? setSelectedFaqId(-1) : setSelectedFaqId(key)} className={`transition-all duration-200 bg-white border border-gray-200 ${key === selectedFaqId && 'shadow-md'} cursor-pointer `}>
                                    <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-4">
                                        <span className="flex mr-4 font-semibold text-left text-black"> {faq.question} </span>
                                        <svg className={`w-6 h-6 text-gray-400 ${key === selectedFaqId && 'rotate-180'} duration-300 transition-all`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className={`px-4 pb-5 sm:px-4 sm:pb-6 transition-all  duration-700 ${key !== selectedFaqId && 'hidden'}`}>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                            <span className="flex text-lg font-semibold text-black"> How can I make payment using Paypal? </span>
                            <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                            <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title className="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <div className>
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                                <span className="flex text-lg font-semibold text-black"> Can I cancel my plan? </span>
                                <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title className="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                            <span className="flex text-lg font-semibold text-black"> How can I reach to support? </span>
                            <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                            <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title className="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section >

    )
}

