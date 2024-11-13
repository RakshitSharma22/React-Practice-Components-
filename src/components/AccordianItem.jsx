import React from 'react'

const AccordianItem = ({title,content,setSelected,index,selected}) => {
  return (
    <div>
     <div onClick={()=>{
        if(index==selected){
             setSelected(null)
        }
        else{
            setSelected(index)
        }
      
           
                
            
        
     }} className='flex justify-between cursor-pointer p-6 w-2/3 h-24 mb-4 shadow-lg bg-red-500'>
       <p>{title}</p>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>


     </div>
  {

    index===selected && <div className='flex justify-between p-6 w-2/3 h-24 bg-green-500'>
        <p>{content}</p>
     </div>
  }
     

    </div>
  )
}

export default AccordianItem