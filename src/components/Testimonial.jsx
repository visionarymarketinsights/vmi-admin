
import React, { Component, useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

import 'swiper/css';


export default function Testimonial() {

    const [my_swiper, set_my_swiper] = useState({});
    const swiper = useSwiper();

    const [selectedTestimonial, setSelectedTestimonial] = useState(0);

    const testimonials = [
        { designation: 'Marketing Manager', company: 'Nestle SA', testimonialHeading: 'Critical Insights that had a transformative impact', testimonial: 'Congruence Market Insights provided invaluable market data that influenced our product strategies. Their accurate research helped increase our repeat customer rate by 15%, resulting in a notable revenue growth.', name: 'Name', selected: selectedTestimonial === 0 },
        { designation: 'Operations Director', company: 'VMware Inc.', testimonialHeading: 'Helped us Reach New Customers', testimonial: 'Congruence Market Insights\' precise data on client demographics enhanced our targeting strategy, leading to a significant increase in new users per week. Their insights directly impacted our market penetration.', name: 'Name', selected: selectedTestimonial === 1 },
        { designation: 'Business Development Lead', company: 'Randstad NV', testimonialHeading: 'Significant aid in formulating our expansion strategy', testimonial: 'Congruence Market Insights provided us with essential market analytics. Their insights into emerging markets guided our expansion strategy, resulting in a successful penetration and a vast increase in our client base.', name: 'Name', selected: selectedTestimonial === 2 },
    ]

    const changeSlider = (index) => {
        setSelectedTestimonial(index);
        my_swiper.slideTo(index);
    }

    return (
        <div className='max-w-6xl py-12 mx-auto md:pt-10 sm:px-6'>
            <div className='mb-4 text-3xl font-extrabold text-center text-slate-600'>Testimonials</div>
            <div className="items-center justify-center md:flex">
                <div className="mx-4 my-8 md:m-4 md:w-1/3">
                    {testimonials.map((testimonial, index) =>
                        <div key={index} onClick={() => { changeSlider(index) }} className={`flex items-center gap-4 mb-4 duration-500 border border-b-4 rounded-md shadow-sm hover:shadow-xl cursor-pointer ${testimonial.selected && 'border-b-primary'}`}>
                            {/* <div className="rounded-full h-14 w-14 bg-slate-300"></div> */}
                            <div className='mx-4 my-2'>
                                <div>{testimonial.company}</div>
                                <div>{testimonial.designation}</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='md:w-1/2'>
                    <Swiper
                        onInit={(ev) => {
                            set_my_swiper(ev)
                        }}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log('swiper')}
                    >

                        {testimonials.map((testimonial, index) =>
                            <SwiperSlide key={index}> <div className="flex flex-col gap-1 m-4 text-center md:text-left">
                                <div className="text-xl font-bold">{testimonial.testimonialHeading}.</div>
                                <div className="pb-4 italic">-{testimonial.designation}, {testimonial.company}</div>
                                <div className='-translate-x-2 -translate-y-2 w-36'>

                                </div>
                                <div className='md:text-justify -translate-y-2'>{testimonial.testimonial}</div>
                            </div></SwiperSlide>
                        )}
                    </Swiper>
                </div>

            </div>
        </div>
    )

}
