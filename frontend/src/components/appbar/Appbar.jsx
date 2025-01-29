import React from 'react'
import ThemeBtn from './ThemeBtn'
import { Link } from 'react-router-dom'

const Appbar = () => {
    return (
        <div className="border-b dark:border-b-slate-700 flex justify-between items-center bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 px-4 lg:px-8 py-4">
            <Link to={'/'}>
            <div className='flex items-center gap-2'>
                <span className='text-[2rem]'>🎭</span>
                <div className='text-black text-[2rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500  dark:from-pink-500 dark:to-blue-500'>
                    Truth or Dare
                </div>
            </div>
            </Link>
            <div>
                <ThemeBtn />
            </div>
        </div>
    )
}

export default Appbar