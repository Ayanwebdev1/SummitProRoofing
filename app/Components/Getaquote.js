import React from 'react'
import Quoteform from './Quoteform'
import FadeUp from './FadeUp'

const Getaquote = () => {
  return (
    <>
    <FadeUp>
      <section>
        <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center mt-[50px]'>Quality Roofing Starts With an Honest Quote.</h1>
        <p className='w-[90vw] md:w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Share a few details and we’ll send you a clear estimate based on real needs, not guesswork.</p>
        <Quoteform />
      </section>
      </FadeUp>
    </>
  )
}

export default Getaquote