import React, { Component } from 'react'

export default class AboutHome extends Component {
  render() {
    return (
      <div className='relative py-12 text-white overflow-clip'>
        <div className='absolute bottom-0 w-full h-full -z-10 bg-gradient'>
                <img loading='lazy' src="/abstract.jpg" alt="bgimg" className='hidden md:block' />
            </div>
        <div className='max-w-6xl mx-auto sm:px-6'>
          <div className="mb-10 text-3xl font-extrabold text-center ">About Us</div>
          <div className="text-center md:text-left md:flex">
            <div className="md:pr-8 md:w-1/2">
              {/* <div className="mb-4 text-2xl font-semibold">Lorem ipsum dolor sit </div> */}
              <div className='flex flex-col gap-4'>
                <div className='px-8 md:text-justify md:p-0'>Congruence Market Insights is a leading market research firm dedicated to providing in-depth analysis and strategic solutions for businesses across diverse industries.</div>
                <div className='px-8 md:text-justify md:p-0'>With a focus on delivering actionable insights, we offer comprehensive market intelligence, trend analysis, and forecasting to empower informed decision-making.</div>
                <div className='px-8 md:text-justify md:p-0'>Our expertise lies in uncovering market trends, consumer behavior, and competitive landscapes, enabling our clients to stay ahead in an ever-evolving business landscape.</div>
              </div>



            </div>
            <div className="p-10 pb-0 md:p-0 md:w-1/2">
              <img loading="lazy" className='object-cover w-full rounded-lg h-72 brightness-110' src={'/blurry/about_img.webp'} alt="about-img" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
