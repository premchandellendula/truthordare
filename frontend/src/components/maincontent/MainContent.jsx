import React from 'react'
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-[3.8rem]  mt-16 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 dark:from-pink-500 dark:to-blue-500'>Truth or Dare</h2>
            <p className='text-[1.5rem] mt-8 text-gray-700 dark:text-gray-300'>Experience the excitement of Truth or Dare, wherever you are!</p>

            <div className='mt-16 flex gap-8'>
                <Button label={"Quick Play"} onClick={(e) => {
                    e.preventDefault();
                    navigate('/quickplay')
                }} />
                <Button label={"Spin & Dare"} onClick={(e) => {
                    e.preventDefault();
                    navigate('/spinanddare')
                }} />
            </div>

        </div>
    )
}

function Button({label, onClick}){
    return (
        <button onClick={onClick} className='bg-gradient-to-tr from-orange-400 to-pink-400 hover:from-pink-400 hover:to-orange-400 text-white px-8 py-2 text-[1.5rem] font-medium rounded-full shadow-lg transform transition duration-200 hover:scale-105'>
            {label}
        </button>
    )
}

export default MainContent