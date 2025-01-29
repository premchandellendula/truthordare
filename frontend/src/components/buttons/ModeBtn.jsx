import React from 'react'

const ModeBtn = ({label, onClick}) => {
    return (
        <button onClick={onClick} className='text-[1.5rem] px-6 py-1.5 rounded-full text-white bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-pink-500 hover:to-red-500 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 transition-all duration-300'>
            {label}
        </button>
    )
}

export default ModeBtn