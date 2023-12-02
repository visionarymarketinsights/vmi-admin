import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as React from 'react';
import { Link } from 'react-router-dom'
import RequestSample from '../components/RequestSample'
import ContentLoading from '../components/ContentLoading'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Faq from '../components/Faq';
import { apiUrl } from '../constants';
import axios from 'axios';
import moment from 'moment';
import SEO from '../components/SEO';
import Methodology from '../components/Methodology';

export default function IndustryReport() {

  const [selectedTitle, setSelectedTitle] = useState('Description');
  const [report, setReport] = useState({});
  const [relatedReportList, setRelatedReportList] = useState([]);
  const [priceList, setPriceList] = useState([]);
  const [methodologyImg, setMethodologyImg] = useState('');

  const scrollToTop = (value) => {
    setSelectedTitle(value)
    window.scrollTo(0, 0);
  }

  const [discountFormOpen, setDiscountFormOpen] = useState(false);
  const handleDiscountFormOpen = () => setDiscountFormOpen(true);
  const handleDiscountFormClose = () => setDiscountFormOpen(false);

  const [license, setLicense] = useState('Single User License');
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');

  const { reportUrl } = useParams();

  useEffect(() => {
    getReport();
  }, [reportUrl])

  const getReport = () => {
    getPriceList();
    axios.get(`${apiUrl}/reports/url/${reportUrl}`)
      .then((res) => {
        setBlankImage(res.data.data);
        getRelatedReports(res.data.data);
        return res
      })
      .then((res) => {
        getReportImages(res.data.data.id);
      })
  }

  const getPriceList = () => {
    axios.get(`${apiUrl}/price/`).then(res => {
      setPriceList(res.data.data.reverse())
    })
  };

  const getRelatedReports = (repData) => {
    axios.get(`${apiUrl}/reports/category/${repData.category_url}?page=1&per_page=3`).then(res => {
      if (res.data.data.length) {
        let filterData = res.data.data.filter(res => res.id !== repData.id);
        filterData = filterData.filter((r, i) => i < 2);
        setRelatedReportList(filterData)
      } else {
        setRelatedReportList([])
      }
    })
  };


  const setBlankImage = (reportData) => {
    const parser = new DOMParser();

    // For Description
    const descriptionDoc = parser.parseFromString(reportData.description, "text/html");
    const imgToModify1 = descriptionDoc.querySelectorAll("img")[0];
    const imgToModify2 = descriptionDoc.querySelectorAll("img")[1];
    if (imgToModify1) {
      imgToModify1.setAttribute("src", '');
      imgToModify1.style.height = '0px';
    }
    if (imgToModify2) {
      imgToModify2.setAttribute("src", '');
      imgToModify2.style.height = '0px';
    }
    reportData.description = descriptionDoc.documentElement.outerHTML;

    // For Methodology
    const methodologyDoc = parser.parseFromString(reportData.methodology, "text/html");
    const methodologyImgToModify1 = methodologyDoc.querySelectorAll("img")[0];
    if (methodologyImgToModify1) {
      methodologyImgToModify1.setAttribute("src", '');
      methodologyImgToModify1.style.height = '0px';
    }
    reportData.methodology = methodologyDoc.documentElement.outerHTML;

    setReport(reportData)
  }

  const getReportImages = (repId) => {
    axios.get(`${apiUrl}/report_images/RP${repId}`).then((response) => {
      let image1 = response.data.data.find(res => res.img_name.includes('_1'))?.img_file || '';
      let image2 = response.data.data.find(res => res.img_name.includes('_2'))?.img_file || '';

      setImg1(image1);
      setImg2(image2);

      setMethodologyImg(response.data.data.find(res => res.img_name.includes('_MT1'))?.img_file || '');
      setDescriptionImages(image1, image2);
    })
  }
  const setDescriptionImages = (image1, image2) => {

    const descriptionImages = document.querySelectorAll('.description-content p span img');

    if (descriptionImages.length > 0) {
      descriptionImages[0].src = image1 ? image1 : img1;
      descriptionImages[0].style.height = 'auto';

      if (descriptionImages.length > 1) {
        descriptionImages[1].src = image2 ? image2 : img2;
        descriptionImages[1].style.height = 'auto';
      }
    }
  }

  const setMethodologyImgInDom = () => {
    setTimeout(() => {
      const methodologyImages = document.querySelectorAll('.methodology-content p span img');
      console.log(methodologyImages);
      if (methodologyImages.length > 0) {
        methodologyImages[0].src = methodologyImg ? methodologyImg : '';
        methodologyImages[0].style.height = 'auto';
      }
    })
  }

  // const updateImageSrc = (base64_1, base64_2, reportData) => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(reportData.description, "text/html");

  //   const imgToModify1 = doc.querySelectorAll("img")[0];
  //   if (imgToModify1) {
  //     imgToModify1.setAttribute("src", base64_1);
  //   }

  //   const imgToModify2 = doc.querySelectorAll("img")[1];
  //   if (imgToModify2) {
  //     imgToModify2.setAttribute("src", base64_2);
  //   }

  //   reportData.description = doc.documentElement.outerHTML;

  // }

  return (


    <div className='px-4 py-2 mx-auto md:py-12 max-w-7xl md:pt-0 sm:px-6'>

      <SEO title={report.meta_title} description={report.meta_desc} keywords={report.meta_keyword} name='Congruence Market Research' type='article' />
      {/* <div className='pt-8 pb-4 '> Congruence / {report.category} / <span className='text-primary'> {report.url}</span></div> */}

      <nav className="flex pt-8 pb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link to='/'>
              <div className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 ">
                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
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
              <Link to={`/category/${report.category_url}`}>
                <div className="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 ">{report.category_name}</div>
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
              </svg>
              <span className="text-sm font-medium text-gray-500 ms-1 md:ms-2 ">{report.url?.split('-').map(res => res[0].toUpperCase() + res.slice(1)).join(' ')}</span>
            </div>
          </li>
        </ol>
      </nav>


      <div className="pb-8 md:flex">
        <div className="mb-4 border rounded-md shadow-lg overflow-clip md:mb-0 md:w-3/4">
          <div className='items-center justify-between md:flex'>
            <div className="w-full">
              {/* <div className='p-4 text-white bg-[#2C3E50]'> */}
              <div className='p-4 font-semibold text-black bg-tertiary'>
                {
                  report.title &&
                  <div>
                    <div className='mb-2 text-justify'>{report.title}</div>
                    <div className='justify-end gap-4 py-4 text-sm text-center md:py-2 md:text-left md:flex '>
                      <div className='pr-4 border-black border-r-[1px]'><span>Published:</span> {moment(report.created_date).format('MMMM YYYY')}</div>
                      <div className='pr-4 border-black border-r-[1px]'><span>Report Code:</span> CGN{report.category_abr}{report.id}</div>
                      <div ><span>Pages:</span> {report.pages}</div>
                    </div>
                  </div>
                }
                {
                  !report.title &&
                  <div className="flex mb-2">
                    <div className="flex-shrink-0">
                      <span className="block w-12 h-12 bg-gray-200 rounded-full " />
                    </div>
                    <div className="w-full mt-2 ms-4">
                      <h3 className="h-4 bg-gray-200 rounded-full " style={{ width: '40%' }} />
                      <ul className="mt-5 space-y-3">
                        <li className="w-full h-4 bg-gray-200 rounded-full " />
                        <li className="w-full h-4 bg-gray-200 rounded-full " />
                        <li className="w-full h-4 bg-gray-200 rounded-full " />
                        <li className="w-full h-4 bg-gray-200 rounded-full " />
                      </ul>
                    </div>
                  </div>

                }
              </div>
              <div className={`${selectedTitle !== 'Request' && 'md:sticky top-0'} p-4 relative justify-between gap-2 bg-white md:flex`}>
                <div onClick={() => {
                  scrollToTop('Description');
                  setTimeout(() => {
                    setDescriptionImages(img1, img2)
                  })
                }} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Description' ? 'font-bold bg-primary text-white' : ''}`}>Description</div>
                <div onClick={() => scrollToTop('Table')} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Table' ? 'font-bold bg-primary text-white' : ''}`}>Table Of Content</div>
                <div onClick={() => scrollToTop('Highlights')} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Highlights' ? 'font-bold bg-primary text-white' : ''}`}>Highlights</div>
                <div onClick={() => { scrollToTop('Methodology'); setMethodologyImgInDom(); }} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Methodology' ? 'font-bold bg-primary text-white' : ''}`}>Methodology</div>
                <div onClick={() => scrollToTop('Request')} className={`codepen-button md:w-1/4 w-full md:mb-0 mb-4 text-sm box-border relative z-30 flex justify-center items-center border rounded-sm cursor-pointer ${selectedTitle === 'Request' ? 'font-bold' : ''}`}>
                  <span className='py-2 text-center'>Request Sample</span>
                </div>
              </div>
              <div className='px-4'>
                {selectedTitle === 'Description' &&
                  <div>
                    {!report.description && <ContentLoading />}
                    <div className='html-content description-content' dangerouslySetInnerHTML={{ __html: report.description }}></div>
                    {report.description && <Faq faqs={JSON.parse(report.faqs)} />}
                  </div>
                }
                {selectedTitle === 'Table' &&
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: report.toc }}></div>
                  </div>
                }
                {selectedTitle === 'Highlights' &&
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: report.highlights }}></div>
                  </div>
                }
                {selectedTitle === 'Methodology' &&
                  <div>
                    <Methodology />
                  </div>
                }
                {selectedTitle === 'Request' &&
                  <div>
                    <RequestSample reportTitle={report.url} enquiryType='Request Sample' closeModal={() => { }} />
                  </div>
                }
              </div>
            </div>
          </div >

        </div >
        <div className="relative md:pl-4 md:w-1/4">
          <div className='sticky top-[20px] flex flex-col gap-4 '>
            <div className='flex flex-col gap-2 p-4 border rounded-md shadow-lg '>
              {
                priceList.map((res, i) => {
                  return (
                    <div key={i} onClick={() => setLicense(res.license)} className={`flex justify-between cursor-default hover:text-primary ${license == res.license && 'text-primary'} p-1 rounded-sm`}>
                      <div className='flex gap-2'>
                        {res.license}</div>
                      <div className='font-bold'>{res.price}</div>
                    </div>
                  )
                })
              }
              <div className='flex flex-col gap-2 mt-2'>
                {/* <button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Buy Now</button>
                <button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Inquiry Before Buying</button> */}
                <Link to={`/buy-now/${report.id}/${priceList.find(res => res.license === license)?.id}`} className="inline-flex items-center justify-center font-semibold codepen-button">
                  <span className='flex items-center justify-center py-2 text-center'>
                    Buy Now
                  </span>
                </Link>
                <button type="button" onClick={handleDiscountFormOpen} className="inline-flex items-center justify-center px-8 py-2 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                  Request Discount
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-2 border rounded-md shadow-lg'>
              <div>
                <div className='px-4 py-2'>Related Reports</div>
                <div className=''>
                  {
                    relatedReportList.map((r, i) => {
                      return (
                        // <Link key={i} to={`/industry-report/${r.url}`} onClick={() => window.location.reload()}>
                        <Link key={i} to={`/industry-report/${r.url}`}>
                          <div className='flex flex-col px-4 py-2 border-t-2 cursor-pointer group hover:bg-slate-100'>
                            <div className="font-bold group-hover:text-primary">{r.url?.split('-').map(res => res[0].toUpperCase() + res.slice(1)).join(' ')}</div>
                            <div className="text-sm">{r.summary.split(' ').filter((s, j) => j < 15).join(' ')}...</div>
                          </div>
                        </Link>
                      )
                    })
                  }
                  {relatedReportList.length === 0
                    &&
                    <div className='flex flex-col px-4 py-2 border-t-2 cursor-pointer group hover:bg-slate-100'>
                      <div className="p-4 font-bold text-center group-hover:text-primary">No Report Found</div>
                      {/* <div className="text-sm">{r.summary.split(' ').filter((s, j) => j < 15).join(' ')}...</div> */}
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Modal
        open={discountFormOpen}
        onClose={handleDiscountFormClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          {/* <div className='flex items-center justify-center'>
            <div className=' m-2 py-6 px-10 w-[700px] rounded-md bg-white'>
              <div className="pb-2 mb-2 text-xl font-semibold text-center">Request Discount</div>
              <RequestSample reportTitle={report.url} enquiryType='Request Discount' closeModal={handleDiscountFormClose} />
            </div>
          </div> */}
          <div className='flex items-center justify-center'>
            <div className=' m-2 p-4 md:p-6 w-[350px] md:w-[700px] rounded-md bg-white'>
              <div className="flex justify-between pb-2 mb-2 text-xl font-semibold text-center">
                <div>Request Discount</div>
                <svg height={24} width={24} onClick={handleDiscountFormClose} className="cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#1C274C" /> </g></svg>
              </div>
              <div className="h-[82vh] overflow-auto text-sm md:text-md">
                <RequestSample reportTitle={report.url} enquiryType='Request Discount' closeModal={handleDiscountFormClose} />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div >
  )
}
