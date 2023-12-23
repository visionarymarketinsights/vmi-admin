import React from 'react'
import { Link } from 'react-router-dom'
export default function Dashboard() {
    return (
        <div className='px-4 py-2 mx-auto md:py-12 max-w-7xl md:pt-8 sm:px-6 min-h-[90vh]'>
            <div className='pb-4 text-xl font-semibold'>Tables</div>
            <div className='flex gap-8'>
                <Link className='block w-1/6 max-w-sm p-4 text-center bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' to='/report/list'>
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Reports</h5>
                </Link>
                <Link className='block w-1/6 max-w-sm p-4 text-center bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' to='/press-release/list'>
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Press Releases</h5>
                </Link>
                <Link className='block w-1/6 max-w-sm p-4 text-center bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' to='/price/list'>
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Prices</h5>
                </Link>
            </div>
        </div>

    )
}
