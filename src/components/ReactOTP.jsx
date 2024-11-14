import React, { useState,useRef } from 'react'

export const ReactOTP = ({otpLength=6}) => {
  const [inputFields,setInputFields]=useState(new Array(otpLength).fill(""))
  const [showBtn,setShowBtn]=useState(new Array(otpLength).fill(false))

  const ref=useRef([])
  function handleKeyDown(e,index){
   const key=e.key
   const newInputs=[...inputFields]
   const newshowBtn=[...showBtn]
   
   if(key=="Backspace"){
      newInputs[index]=""
      newshowBtn[index]=false
      
      setInputFields(newInputs)
      setShowBtn(newshowBtn)
      index>0 &&  ref.current[index-1].focus()
   }
   else if(isNaN(key)){
    return
   }
   else{
    newInputs[index]=key
    newshowBtn[index]=true
    setInputFields(newInputs)
    setShowBtn(newshowBtn)

    index<otpLength-1 &&  ref.current[index+1].focus()
   }

   
  
  
  

  }

  return (
    <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
    <h1 className='text-4xl m-4'>ReactOtp</h1>
     <div className='flex gap-2'>
        {

            inputFields.map((value,index)=> <input ref={(currentInput)=>{ref.current[index]=currentInput}} value={value} onKeyDown={(e)=>{handleKeyDown(e,index)}} key={index} className='p-2 w-16 h-16 text-2xl border-black border-2 shadow-lg rounded-md'  type="text" />
            )
        }
       
     </div>
  {  !showBtn.includes(false) && <button className='px-8 py-4 mt-4 translate-x-36 rounded-lg bg-slate-400'>Submit</button>}
    </div>
  )
}
