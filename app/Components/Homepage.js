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
            
            <header className="relative w-full h-[95vh] overflow-hidden">
    {/* Hero Image */}
    <div className="absolute inset-0">
        <Image
            src="/hero1.webp"
            alt="Hero"
            fill
            className="object-cover"
        />
    </div>

    {/* Blue overlay */}
    <div className="absolute inset-0 bg-linear-to-b from-black/50 via-blue-950/70 to-slate-950/80"></div>

    {/* Text / CTA */}
    <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white">
        <div className="text-white bg-orange-600 px-4 py-1 mb-4 font-extrabold rounded-lg text-sm md:text-base">
            #1 Rated Roofing Contractor
        </div>

        <h1 className="text-3xl md:text-6xl font-extrabold mb-6 max-w-full md:w-[60%] leading-tight">
            BUILT STRONG TO FACE<br />
            <span className='text-orange-600 block'>ANY STORM.</span>
        </h1>

        <p className="text-base md:text-2xl mb-6 max-w-full md:max-w-xl leading-relaxed">
            Premium roofing solutions for residential and commercial properties. With over 5 Years warranty, expert craftsmanship, and 24/7 emergency service.
        </p>

        <div className='flex gap-3 mt-4 items-center '>
            <Link href="/getaquote">
                <button className="bg-[#e85b30] hover:bg-[#d14e28] text-white font-bold py-3 px-4 md:px-10 md:py-5 transition cursor-pointer text-sm md:text-base">
                    GET A FREE ESTIMATE
                </button>
            </Link>

            <button className="border hover:bg-white hover:text-black text-white font-bold py-3 px-6 md:px-10 md:py-5 transition cursor-pointer text-sm md:text-base">
                <a href="tel:+1837928392">CALL NOW</a>
            </button>
        </div>
    </div>
</header>

<Servicescomponent />
<Chooseus />

{/* RECENT PROJECTS */}
<section className='mt-[50px] px-4'>
    <h1 className='text-[#004099] text-[28px] md:text-[35px] font-extrabold tracking-tighter text-center'>
        RECENT PROJECTS
    </h1>

    <p className='w-full  md:w-[60vw] text-[17px] md:text-[20px] text-gray-500 m-auto text-center mt-2 px-2'>
        A showcase of our latest roofing repairs, replacements, and installations—highlighting real results, expert workmanship, and reliable service delivered to homeowners across your area.
    </p>

    <Beforeaftergallery />
</section>

{/* FREE INSPECTION */}
<section className='mt-[50px] px-4'>
    <h1 className='text-[#004099] text-[28px] md:text-[35px] font-extrabold tracking-tighter text-center'>
        PROTECT YOUR HOME WITH A FREE ROOFING INSPECTION
    </h1>

    <p className='w-[90vw] md:w-[60vw] text-[17px] md:text-[20px] text-gray-500 m-auto text-center mt-2 px-3'>
        Our experts will assess damage, identify issues, and give you a clear plan—no pressure, no obligations.
    </p>

    <div className='flex justify-center'>
        <Link href="/getaquote">
            <button className='px-6 py-3 bg-orange-500 text-white font-semibold mt-5 cursor-pointer hover:bg-orange-600 text-sm md:px-10 md:py-5 md:text-base'>
                BOOK MY INSPECTION
            </button>
        </Link>
    </div>
</section>

{/* REVIEWS */}
<section className='bg-[#004099] mt-[50px] p-4 pb-10'>
    <h1 className='text-center text-white font-extrabold tracking-tighter text-[28px] md:text-[35px] pt-6'>
        HEAR FROM HOMEOWNERS WHO TRUSTED <span className='text-orange-500'>SUMMITPROROOFING</span>
    </h1>

    <p className='text-center w-full md:w-[60vw] m-auto mt-3 text-white text-[17px] md:text-[20px] px-2'>
        From small repairs to full roof replacements, our clients share how Summit Pro Roofing helped protect their homes — and their peace of mind.
    </p>

    <div className="reviwcards flex flex-col md:flex-row justify-center mt-[40px] gap-6">
        
        {/* Card 1 */}
        <div className="rcard w-full md:w-[20vw] border border-gray-200 rounded-xl hover:scale-105 transition bg-white p-4 text-center">
            <Image className="m-auto" width={150} height={150} alt="man" src="/rw1.webp" />
            <h1 className="font-bold text-[20px]">David Johnson</h1>
            <p className="w-[90%] m-auto text-[15px]">These guys did a flawless job replacing my old roof. Highly recommend!</p>
            <Image className="m-auto mt-3" width={100} height={100} alt="icon" src="/verified.webp" />
        </div>

        {/* Card 2 */}
        <div className="rcard w-full md:w-[20vw] border border-gray-200 rounded-xl hover:scale-105 transition bg-white p-4 text-center">
            <Image className="m-auto" width={90} height={150} alt="man" src="/rw2.webp" />
            <h1 className="font-bold text-[20px]">Mark Stevens</h1>
            <p className="w-[90%] m-auto text-[15px]">Had a serious leak — they came in hours and fixed it perfectly.</p>
            <Image className="m-auto mt-3" width={100} height={100} alt="icon" src="/verified.webp" />
        </div>

        {/* Card 3 */}
        <div className="rcard w-full md:w-[20vw] border border-gray-200 rounded-xl hover:scale-105 transition bg-white p-4 text-center">
            <Image className="m-auto" width={120} height={150} alt="man" src="/rw3.webp" />
            <h1 className="font-bold text-[20px]">Michael Reed</h1>
            <p className="w-[90%] m-auto text-[15px]">Fast, clean, respectful crew. Roof looks amazing!</p>
            <Image className="m-auto mt-3" width={100} height={100} alt="icon" src="/verified.webp" />
        </div>
    </div>

    <div className='flex justify-center mt-6'>
        <Link href="/reviews">
            <button className='font-semibold px-9 py-3 bg-orange-500 md:px-10 md:py-5 text-white hover:bg-orange-600 transition cursor-pointer'>
                View More
            </button>
        </Link>
    </div>
</section>

<Faqs />

<section className='mt-[70px] px-4'>
    <h1 className='text-[#004099] text-[28px] md:text-[35px] font-extrabold tracking-tighter text-center'>
        Reach Out to Us Anytime
    </h1>
    <p className='w-full w-[90vw] md:w-[60vw] text-[17px] md:text-[20px] text-gray-500 m-auto text-center mt-2 px-3'>
        Our team is ready to assist you with roofing services, inspections, or questions. We're here to help keep your home safe and secure.
    </p>
    <RoofingForm />
</section>


            
        </>
    )
}

export default Homepage