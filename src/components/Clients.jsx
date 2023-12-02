import React from 'react'

export default function Clients() {

  const LOGOS = [
    <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/basf.png'} alt="basf" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/total.png'} alt="total" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/pfizer.png'} alt="pfizer" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/atos.png'} alt="atos" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/sanofi.png'} alt="sanofi" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/microsoft.png'} alt="microsoft" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/hcl.png'} alt="hcl" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/nestle.png'} alt="nestle" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/vmware.png'} alt="vmware" />,
    <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/ranstad.png'} alt="randstad" />,
  ];

  return (
    <div className="py-12 mx-auto md:py-10">
      <div className="">
        {/* Section header */}
        <div className="max-w-3xl pb-12 mx-8 text-center md:mx-auto md:pb-4">
          <h2 className="mb-8 text-3xl font-extrabold text-slate-600">Our Clients</h2>
          <h2 className="mb-4 h2">Trusted by over 500 companies all over the world</h2>
          <p className="text-gray-600 md:text-xl" data-aos="zoom-y-out">Trusted by industry leaders, our insights drive success, empowering businesses to thrive in dynamic market landscapes with precision.</p>
        </div>
        {/* <div className="w-full mt-6 mb-3">
          <div className="relative w-auto m-auto overflow-hidden ">
            <ul className="flex w-[calc(250px*10)] animate-scroll">
              <li className='w-[250px]'>
                <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/basf.png'} alt="basf" />
              </li>
              <li className='w-[250px]'>
                <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/total.png'} alt="total" />
              </li>
              <li className='w-[250px]'>
                <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/pfizer.png'} alt="pfizer" />
              </li>
              <li className='w-[250px]'>
                <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/atos.png'} alt="atos" />
              </li>
              <li className='w-[250px]'>
                <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/sanofi.png'} alt="sanofi" />
              </li>
              <li className='w-[250px]'>
                <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/microsoft.png'} alt="microsoft" />
              </li>
              <li className='w-[250px]'>
                <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/hcl.png'} alt="hcl" />
              </li>
              <li className='w-[250px]'>
                <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/nestle.png'} alt="nestle" />
              </li>
              <li className='w-[250px]'>
                <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/vmware.png'} alt="vmware" />
              </li>
              <li className='w-[250px]'>
                <img loading="lazy" className='pointer-events-none w-36' src={'/client_logos/ranstad.png'} alt="randstad" />
              </li>
            </ul>
          </div>
        </div> */}
        {/* <div className="select-none mt-6 mb-3 relative m-auto w-50vw overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']"> */}
        <div className="select-none mt-6 mb-3 relative m-auto w-50vw overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px]  before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100  after:content-['']">
          <div className="animate-infinite-slider flex w-[calc(500px*10)]">
            {LOGOS.map((logo, index) => (
              <div
                className="slide flex w-[250px] items-center justify-center"
                key={index}
              >
                {logo}
              </div>
            ))}
            {LOGOS.map((logo, index) => (
              <div
                className="slide flex w-[250px] items-center justify-center"
                key={index}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>


      </div>
    </div >
  )
}
