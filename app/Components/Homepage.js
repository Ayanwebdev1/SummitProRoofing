import React from 'react'
import Image from 'next/image'
import Servicescomponent from './Servicescomponent'
import Chooseus from './Chooseus'
import Beforeaftergallery from './Beforeaftergallery'
import Link from 'next/link'
import RoofingForm from './Formspree'
import Testimonials from './Testimonials'
import Faqs from './Faqs'


const Homepage = () => {
    return (
        <>
            <header className="relative w-full h-[95vh]">
                {/* Hero Image */}
                <Image
                    src="/hero1.webp"
                    alt="Hero"
                    fill
                    className="object-cover"
                />

                {/* Blue overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-black/50 via-blue-950/70 to-slate-950/80"></div>

                {/* Text / CTA */}
                <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 text-white">

                    <div className='text-white bg-orange-600 px-5 mb-6 font-extrabold rounded-lg'>#1 Rated Roofing Contractor</div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-shadow-black mb-6 w-[60%]">
                        BUILT STRONG TO FACE<br />
                        <span className='text-orange-600 block'>ANY STORM.</span>
                    </h1>

                    <p className="text-lg md:text-2xl mb-6 max-w-xl">
                        Premium roofing solutions for residential and commercial properties. With over 5 Years warranty, expert craftsmanship, and 24/7 emergency service.
                    </p>

                    <div className='flex gap-2 mt-5 items-center'>
                        <Link href="/getaquote"><button className="bg-[#e85b30] hover:bg-[#d14e28] text-white font-bold py-4 px-18  transition cursor-pointer">
                            GET A FREE ESTIMATE
                        </button></Link>

                        <button className="border hover:bg-white hover:text-black  text-white font-bold py-4 px-18  transition cursor-pointer">
                            <a href="tel:+1837928392">CALL NOW</a>
                        </button>
                    </div>
                </div>
            </header>
            <Servicescomponent />
            <Chooseus />

            <section className='mt-[50px]'>
                <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center'>RECENT PROJECTS</h1>
                <p className='w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>A showcase of our latest roofing repairs, replacements, and installations—highlighting real results, expert workmanship, and reliable service delivered to homeowners across your area.</p>
                <Beforeaftergallery />
            </section>

            <section className='mt-[50px]'>
                <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center'>PROTECT YOUR HOME WITH A FREE ROOFING INSPECTION</h1>

                <p className='w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Our experts will assess damage, identify issues, and give you a clear plan—no pressure, no obligations.</p>

                <div className='flex justify-center'>
                    <Link href="/getaquote"><button className='px-7 py-4 bg-orange-500 text-white font-semibold mt-5 cursor-pointer hover:bg-orange-600'>
                        BOOK MY INSPECTION
                    </button></Link>
                </div>
            </section>
            <section className='bg-[#004099] mt-[50px] p-2'>

                <h1 className='text-center  text-white font-extrabold tracking-tighter text-[30px] pt-10 md:text-[35px] '>HEAR FROM HOMEOWNERS WHO TRUSTED <span className='text-orange-500'>SUMMITPROROOFING</span></h1>
                <p className='text-center w-[85vw] text-white md:w-[60vw] m-auto mt-3'>From small repairs to full roof replacements, our clients share how Summit Pro Roofing helped protect their homes — and their peace of mind.</p>


                <div className="reviwcards flex-wrap flex-col md:flex-row flex justify-center mt-[50px] gap-5 mb-5">

                    <div className="rcard w-[90vw] m-auto md:m-0
                                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer bg-white">
                        <Image className="m-auto" width={150} height={150} alt="man" src="/rw1.webp"></Image>
                        <h1 className="font-bold text-center text-[20px]">David Johnson</h1>
                        <p className="text-center w-[90%] m-auto">These guys did a flawless job replacing my old roof. Super professional, on time, and kept me updated throughout the project. Highly recommend them!</p>
                        <Image className="m-auto" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>

                    <div className="rcard w-[90vw] m-auto md:m-0
                                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer bg-white">
                        <Image className="m-auto" width={90} height={150} alt="man" src="/rw2.webp"></Image>
                        <h1 className="font-bold text-center text-[20px]">Mark Stevens</h1>
                        <p className="text-center w-[90%] m-auto">Had a serious leak during heavy rain — they came within hours and fixed it perfectly. Honest pricing and great communication!</p>
                        <Image className="m-auto mt-5" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>

                    <div className="rcard w-[90vw] m-auto md:m-0
                                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer bg-white">
                        <Image className="m-auto" width={120} height={150} alt="man" src="/rw3.webp"></Image>
                        <h1 className="font-bold text-center text-[20px]">Michael Reed</h1>
                        <p className="text-center w-[90%] m-auto">Top-notch service from start to finish. The crew was respectful, fast, and left my property cleaner than before. Roof looks amazing!</p>
                        <Image className="m-auto mt-5" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link href="/reviews"><button className='font-semibold px-9 py-3 bg-orange-500 text-white hover:bg-orange-600 transition cursor-pointer'>View More</button></Link>
                </div>
            </section>
            <section>
                <Faqs />
            </section>
            <section>
                <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center mt-[80px]'>Reach Out to Us Anytime</h1>
                <p className='w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Our team is ready to assist you with roofing services, inspections, or questions. Call, visit, or message us — we’re here to help keep your home safe and secure.</p>
                <RoofingForm />
            </section>

            
        </>
    )
}

export default Homepage