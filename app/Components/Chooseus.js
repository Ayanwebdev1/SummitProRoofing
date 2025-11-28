import React from 'react'
import { CheckCircle } from "lucide-react";

const Chooseus = () => {
    return (
        <>
        {/* bg-[#004099] */}
        <div className="w-full bg-[#094599] mt-[100px] flex flex-col md:flex-row items-center md:h-[85vh] h-auto mb-10 px-5 md:px-0">

    {/* LEFT SIDE */}
    <div className="left w-full md:w-[50%] px-0 md:px-10 mt-10 md:mt-0 text-center md:text-left">
        <h1 className="text-orange-500 font-bold">WHY CHOOSE US</h1>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter leading-tight">
            BUILT ON TRUST &
            <span className="block">INTEGRITY</span>
        </h1>

        <p className="text-white/90 text-[17px] md:text-[20px] mt-5">
            With over 20 years of experience, Summit Roofing has established itself
            as the region's premier roofing contractor. We stand behind every shingle.
        </p>

        {/* CHECKLIST */}
        <div className="mt-6 space-y-5">
            <div className="flex items-center justify-center md:justify-start gap-3">
                <CheckCircle className="text-orange-500" size={25} />
                <span className="text-white font-semibold text-[17px] md:text-[20px]">
                    licensed, bonded & insured
                </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
                <CheckCircle className="text-orange-500" size={25} />
                <span className="text-white font-semibold text-[17px] md:text-[20px]">
                    10-year material warranty
                </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
                <CheckCircle className="text-orange-500" size={25} />
                <span className="text-white font-semibold text-[17px] md:text-[20px]">
                    certified master elite contractors
                </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
                <CheckCircle className="text-orange-500" size={25} />
                <span className="text-white font-semibold text-[17px] md:text-[20px]">
                    0% financing available
                </span>
            </div>
        </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="right w-full md:w-[50%] grid grid-cols-2 gap-4 mt-10 md:mt-0">

        <div className="box w-full h-[20vh] border border-blue-200/10 bg-blue-200/10 rounded-lg flex flex-col justify-center">
            <h1 className="text-orange-500 font-bold text-[35px] text-center">10+</h1>
            <h1 className="text-center text-white">Years Experience</h1>
        </div>

        <div className="box w-full h-[20vh] border border-blue-200/10 bg-blue-200/10 rounded-lg flex flex-col justify-center">
            <h1 className="text-orange-500 font-bold text-[35px] text-center">5k+</h1>
            <h1 className="text-center text-white">Roofs Installed</h1>
        </div>

        <div className="box w-full h-[20vh] border border-blue-200/10 bg-blue-200/10 rounded-lg flex flex-col justify-center">
            <h1 className="text-orange-500 font-bold text-[35px] text-center">24/7</h1>
            <h1 className="text-center text-white">Emergency Service</h1>
        </div>

        <div className="box w-full h-[20vh] border border-blue-200/10 bg-blue-200/10 rounded-lg flex flex-col justify-center">
            <h1 className="text-orange-500 font-bold text-[35px] text-center">4.9</h1>
            <h1 className="text-center text-white">Average Rating</h1>
        </div>

    </div>
</div>


        </>
    )
}

export default Chooseus