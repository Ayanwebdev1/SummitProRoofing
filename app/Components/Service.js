import React from 'react'
import { Home, ArrowRight, Hammer, Clock, SearchCheck } from 'lucide-react'
import Link from 'next/link'
import Chooseus from './Chooseus'
import Beforeaftergallery from './Beforeaftergallery'
import Faqs from './Faqs'
import Servicescomponent from './Servicescomponent'
import FadeUp from './FadeUp'

const Service = () => {
  return (
    <>
    <FadeUp>
    <header>
        <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center mt-[50px] '>Roofing You Can Rely On Every Shingle, Every Time</h1>
        <p className='w-[90vw] md:w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Your home deserves protection you can trust. From urgent repairs to full installations, SummitProRoofing delivers expert craftsmanship with honesty and care. No shortcuts. No pressure. Just roofs built to last and homeowners who sleep easy.</p>

        <div className='flex justify-center mt-5 mb-5'>
            <Link href="/getaquote"><button className='px-10 py-4 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold'>GET A FREE ESTIMATE</button></Link>
        </div>
    </header>
    <section>
        <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center mt-[80px]'>Our Roofing Services</h1>
        <p className='w-[90vw] md:w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Every home is unique. That’s why we offer tailored roofing services to meet your needs — whether it’s repairs, installation, or routine maintenance.</p>

        
            <Servicescomponent />
    </section>
    <section>
        <Chooseus />
    </section>

    <section>
        <h1 className='text-[35px] text-center text-[#004099] font-extrabold ml-7 mt-[50px] tracking-tight'>See the Transformation: Before & After</h1>
        <p className='w-[90vw] md:w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Every roof tells a story. From worn-out and leaky to strong and beautiful, our projects speak for themselves. Explore these real transformations and see why homeowners across Denver trust SummitProRoofing for results that last.</p>
        <Beforeaftergallery />
    </section>
    <section>
        <Faqs />
    </section>

    <section>
        <h1 className='text-[35px] text-center text-[#004099] font-extrabold md:ml-7 mt-[50px] tracking-tight'>Ready to Protect Your Home?</h1>
        <p className='w-[90vw] md:w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Request a free estimate today and experience roofing done right. Our team will guide you step by step — no pressure, just honest service.</p>

        <div className='flex justify-center mt-5 mb-5'>
            <Link href="/getaquote"><button className='px-10 py-4 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold'>GET A FREE ESTIMATE</button></Link>
        </div>
    </section>
    </FadeUp>
    </>
  )
}

export default Service