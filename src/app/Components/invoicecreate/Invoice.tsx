import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'
import InvoicecreateCard from './InvoicecreateCard'

const Invoice = () => {



  return (
    <>
    <div className="rounded-lg border-2  lg:bg-[#FFFFFF] lg:shadow-xl  py-2  border-yellow-500 ">
      <div className=" px-2 lg:px-4 py-2 text-sm flex flex-row gap-5">
         <div>
         <p> Templates </p>
         </div>

         <div>
         <p className=''> Create Invoice </p>
          <div className='border-t-2 pt-5' />
         </div>

      </div>
      
      <div className="border-t-2" />
     
       <div>
          <InvoicecreateCard/>
       </div>
      
    </div>  

    </>
  )
}

export default Invoice