import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Testimonials = () => {
    return (
        <>
        
            <header>
                <h1 className='text-center text-[#004099] font-extrabold tracking-tighter text-[30px] md:text-[35px] mt-[50px]'>HEAR FROM HOMEOWNERS WHO TRUSTED <span className='text-orange-500'>SUMMITPROROOFING</span></h1>
                <p className='text-center w-[85vw] md:w-[60vw] m-auto mt-3'>From small repairs to full roof replacements, our clients share how Summit Pro Roofing helped protect their homes — and their peace of mind.</p>
            </header>

            <section>
            


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
                    <div className="rcard w-[90vw] m-auto md:m-0
                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className="m-auto" width={150} height={150} alt="man" src="/rw4.webp"></Image>
                        <h1 className="font-bold text-center text-[20px]">David Thompson</h1>
                        <p className="text-center w-[90%] m-auto">Apex Roofing Co completely transformed my old, leaking roof. The team arrived on time, worked efficiently, and left the property spotless. Highly recommended!</p>
                        <Image className="m-auto mt-3" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>

                    <div className="rcard w-[90vw] m-auto md:m-0
                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className="m-auto" width={60} height={150} alt="man" src="/rw5.webp"></Image>
                        <h1 className="font-bold text-center text-[20px] mt-2.5">Michael Harris</h1>
                        <p className="text-center w-[90%] m-auto"> everything was handled with top-notch professionalism. The new roof looks incredible,Couldn’t be happier with the results!</p>
                        <Image className="m-auto mt-5" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>

                    <div className="rcard w-[90vw] m-auto md:m-0
                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className="m-auto" width={120} height={150} alt="man" src="/rw6.webp"></Image>
                        <h1 className="font-bold text-center text-[20px] mt-5">Jason Miller</h1>
                        <p className="text-center w-[90%] m-auto">Storm damage repaired in a week! Great team, fair price, and reliable service.</p>
                        <Image className="m-auto mt-16" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>

                </div>
            </section>

            <section>
                <h1 className='text-center text-[35px] font-bold mt-[50px]'>Why <span className='text-orange-400'>Homeowners</span> Across <span className='text-orange-400'>Texas</span> Trust Us</h1>
                <p className='text-center m-auto w-[85vw] md:w-[60vw] mt-2'>Because we treat every roof like it’s our own — protecting your home, your family, and your peace of mind.
                    When storms hit or leaks appear, we don’t just fix shingles — we restore safety, comfort, and trust.</p>

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
                                    <h1 className="font-bold text-[20px] text-center mt-2"> 2 Years Warranty</h1>
                                    <div className="w-[80%] text-center m-auto mt-2">We stand by our work long after it’s done. Every roof we build comes with a solid 2-year workmanship guarantee for total peace of mind.</div>
                                </div>
                
                            </div>
                <div className='flex justify-center'>
                        <Link href={"getaquote"}><button className="mt-3 text-white px-14 py-3 bg-orange-500 rounded-xl hover:bg-orange-600 mb-5 hover:scale-105 transition duration-100 ease-in-out cursor-pointer">
                            Get a Free Quote
                        </button></Link>
                        
                </div>
            </section>
            


        </>
    )
}

export default Testimonials