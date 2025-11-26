import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Chooseus from './Chooseus'

const About = () => {
  return (
    <>
      <header className="relative w-full h-[95vh]">
        {/* Hero Image */}
        <Image
          src="/Abouthero3.webp"
          alt="Hero"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-blue-950/30 to-slate-950/80"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 ">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tighter">
            BUILT ON TRUST. DRIVEN BY QUALITY.
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl max-w-3xl ">
            Delivering roofing solutions homeowners never have to worry about — built with integrity, guided by transparency, and backed by workmanship that stands strong through every season. Your home deserves nothing less.
          </p>
          <div>
            <Link href="/getaquote"><button className='bg-orange-500 px-10 py-4 text-white font-semibold hover:bg-orange-600 cursor-pointer mt-10'>BOOK MY FREE QUOTE</button></Link>
          </div>
        </div>

      </header>


      <section className="flex flex-col md:flex-row items-center md:items-start mt-[50px]">
        {/* Left Image */}
        <div className="left m-0 md:m-10 flex justify-center w-full md:w-auto">
          <Image
            width={500}
            height={500}
            className="w-full md:w-[500px] h-auto"
            alt="House"
            src="/Houses.webp"
          />
        </div>

        {/* Right Text */}
        <div className="right mt-5 md:mt-0 md:ml-10 flex flex-col items-center md:text-center w-full md:w-auto">
          <h1 className="font-extrabold text-[#004099] tracking-tight text-[30px] text-center md:text-left">
            Our Story
          </h1>

          <p className="w-[90vw] md:w-[50vw] mt-5 text-center md:text-left leading-relaxed text-black">
            SummitProRoofing started as a small two-man crew built on a simple promise:
            <span className="font-semibold text-black"> every roof deserves the same care and protection we’d give our own home.</span>
            What began local has grown into one of Denver’s most trusted roofing teams — known for showing up on time, communicating clearly, and delivering results that last for decades.
          </p>

          <ul className="mt-6  space-y-3 text-black text-sm md:text-base md:text-left  md:ml-0">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-[7px]"></span>
              Over a decade of hands-on roofing experience
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-[7px]"></span>
              Proudly started as a small local crew
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-[7px]"></span>
              Honesty & transparency at every step
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-[7px]"></span>
              A quality-first mindset on every project
            </li>
          </ul>



          <div className="flex justify-center mt-5">
            <Link href="/contact">
              <button className="px-9 py-4  bg-orange-500 text-white  transition ease-in-out cursor-pointer hover:bg-orange-600">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

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
        <h1 className='text-[35px] font-extrabold text-center text-[#004099] tracking-tight'>Our Mission</h1>

        <p className='text-center text-[20px] w-[90vw] md:w-[60vw] m-auto mt-5 mb-8 text-black/80'>Homeowners trust us because we don’t just repair roofs — we protect the place where your family sleeps, laughs, and builds memories.
          For us, every project is personal. We show up when we say we will, we listen before we work, and we treat your home with the same care, respect, and responsibility we give our own.

          In a world full of contractors who overpromise and disappear, we stand out by doing the opposite — clear communication, honest pricing, and workmanship that speaks for itself.
          No shortcuts. No hidden surprises. Just people who genuinely care about keeping your home safe, strong, and stress-free.</p>
      </section>

      <section>
        <Chooseus />
      </section>

      <section>
        <h1 className='capitalize mt-[50px] text-[35px] text-center font-extrabold tracking-tight text-[#004099]'>Let our customers speak for us</h1>
        <p className='text-center w-[60%] mt-3 m-auto'>We don’t just claim to do great work — our homeowners do. From timely service to honest advice and roofs that last for decades, our customers share their real experiences, their stories, and their satisfaction. Every testimonial is proof that we treat every home like our own, and every client like family. Hear it from those who trusted us and never looked back.</p>

        <div className="reviwcards flex-wrap flex-col md:flex-row flex justify-center mt-[50px] gap-5 mb-5">


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
            <Image className="m-auto mt-9" width={100} height={100} alt="icon" src="/verified.webp"></Image>
          </div>

          <div className="rcard w-[90vw] m-auto md:m-0
                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
            <Image className="m-auto" width={120} height={150} alt="man" src="/rw6.webp"></Image>
            <h1 className="font-bold text-center text-[20px] mt-5">Jason Miller</h1>
            <p className="text-center w-[90%] m-auto">Storm damage repaired in a week! Great team, fair price, and reliable service.</p>
            <Image className="m-auto mt-14" width={100} height={100} alt="icon" src="/verified.webp"></Image>
          </div>

        </div>

        <div className='flex justify-center mb-5'>
          <Link href="/reviews"><button className='px-9 py-4 bg-orange-500 text-white font-semibold cursor-pointer hover:bg-orange-600'>View More</button></Link>
        </div>

      </section>

      <section className='mb-10'>
        <h1 className='capitalize mt-[80px] text-[35px] text-center font-extrabold tracking-tight text-[#004099]'>Your Home Deserves a Roof You Can Trust</h1>
        <p className='text-center w-[60%] text-[20px] mt-3 m-auto'>Every shingle, every nail, every detail matters — because we treat your home like it’s our own. Let our team protect your family and your peace of mind with a free inspection today.</p>
        <div className='flex justify-center mt-5'>
          <Link href="/getaquote"><button className='px-9 py-4 bg-orange-500 font-semibold text-white cursor-pointer hover:bg-orange-600'>Secure My Home Now</button></Link>
        </div>
      </section>
      


    </>
  )
}

export default About