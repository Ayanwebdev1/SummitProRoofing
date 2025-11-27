import React from 'react'
import RoofingForm from './Formspree'
import Link from 'next/link'

const Contact = () => {
  return (
    <>
    <header>
        <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center mt-[50px]'>Let’s Fix Your Roofing Problems Together.</h1>
        <p className='w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Share your issue and we’ll walk you through the best solution, step by step.</p>
    <RoofingForm />
    </header>

    <section>
        <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center mt-[50px]'>Get a Free Roofing Quote</h1>
        <p className='w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Tell us what you need and our team will reach out with pricing and next steps. This form is for roof repair, installation, inspection, or storm damage requests.</p>
         <div className='flex mb-10 mt-5  justify-center'>
                                <Link href="/getaquote"><button className="bg-[#e85b30] hover:bg-[#d14e28] text-white font-bold py-4 px-18  transition cursor-pointer">
                                    GET A FREE QUOTE
                                </button></Link>
                                </div>
    </section>
    </>

  )
}

export default Contact