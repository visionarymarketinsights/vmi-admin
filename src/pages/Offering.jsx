import React, { Component } from 'react'
import SEO from '../components/SEO';

export default class Offering extends Component {
  render() {
    const scrollTo = (id) => {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
    return (
      <div>
        <SEO title={'Congruence Market Insights'} description={'Congruence Market Insights report gives an appropriate market research study of major industries like automotive, aerospace and defence, equipment and machinery, information and communications technology, semiconductors and more industry.'} keywords={'Market Research Reports, Industry Reports, Congruence Market Insights, Strategy and Stats, Business Consulting, Market Research Firm'} name='Congruence Market Research' type='article' />
        <div className='flex justify-between max-w-screen-xl gap-2 px-4 py-4 mx-auto md:gap-8 lg:py-12 lg:px-6'>
          <div className='w-1/3 duration-200 cursor-pointer md:hover:scale-95'>
            <div onClick={() => scrollTo('section-1')} className='overflow-clip relative md:p-8 p-4 text-xs md:text-3xl font-bold  rounded-md flex justify-center md:justify-end items-end text-white h-20 md:h-[360px]'>
              <img loading='lazy' className='absolute top-0 right-0 object-cover w-full h-full -z-10 ' src="/blurry/syndicate1.jpg" alt="" />
              <span className='z-10'>Syndicate</span>
            </div>
          </div>
          <div className='w-1/3 duration-200 cursor-pointer md:hover:scale-95'>
            <div onClick={() => scrollTo('section-2')} className='overflow-clip relative md:p-8 p-4 text-xs md:text-3xl font-bold  rounded-md flex justify-center md:justify-end items-end text-white h-20 md:h-[360px]'>
              <img loading='lazy' className='absolute top-0 right-0 object-cover w-full h-full -z-10 ' src="/others/custom.jpg" alt="" />
              <span className='z-10'>Custom</span>
            </div>
          </div>
          <div className='w-1/3 duration-200 cursor-pointer md:hover:scale-95'>
            <div onClick={() => scrollTo('section-3')} className='overflow-clip relative md:p-8 p-4 text-xs md:text-3xl font-bold  rounded-md flex justify-center md:justify-end items-end text-white h-20 md:h-[360px]'>
              <img loading='lazy' className='absolute top-0 right-0 object-cover w-full h-full -z-10 ' src="/others/consulting1.jpg" alt="" />
              <span className='z-10'>Consulting</span>
            </div>
          </div>
        </div>

        {/* <section id='section-3' className="bg-white -900">
          <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-12 lg:px-6">
            <div className="col-span-2 mb-8">
              <p className="text-lg font-medium text-purple-600 -500">Trusted Worldwide</p>
              <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl ">Trusted by over 600 million users and 10,000 teams</h2>
              <p className="font-light text-gray-500 sm:text-xl -400">Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>
              <div className="pt-6 mt-6 space-y-4 -700">
                <div>
                  <a href="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 -500 -purple-700">
                    Explore Legality Guide
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </a>
                </div>
                <div>
                  <a href="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 -500 -purple-700">
                    Visit the Trust Center
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
              <div>
                <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 -500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" /></svg>
                <h3 className="mb-2 text-2xl font-bold ">99.99% uptime</h3>
                <p className="font-light text-gray-500 -400">For Landwind, with zero maintenance downtime</p>
              </div>
              <div>
                <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 -500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                <h3 className="mb-2 text-2xl font-bold ">600M+ Users</h3>
                <p className="font-light text-gray-500 -400">Trusted by over 600 milion users around the world</p>
              </div>
              <div>
                <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 -500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>
                <h3 className="mb-2 text-2xl font-bold ">100+ countries</h3>
                <p className="font-light text-gray-500 -400">Have used Landwind to create functional websites</p>
              </div>
              <div>
                <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 -500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
                <h3 className="mb-2 text-2xl font-bold ">5+ Million</h3>
                <p className="font-light text-gray-500 -400">Transactions per day</p>
              </div>
            </div>
          </div>
        </section> */}
        <section id='section-1' className="bg-gray-50 -800">
          <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-12 lg:px-6">
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              <div className="text-gray-500 sm:text-lg -400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">Unlock industry reports and shared insights</h2>
                <p className="mb-2 font-light lg:text-xl">Access our syndicated reports for comprehensive industry insights, trends, and market analysis tailored for diverse sectors and businesses.</p>
                <ul role="list" className="space-y-5 my-7 -700">
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">
                      Detailed industry reports
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">
                      Trend analysis for market landscapes

                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">
                      Insights into specific sector data

                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">
                      Current market scenario evaluation

                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">
                      Customizable access to shared industry insights


                    </span>
                  </li>
                </ul>
                <p className="mb-2 font-light lg:text-xl">Syndicate report service offers ready-to-access industry reports, providing crucial insights for businesses navigating dynamic market environments</p>
              </div>
              <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src='/blurry/syndicate2.jpg' alt="dashboard feature image" />
            </div>
          </div>
        </section>
        <section id='section-2' className="bg-gray-50 -800">
          <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-12 lg:px-6">

            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/others/custom2.jpg'} alt="feature image 2" />
              <div className="text-gray-500 sm:text-lg -400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">Tailored research solutions for unique business needs</h2>
                <p className="mb-2 font-light lg:text-xl">Our custom research solutions offer personalized data analysis, in-depth market research, and strategic insights aligned with your specific business requirements.</p>
                <ul role="list" className="space-y-5 my-7 -700">
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">
                      Tailored market research solutions

                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">In-depth analysis based on client needs
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">Customized trend and market analysis
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">Strategic insights tailored to your business
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">Flexible research methodologies
                    </span>
                  </li>
                </ul>
                <p className="font-light lg:text-xl">Custom research service provides tailored insights, crafted to meet the unique needs of your business strategy and growth</p>
              </div>
            </div>
          </div>
        </section>
        <section id='section-3' className="bg-gray-50 -800">
          <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-12 lg:px-6">
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              <div className="text-gray-500 sm:text-lg -400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">Expert guidance for data-driven business strategies</h2>
                <p className="mb-2 font-light lg:text-xl">Engage with our consulting services for expert advice, strategic planning, and actionable recommendations based on our in-depth market analysis.</p>
                <ul role="list" className="space-y-5 my-7 -700">
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">
                      Strategic advisory services

                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">
                      In-depth market analysis

                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">
                      Actionable business recommendations

                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">
                      Expert guidance for growth strategies

                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 -400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-medium leading-tight text-gray-900 ">
                      Customized consulting solutions

                    </span>
                  </li>
                </ul>
                <p className="mb-2 font-light lg:text-xl">Consulting services offer expert guidance and actionable strategies derived from comprehensive market analysis to drive your business growth.</p>
              </div>
              <img loading="lazy" className="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src={'/others/consulting2.jpg'} alt="dashboard feature image" />
            </div>
          </div>
        </section>
      </div>

    )
  }
}
