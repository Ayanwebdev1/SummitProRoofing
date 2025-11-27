import React from 'react'
import { Home, ArrowRight, Hammer, Clock, SearchCheck } from 'lucide-react'
import Link from 'next/link'
import Chooseus from './Chooseus'
import Beforeaftergallery from './Beforeaftergallery'
import Faqs from './Faqs'

const Service = () => {
  return (
    <>
    <header>
        <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center mt-[50px] '>Roofing You Can Rely On Every Shingle, Every Time</h1>
        <p className='w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Your home deserves protection you can trust. From urgent repairs to full installations, SummitProRoofing delivers expert craftsmanship with honesty and care. No shortcuts. No pressure. Just roofs built to last and homeowners who sleep easy.</p>

        <div className='flex justify-center mt-5 mb-5'>
            <Link href="/getaquote"><button className='px-10 py-4 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold'>GET A FREE ESTIMATE</button></Link>
        </div>
    </header>
    <section>
        <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center mt-[80px]'>Our Roofing Services</h1>
        <p className='w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Every home is unique. That’s why we offer tailored roofing services to meet your needs — whether it’s repairs, installation, or routine maintenance.</p>

        <div className='servicecards flex justify-center flex-wrap mt-5 gap-5'>
                <div className="card hover:shadow-2xl cursor-pointer transition duration-100 ease-in-out hover:border-t-orange-600 border border-gray-200 rounded-lg w-[30vw] h-[20vw] shadow-lg">
                    <Home className='text-orange-500 ml-7 mt-7  bg-gray-200 p-2 rounded-lg' size={60} />
                    <h1 className='text-[25px] text-[#004099] font-extrabold ml-7 mt-2'>Roof Replacement</h1>
                    <p className='text-gray-500 ml-7 mt-2 '>Complete roof replacement using high-quality materials and expert installation for long-lasting protection.</p>

                    <div className='flex items-center gap-5 hover:underline ml-7 mt-4'>
                    <Link className='text-orange-500 font-bold ' href="/getaquote">GET A QUOTE </Link> 
                    <ArrowRight className='text-orange-600' size={20} />
                    </div>
                </div>
                <div className="card hover:shadow-2xl cursor-pointer transition duration-100 ease-in-out hover:border-t-orange-600 border border-gray-200 rounded-lg w-[30vw] h-[20vw] shadow-lg">
                    <Hammer className='text-orange-500 ml-7 mt-7  bg-gray-200 p-2 rounded-lg' size={60} />
                    <h1 className='text-[25px] text-[#004099] font-extrabold ml-7 mt-2'>Roof Repair</h1>
                    <p className='text-gray-500 ml-7 mt-2 '>Fast and reliable roof repair services to quickly fix leaks, cracks, and other roof damage for lasting protection.</p>

                    <div className='flex items-center gap-5 hover:underline ml-7 mt-4'>
                    <Link className='text-orange-500 font-bold ' href="/getaquote">GET A QUOTE </Link> 
                    <ArrowRight className='text-orange-600' size={20} />
                    </div>
                </div>
                <div className="card hover:shadow-2xl cursor-pointer transition duration-100 ease-in-out hover:border-t-orange-600 border border-gray-200 rounded-lg w-[30vw] h-[20vw] shadow-lg">
                    <Clock className='text-orange-500 ml-7 mt-7  bg-gray-200 p-2 rounded-lg' size={60} />
                    <h1 className='text-[25px] text-[#004099] font-extrabold ml-7 mt-2'>24/7 Emergency Roofing</h1>
                    <p className='text-gray-500 ml-7 mt-2 '>Round-the-clock emergency roofing services to handle any leaks or damage without interrupting your operations.</p>

                    <div className='flex items-center gap-5 hover:underline ml-7 mt-4'>
                    <Link className='text-orange-500 font-bold ' href="/getaquote">GET A QUOTE </Link> 
                    <ArrowRight className='text-orange-600' size={20} />
                    </div>
                </div>
                <div className="card hover:shadow-2xl cursor-pointer transition duration-100 ease-in-out hover:border-t-orange-600 border border-gray-200 rounded-lg w-[30vw] h-[20vw] shadow-lg">
                    <SearchCheck className='text-orange-500 ml-7 mt-7  bg-gray-200 p-2 rounded-lg' size={60} />
                    <h1 className='text-[25px] text-[#004099] font-extrabold ml-7 mt-2'>Inspection & Maintenance</h1>
                    <p className='text-gray-500 ml-7 mt-2 '>Professional roof inspections and maintenance to ensure your roof stays strong, safe, and fully functional.</p>

                    <div className='flex items-center gap-5 hover:underline ml-7 mt-4'>
                    <Link className='text-orange-500 font-bold ' href="/getaquote">GET A QUOTE </Link> 
                    <ArrowRight className='text-orange-600' size={20} />
                    </div>
                </div>

            </div>
    </section>
    <section>
        <Chooseus />
    </section>

    <section>
        <h1 className='text-[35px] text-center text-[#004099] font-extrabold ml-7 mt-[50px] tracking-tight'>See the Transformation: Before & After</h1>
        <p className='w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Every roof tells a story. From worn-out and leaky to strong and beautiful, our projects speak for themselves. Explore these real transformations and see why homeowners across Denver trust SummitProRoofing for results that last.</p>
        <Beforeaftergallery />
    </section>
    <section>
        <Faqs />
    </section>

    <section>
        <h1 className='text-[35px] text-center text-[#004099] font-extrabold ml-7 mt-[50px] tracking-tight'>Ready to Protect Your Home?</h1>
        <p className='w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Request a free estimate today and experience roofing done right. Our team will guide you step by step — no pressure, just honest service.</p>

        <div className='flex justify-center mt-5 mb-5'>
            <Link href="/getaquote"><button className='px-10 py-4 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold'>GET A FREE ESTIMATE</button></Link>
        </div>
    </section>
    </>
  )
}

export default Service