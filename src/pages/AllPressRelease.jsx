import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { apiUrl, toCapitalCase } from '../constants'
import axios from 'axios';
import { notifyError } from '../App';
import moment from 'moment';
import SEO from '../components/SEO';


export default function AllPressRelease() {

  const { categoryUrl } = useParams();
  const [category, setCategory] = useState({});
  const [categoryList, setCategoryList] = useState([]);
  const [pressReleaseList, setPressReleaseList] = useState([]);
  const [reportCount, setReportCount] = useState(0);
  const [page, setPage] = useState(1);

  const scrollToTop = () => {
    window.scroll(0, 0)
  }
  const getCategoryByCategoryUrl = () => {

    axios.get(`${apiUrl}/category/url/${categoryUrl}`).then(res => {
      setCategory(res.data.data)
    });
  }

  useEffect(() => {
    getCategoryByCategoryUrl();
    axios.get(`${apiUrl}/press_release/category/category_count`).then(res => {
      let rc = 0;
      let categoryList = res.data.data.map(res => {
        rc += res.count;
        return res;
      })
      setReportCount(rc)
      setCategoryList(categoryList)
    })
  }, [categoryUrl]);
  useEffect(() => {
    if (categoryUrl) {
      // axios.get(`${apiUrl}/press_release/category/${categories.find(res => res.id === Number(categoryUrl)).name}?page=${page}&per_page=8`).then(res => {
      axios.get(`${apiUrl}/press_release/category/${categoryUrl}?page=${page}&per_page=8`).then(res => {
        let reportList = res.data.data;
        if (reportList.length) {
          setPressReleaseList(reportList)
        } else {
          setPressReleaseList([])
          notifyError('No press releases for this category')
        }
      })
    }
  }, [categoryUrl, page]);
  return (
    <div>
      <SEO title={'Congruence Market Insights'} description={'Congruence Market Insights report gives an appropriate market research study of major industries like automotive, aerospace and defence, equipment and machinery, information and communications technology, semiconductors and more industry.'} keywords={'Market Research Reports, Industry Reports, Congruence Market Insights, Strategy and Stats, Business Consulting, Market Research Firm'} name='Congruence Market Research' type='article' />
      <div className="mb-6 md:text-3xl overflow-clip relative text-lg h-[200px] md:h-[300px] font-extrabold flex items-center justify-center bg-gradient text-white">
        {category.back_cover && <img loading="lazy" className='absolute flex items-center justify-center w-auto h-auto md:object-contain md:w-full' src={category.back_cover} alt="" />}
        {
          category.name &&
          <div className='z-10 px-4 py-2 bg-slate-800 drop-shadow'>
            {category.name.toUpperCase()}
          </div>
        }
      </div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-2 text-center md:pt-10 md:text-left">
          <div className="pb-12 mx-auto max-w-8xl md:pb-10">
            <div className='md:flex'>
              <div className=" md:w-[28%]">
                <div className='border rounded-md p-4 sticky top-[20px]'>
                  <div className="mb-2 text-xl font-semibold">By Industry</div>
                  <div className='flex flex-col gap-2'>
                    {categoryList.map((res, key) => {
                      return (
                        <Link key={key} to={`/all-press-release/${res.category_url}`} onClick={scrollToTop}>
                          <div className={`py-2 text-sm cursor-pointer hover:text-primary ${res.category_url === categoryUrl && 'text-primary'} ${key < categoryList.length - 1 && 'border-b-2'}`} key={key}>{res.category_name} ({res.count})</div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="mt-12 md:w-3/4 md:ml-8 md:mt-0">
                {/* <div className="px-4 mb-4 text-xl font-semibold">Press Release in {heading}</div> */}
                {pressReleaseList.map((res, key) => {
                  return (
                    // <Link to='/report' key={key}>
                    //   </Link>

                    <Link key={key} to={`/press-release/${res.url}`} onClick={scrollToTop}>
                      <div className='relative group' key={key} >
                        <div className='absolute top-[-10px] right-[20px] py-1 px-4 text-xs bg-primary text-white rounded-sm'>
                          {moment(res.created_date).format('Do MMM YYYY')}
                        </div>
                        <div className='flex flex-col gap-2 p-4 mb-6 border-2 rounded-md cursor-pointer group-hover:bg-slate-50'>
                          {/* <div className="font-semibold group-hover:text-primary group-hover:underline">{res.title.split(' ').filter((r, i) => i < 20).join(' ')}...</div> */}
                          <div className="font-semibold group-hover:text-primary group-hover:underline">{toCapitalCase(res.url)}</div>
                          <div className="text-xs">{res.summary}...</div>
                        </div>
                      </div>
                    </Link>
                  )
                })}

                <div className='text-center'>
                  <nav >
                    <ul className="inline-flex my-4 -space-x-px text-sm cursor-pointer">
                      <li>
                        <div onClick={() => (page - 1) > 0 ? setPage(page - 1) : ''} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</div>
                      </li>
                      {(page - 2) > 0 && <li>
                        <div onClick={() => setPage(page - 2)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page - 2}</div>
                      </li>}
                      {(page - 1) > 0 && <li>
                        <div onClick={() => setPage(page - 1)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page - 1}</div>
                      </li>}
                      <li>
                        <div className={`flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 `}>{page}</div>
                      </li>
                      {(page + 1) <= (reportCount / 8) && <li>
                        <div onClick={() => setPage(page + 1)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page + 1}</div>
                      </li>}
                      {(page + 2) <= (reportCount / 8) && <li>
                        <div onClick={() => setPage(page + 2)} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page + 2}</div>
                      </li>}
                      <li>
                        <div onClick={() => (page + 1) <= (reportCount / 8) ? setPage(page + 1) : ''} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
