import { useState } from 'react'
import StarRating from './components/StarRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' text-4xl flex items-center mt-48 justify-center '>
     <StarRating number={5}/>
    </div>
  )
}






export default App
