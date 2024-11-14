import React, { useState } from 'react'

const FAQItem = ({title,content}) => {
    const [show,setShow]=useState(false)
  return (
    <div>
     <div  onClick={()=>{
        setShow(!show)
     }} className='flex justify-between cursor-pointer p-6 w-2/3 h-24 mb-4 shadow-xl hover:border-8 border-2 rounded-md'>
       <p>{title}</p>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>


     </div>
  {
    show &&  <div className='flex justify-between p-6 w-2/3 h-24 mb-4 bg-purple-100 shadow-xl border-2 rounded-md'>
    <p>{content}</p>
 </div>
  }

   
 
     

    </div>
  )
}

export default FAQItem