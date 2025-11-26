import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Trustus = () => {
  return (
    <>
    <section className='mt-[60px] '>
            <h1 className='text-[35px] text-[#004099] tracking-tight text-center font-bold'>Why <span className='text-[#004099]'>Homeowners</span> Trust Us</h1>
    
            <p className='text-center w-[90vw] md:w-[60vw] m-auto mt-5 mb-8'>
              Homeowners choose Summit Pro Roofing because we treat every roof like it’s our own. With a team of skilled technicians, years of hands-on experience, and a commitment to honesty, transparency, and quality, we make sure every project is done right the first time. From emergency repairs to full replacements, our clients know they can rely on us for timely, professional, and dependable service — because protecting your home is more than a job, it’s a promise.
            </p>
            <div className="chooseuscards flex flex-col md:flex-row md:flex-wrap mt-5 md:justify-center gap-5  ">
              <div className="card max-w-[80vw] m-auto md:m-0 md:w-[25vw] md:h-[45vh]  border border-gray-200 bg-gray-100 rounded-xl hover:scale-105 transition duration-100 ease-in-out cursor-pointer ">
                <Image className="m-auto" width={100} height={35} alt="trust" src="/trust.webp"></Image>
                <h1 className="font-bold text-[20px] text-center mt-2">Licensed & Insured</h1>
                <div className="w-[80%] text-center m-auto mt-2">Your home deserves professionals you can rely on — fully certified, protected, and committed to safe, top-quality roofing work.</div>
              </div>
    
              <div className="card max-w-[80vw] m-auto md:m-0 md:w-[25vw] md:h-[45vh]  border border-gray-200 bg-gray-100 rounded-xl hover:scale-105 transition duration-100 ease-in-out cursor-pointer">
                <Image className="m-auto " width={100} height={35} alt="trust" src="/exp.webp"></Image>
                <h1 className="font-bold text-[20px] text-center mt-2"> 10+ Years of Experience</h1>
                <div className="w-[80%] text-center m-auto mt-2">A decade of fixing, replacing, and protecting roofs across neighborhoods — we’ve seen it all and perfected what works.</div>
              </div>
    
              <div className="card max-w-[80vw] m-auto md:m-0 md:w-[25vw] md:h-[45vh]  border border-gray-200 bg-gray-100 rounded-xl hover:scale-105 transition duration-100 ease-in-out cursor-pointer">
                <Image className="m-auto " width={120} height={100} alt="trust" src="/servicetime.webp"></Image>
                <h1 className="font-bold text-[20px] text-center mt-2"> 24/7 Emergency Repairs</h1>
                <div className="w-[80%] text-center m-auto mt-2">When storms hit or leaks surprise you, our team’s ready anytime — because roofing problems don’t wait for office hours.</div>
              </div>
    
              <div className="card max-w-[80vw] m-auto md:m-0 md:w-[25vw] md:h-[45vh]  border border-gray-200 bg-gray-100 rounded-xl hover:scale-105 transition duration-100 ease-in-out cursor-pointer">
                <Image className="m-auto " width={100} height={100} alt="trust" src="/warranty.webp"></Image>
                <h1 className="font-bold text-[20px] text-center mt-2"> 5 Years Warranty</h1>
                <div className="w-[80%] text-center m-auto mt-2">We stand by our work long after it’s done. Every roof we build comes with a solid 2-year workmanship guarantee for total peace of mind.</div>
              </div>
    
            </div>
    
          </section>
    </>
  )
}

export default Trustus