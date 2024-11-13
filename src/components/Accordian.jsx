import React, { useState } from 'react'
import AccordianItem from './AccordianItem'

export const Accordian = ({accordionData}) => {
  const [selected,setSelected]=useState(null)
  return (
    <div className='ml-64  mt-10'>

        <h1 className='mb-8 text-4xl'>Accordian</h1>

        <div>

            {

                accordionData.map((item,index)=> <AccordianItem title={item.title} index={index} content={item.content} setSelected={setSelected} selected={selected} />)
            }
       

        </div>
    </div>
  )
}
