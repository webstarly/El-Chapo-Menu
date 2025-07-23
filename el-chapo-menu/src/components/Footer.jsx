import React from 'react'
import { FaAt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-center border z-50 w-full h-20 bg-slate-200 dark:bg-slate-900 text-black dark:text-white shadow-md dark:shadow-sm dark:shadow-gray-800">
      <h2 className='text-sm flex'>Copyright <i className='p-1 h-5 w-5'> <FaAt/> </i> 2025</h2>
    </div>
  )
}

export default Footer