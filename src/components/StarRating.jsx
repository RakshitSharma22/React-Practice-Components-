import Star from "./Star"
import { useState } from 'react'

function StarRating({number=5})
{
    const [selected,setSelected]=useState(null) 
    return <div >
        <h1 className="mb-8 text-red-400">Rating component</h1>
        <div className='flex'>
    {
        new Array(number).fill(0).map((item,index)=><Star key={index} index={index} selected={selected} setSelected={setSelected}/>)
    }
    </div>
    
    
    <h1 className="mt-8">Rating is : {selected}</h1>
    </div>
}


export default StarRating

