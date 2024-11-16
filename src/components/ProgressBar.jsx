import React, { useEffect, useState } from 'react'

export const ProgressBar = () => {
    const [bar,setBar]=useState(0)
    

    useEffect(()=>{
        let clock=setInterval(()=>{
            setBar((prev)=>{
                if(prev==100){
                    return 100
                }else{
                    return prev+5
                }
            })
           
        },150)
        return function(){
            clearInterval(clock)
        }
    },[])

  
  return (
    <div className='w-full absolute top-1/2 ml-96 h-full'>
        <h1 className='mb-8 text-4xl'>Progress Bar</h1>
        <div className='w-1/2  relative rounded-2xl border-2  overflow-hidden shadow-md h-10'>
            <div style={{transform:`translate(${bar-100}%)`}} className='w-full  absolute bg-green-500  rounded-2xl border-2  shadow-md h-10' ></div>
        </div>
       
    </div>
  )
}
