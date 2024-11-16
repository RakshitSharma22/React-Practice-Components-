import React, { useEffect, useRef, useState } from 'react'

export const Carousel = () => {
    const [pictures,setPictures]=useState([])

    const [selected ,setSelected]=useState(0)
    let clock=useRef()

    function handleNext(){
        setSelected((prev)=>{
            if(prev==pictures.length-1){
                return 0
            }else{
                return prev+1
            }

        })
    }
    function handlePrev(){
      if(selected==0){
        setSelected(pictures.length-1)
      }else{
        setSelected(selected-1)
      }
      
        
    }

    
    useEffect(async ()=>{

        const response=await fetch("https://picsum.photos/v2/list")
        const data= await response.json()
        setPictures(data)
    },[])

    useEffect(()=>{
       clock.current= setInterval(handleNext,1000)

       return function(){
        clearInterval(clock.current)
       }
    },[])
  return (
    <div onMouseEnter={()=>{clearInterval(clock.current)}} onMouseLeave={()=>clock.current= setInterval(handleNext,1000)} className=' relative mt-8'>


        <div  onClick={handlePrev} className='w-12 p-8 text-center cursor-pointer rounded-md text-4xl absolute top-1/2 left-0 text-white bg-black'>{"<"}</div>
        <div  onClick={handleNext} className='w-12 p-8 text-center cursor-pointer rounded-md text-4xl absolute text-white top-1/2 right-0 bg-black' >{">"}</div>
        <img   className=' w-full h-[700px] object-cover' src={pictures[selected]?.download_url}/>
    </div>
  )
}
