import React, { useState } from 'react'
import FAQItem from './FAQItem'


export const FAQ = ({FAQData}) => {
  
  return (
    <div className='ml-64  mt-10'>

        <h1 className='mb-8 text-4xl'>FAQ</h1>

        <div>

            {

                FAQData.map((item,index)=> <FAQItem key={index} title={item.title} content={item.content}  />)
            }
       

        </div>
    </div>
  )
}
