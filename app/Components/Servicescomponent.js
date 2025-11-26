import React from 'react'
import { Hammer, InspectionPanel, SearchCheck, ShieldCheck, Replace, Home,ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

const Servicescomponent = () => {
    return (
        <>
            <div>
                <h1 className='text-orange-600 font-bold mt-[50px] text-center text-[20px]'>Our Expertise</h1>

                <h1 className='text-[#004099] font-extrabold text-center text-[35px] tracking-tighter'>QUALITY YOU CAN LOOK UP TO</h1>
                <p className='text-center text-[20px] mt-3 m-auto text-gray-500 md:w-[50vw]'>We don't just fix roofs; we build peace of mind. Our certified team delivers superior results on every project.</p>
            </div>

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

        </>
    )
}

export default Servicescomponent