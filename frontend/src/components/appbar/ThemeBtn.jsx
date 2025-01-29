import React from 'react'
import { useTheme } from '../../pages/contexts/ThemeProvider';

const ThemeBtn = () => {
    const {themeMode, lightTheme, darkTheme} = useTheme();

    const onChangeBtn = () => {
        if (themeMode === 'light') {
            darkTheme()
            console.log("dark")
        }
        if(themeMode === 'dark') {
            lightTheme()
            console.log("light")
        }
    }
    // darkMode: 'class', should add this in tailwind.config.js before theme or wherever i guess
  return (
    <div onClick={onChangeBtn} className={`rounded-full p-2 mr-2 flex justify-center items-center ${themeMode === "light" ? "bg-slate-100 border" : "bg-slate-800"}`}>
        {themeMode === "light" ? (
            <i className="bx bxs-sun text-cyan-700 text-[1.3rem]"></i>
        ) : (
            <i className="bx bxs-moon text-slate-600 text-[1.3rem]"></i>
        )}
    </div>
    // <div>
    //     {themeMode === 'light' ? (
    //         <div onClick={onChangeBtn} className='bg-slate-200 rounded-full p-2 flex justify-center'>
    //             <i className='bx bxs-moon text-[1.3rem]' style={{color:'#fff'}}></i>
    //         </div>
    //     ):(
    //         <div onClick={onChangeBtn} className='bg-slate-200 rounded-full p-2 flex justify-center'>
    //             <i className='bx bxs-sun text-[1.3rem] text-slate-400'></i>
    //         </div>
    //     )}

    // </div>
  )
}

export default ThemeBtn