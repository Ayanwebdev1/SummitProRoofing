import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Testimonials from './Testimonials'
import Beforeaftergallery from './Beforeaftergallery'
import Chooseus from './Chooseus'
import Trustus from './Trustus'
import FadeUp from './FadeUp'

const Reviews = () => {
    return (
        <>
        <FadeUp>
            <header className='mt-[50px] bg-[#004099] p-2 mb-10'>
                <h1 className='text-white text-[35px] font-extrabold tracking-tighter text-center pt-8'>What Our Clients Say About <span className='text-orange-500'>Working</span> With Us</h1>
                <div className='w-[60vw] mt-4 text-[20px] text-white/90 m-auto text-center'>Real stories. Real results. No paid reviews.</div>
                <div className='w-[60vw] text-[20px] text-white/90 m-auto text-center'>Just honest experiences from homeowners who trusted us.</div>

                <Testimonials />
            </header>

<section>
    <Trustus />
</section>
                <section className='mt-[50px]'>
                    <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center '>The results we’ve delivered for our valued homeowners. </h1>
                    <p className='w-[90vw] md:w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-3'>We focus on quality, durability, and honest craftsmanship. Every project below reflects the care, attention, and reliability our clients expect from us. Real homes, real problems, and real solutions delivered with precision.</p>
                    <Beforeaftergallery />
                </section>
                <section>
                    <Chooseus />
                </section>

                <section className='mt-[50px] mb-10'>
                    <h1 className='text-[#004099] text-[35px] font-extrabold tracking-tighter text-center'>Ready to Fix or Upgrade Your Roof?</h1>
                    <p className='w-[90vw] md:w-[60vw] text-[20px] text-gray-500 m-auto text-center mt-2'>Get expert help from a team that delivers reliable, long-lasting roofing solutions. Whether it’s a repair or a full replacement, we’re here to make the process simple and stress-free.</p>
                     <div className='flex justify-center mt-5'>
                    <Link href="/getaquote"><button className='px-9 py-4 bg-orange-500 cursor-pointer text-white font-semibold hover:bg-orange-600'>GET A FREE QUOTE</button></Link>
                </div>
                </section>
                </FadeUp>
        </>
    )
}

export default Reviews