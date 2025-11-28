import React from 'react'
import Beforeaftergallery from './Beforeaftergallery'
import Scrollgallery from './Scrollonggallery'
import Image from 'next/image'
import Link from 'next/link'
import Chooseus from './Chooseus'
import Trustus from './Trustus'
import Testimonials from './Testimonials'
import FadeUp from './FadeUp'

const Projects = () => {
    return (
        <>
        <FadeUp>
            <header className='mt-[50px]'>
                <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center'>Our Work, Your Peace of Mind</h1>
                <p className='w-[90vw] md:w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>A collection of the roofs we’ve repaired, replaced, and restored — each one crafted with the same care we’d give our own home.</p>
            </header>

            <section className='mt-[50px]'>
                <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center'>Our Projects</h1>
                <p className='w-[90vw] md:w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Browse our recent roofing work across Denver — every project reflects our commitment to durability, safety, and craftsmanship.</p>
                <Beforeaftergallery />
            </section>

            <section className='mt-[50px]'>
                <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center'>Ongoing Projects</h1>
                <p className='w-[90vw] md:w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>From storm repairs to full replacements, here’s a glimpse of the homes we’re currently restoring with care, precision, and transparency.</p>
                <Scrollgallery />
            </section>

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

            <section className='mt-[50px]'>
                <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center'>Hear From Our Happy Homeowners</h1>
                <p className='w-[90vw] md:w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Nothing speaks louder than the words of those we’ve served. Our clients share their experiences working with Summit Pro Roofing — from initial consultation to the final nail — highlighting our professionalism, quality, and dedication to protecting their homes. These testimonials reflect the trust and satisfaction we aim to deliver on every project.</p>

                <div className="reviwcards flex-wrap flex-col md:flex-row flex justify-center mt-[50px] gap-5 mb-5">
                
                                    <div className="rcard w-[90vw] m-auto md:m-0
                                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                                        <Image className="m-auto" width={150} height={150} alt="man" src="/rw1.webp"></Image>
                                        <h1 className="font-bold text-center text-[20px]">David Johnson</h1>
                                        <p className="text-center w-[90%] m-auto">These guys did a flawless job replacing my old roof. Super professional, on time, and kept me updated throughout the project. Highly recommend them!</p>
                                        <Image className="m-auto" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                                    </div>
                
                                    <div className="rcard w-[90vw] m-auto md:m-0
                                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                                        <Image className="m-auto" width={90} height={150} alt="man" src="/rw2.webp"></Image>
                                        <h1 className="font-bold text-center text-[20px]">Mark Stevens</h1>
                                        <p className="text-center w-[90%] m-auto">Had a serious leak during heavy rain — they came within hours and fixed it perfectly. Honest pricing and great communication!</p>
                                        <Image className="m-auto mt-5" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                                    </div>
                
                                    <div className="rcard w-[90vw] m-auto md:m-0
                                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                                        <Image className="m-auto" width={120} height={150} alt="man" src="/rw3.webp"></Image>
                                        <h1 className="font-bold text-center text-[20px]">Michael Reed</h1>
                                        <p className="text-center w-[90%] m-auto">Top-notch service from start to finish. The crew was respectful, fast, and left my property cleaner than before. Roof looks amazing!</p>
                                        <Image className="m-auto mt-5" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                                    </div>
                                    </div>
            </section>

           

            <section className='mt-[50px]'>
                <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center'>Ready to Upgrade Your Roof?</h1>
                <p className='w-[90vw] md:w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Don’t wait until small issues turn into big problems. Our skilled team at Summit Pro Roofing is ready to assess your home, provide expert solutions, and deliver a roof that protects your family and adds lasting value. Let’s make your next roofing project stress-free and reliable.</p>
                <div className='flex justify-center gap-5 mb-10'>
                    <a className='px-5 py-4 md:px-9 md:py-4 text-white font-semibold bg-orange-500 mt-5 cursor-pointer hover:bg-orange-600 ' href="tel:(123) 456-7890 ">Call Now</a>

                    <Link href="/getaquote"><button className='px-9 py-4 bg-[#004099] text-white font-semibold mt-5 cursor-pointer hover:bg-[#013781] '>Get A Free Estimate</button></Link>
                </div>
            </section>
            </FadeUp>

           
        </>
    )
}

export default Projects