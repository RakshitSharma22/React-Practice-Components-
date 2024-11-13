import { useState } from 'react'
import StarRating from './components/StarRating'
import { Accordian } from './components/Accordian'
import { accordionData } from './data/AccordianData'

function App() {

  
  

  return (
    <div className='h-screen w-full relative'>
      <Accordian accordionData={accordionData}/>
    </div>
  )
}






export default App
