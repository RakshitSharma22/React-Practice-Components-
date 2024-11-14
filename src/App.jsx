
import { Accordian } from './components/Accordian'
import { FAQ } from './components/FAQ'
import { ReactOTP } from './components/ReactOTP'
import { FAQData, accordionData } from './data/AccordianData'


function App() {

  
  

  return (
    <div className='h-screen w-full relative'>
    {/* <Accordian accordionData={accordionData}/>
    <FAQ FAQData={FAQData}/> */}
    <ReactOTP otpLength={10}/>
    </div>
  )
}






export default App
