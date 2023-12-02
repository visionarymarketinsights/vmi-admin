import {
  useEffect, useState
} from 'react';
import { Link, useParams } from 'react-router-dom';
import { apiUrl, categories } from '../constants'
import axios from 'axios';
import moment from 'moment';
import { notifyError } from '../App';
import SEO from '../components/SEO';

const SearchList = () => {

  const { keyword } = useParams();
  const [reportList, setReportList] = useState([])
  const [searchComplete, setSearchComplete] = useState(false)

  const scrollToTop = () => {
    window.scroll(0, 0)
  }

  useEffect(() => {
    axios.get(`${apiUrl}/reports/search?page=1&per_page=10&keyword=${keyword}`).then(res => {
      console.log(res)
      let reportList = res.data.data;
      setSearchComplete(true)
      if (reportList.length) {
        setReportList(reportList)
      } else {
        setReportList([])
        notifyError('No reports for this category')
      }
    })
  }, []);

  return (
    <div>
      <SEO title={'Congruence Market Insights'} description={'Congruence Market Insights report gives an appropriate market research study of major industries like automotive, aerospace and defence, equipment and machinery, information and communications technology, semiconductors and more industry.'} keywords={'Market Research Reports, Industry Reports, Congruence Market Insights, Strategy and Stats, Business Consulting, Market Research Firm'} name='Congruence Market Research' type='article' />
      {/* <div className="mb-6 md:text-3xl text-lg h-[200px] md:h-[300px] font-extrabold flex items-center justify-center bg-gradient  text-white">{category.toUpperCase()}</div> */}
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-2 text-center md:pt-10 md:text-left">
          <div className="pb-12 mx-auto max-w-8xl md:pb-10">
            <div className="mb-4 text-xl font-semibold">Search results for "{keyword}"</div>
            <div className='md:flex'>
              <div className="w-full mt-12 border md:mt-0">
                {reportList.map((res, key) => {
                  return (
                    <Link to={`/industry-report/${res.url}`} key={key}>
                      <div className='group' >
                        <div className={`flex flex-col gap-2 p-4 ${key !== reportList.length - 1 && 'border-b-2'} cursor-pointer group-hover:bg-slate-50`}>
                          <div className="font-semibold group-hover:text-primary group-hover:underline">{res.title.split('').filter((res, i) => i < 160).join('')}... </div>
                          <div className="">{res.summary}</div>
                          <div className='flex gap-4 text-sm'>
                            <div className='pr-4 border-r-2 border-gray'>{moment(res.created_date).format('MMMM YYYY')}</div>
                            <div className='pr-4 border-gray'>{res.pages} Pages</div>
                            {/* <div className='pr-4'>October 2023</div> */}
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
                {reportList.length == 0 && searchComplete &&
                  <div className='flex items-center justify-center w-full p-8 text-xl'>
                    No Result Found
                  </div>
                }
                {!searchComplete &&
                  <div className='flex items-center justify-center w-full p-8 text-xl'>
                    Loading
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
