import React from 'react'
import { CheckCircle } from "lucide-react";

const Chooseus = () => {
    return (
        <>
            {/* <div className='w-full h-[85vh] border bg-[#004099] mt-[100px]'>
                <div className="left w-[50%]">
                    <h1 className='text-orange-500 font-bold mt-20 ml-10'>WHY CHOOSE US</h1>
                    <h1 className='text-4xl font-extrabold text-white ml-10 tracking-tighter'>BUILT ON TRUST &
                        <span className='block'>INTEGRITY</span>
                    </h1>

                    <p className='text-white/90 ml-10 text-[20px] mt-5'>With over 20 years of experience, Summit Roofing has established itself as the region's premier roofing contractor. We stand behind every shingle.</p>

                    <div className=''>
                        <div className='flex items-center ml-10 gap-3 mt-5'>

                            <CheckCircle className='text-orange-600' size={25} />
                            <span className='text-white font-semibold text-[20px]'>Licensed, Bonded & Insured</span>
                        </div>
                        <div className='flex items-center ml-10 gap-3 mt-5'>

                            <CheckCircle className='text-orange-600' size={25} />
                            <span className='text-white font-semibold text-[20px]'>10-Year Material Warranty</span>
                        </div>
                        <div className='flex items-center ml-10 gap-3 mt-5'>

                            <CheckCircle className='text-orange-600' size={25} />
                            <span className='text-white font-semibold text-[20px]'>Certified Master Elite Contractors</span>
                        </div>
                        <div className='flex items-center ml-10 gap-3 mt-5'>

                            <CheckCircle className='text-orange-600' size={25} />
                            <span className='text-white font-semibold text-[20px]'>0% Financing Available</span>
                        </div>
                    

                </div>
                <div className="right w-[50%]">
                    <div className="box w-[10vw] h-[10vh] border">

                    </div>
                </div>
                </div>
            </div> */}
            <div className='w-full h-[85vh] bg-[#004099] mt-[100px] flex items-center mb-10 '>

                {/* LEFT SIDE */}
                <div className="left w-[50%] px-10">
                    <h1 className='text-orange-500 font-bold '>WHY CHOOSE US</h1>

                    <h1 className='text-4xl font-extrabold text-white tracking-tighter'>
                        BUILT ON TRUST &
                        <span className='block'>INTEGRITY</span>
                    </h1>

                    <p className='text-white/90 text-[20px] mt-5'>
                        With over 20 years of experience, Summit Roofing has established itself as the region's premier roofing contractor. We stand behind every shingle.
                    </p>

                    {/* CHECKLIST */}
                    <div className='mt-6 space-y-5'>

                        <div className='flex items-center gap-3'>
                            <CheckCircle className='text-orange-600' size={25} />
                            <span className='text-white font-semibold text-[20px]'>
                                licensed, bonded & insured
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <CheckCircle className='text-orange-600' size={25} />
                            <span className='text-white font-semibold text-[20px]'>
                                10-year material warranty
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <CheckCircle className='text-orange-600' size={25} />
                            <span className='text-white font-semibold text-[20px]'>
                                certified master elite contractors
                            </span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <CheckCircle className='text-orange-600' size={25} />
                            <span className='text-white font-semibold text-[20px]'>
                                0% financing available
                            </span>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="right w-[50%] grid grid-cols-2 gap-2  gap-x-0 ">
                    <div className="box w-[20vw] h-[20vh] border border-blue-200/10 bg-blue-200/10 rounded-lg ">
                        <h1 className='text-orange-600 font-bold text-[35px] text-center mt-4'>10+</h1>

                        <h1 className='text-center text-white '>Years Experience</h1>
                    </div>
                    <div className="box w-[20vw] h-[20vh] border border-blue-200/10 bg-blue-200/10 rounded-lg ">

                        <h1 className='text-orange-600 font-bold text-[35px] text-center mt-4'>5k+</h1>

                        <h1 className='text-center text-white '>Roofs Installed</h1>
                    </div>
                    <div className="box w-[20vw] h-[20vh] border border-blue-200/10 bg-blue-200/10 rounded-lg ">
                        <h1 className='text-orange-600 font-bold text-[35px] text-center mt-4'>24/7</h1>

                        <h1 className='text-center text-white '>Emergency Service</h1>
                    </div>
                    <div className="box w-[20vw] h-[20vh] border border-blue-200/10 bg-blue-200/10 rounded-lg ">
                        <h1 className='text-orange-600 font-bold text-[35px] text-center mt-4'>4.9</h1>

                        <h1 className='text-center text-white '>Average Rating</h1>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Chooseus