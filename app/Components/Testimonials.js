import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Beforeaftergallery from './Beforeaftergallery'


const Testimonials = () => {
    return (
        <>
        


            <section>
            


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
                    <div className="rcard w-[90vw] m-auto md:m-0
                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer bg-white">
                        <Image className="m-auto" width={150} height={150} alt="man" src="/rw4.webp"></Image>
                        <h1 className="font-bold text-center text-[20px]">David Thompson</h1>
                        <p className="text-center w-[90%] m-auto">Apex Roofing Co completely transformed my old, leaking roof. The team arrived on time, worked efficiently, and left the property spotless. Highly recommended!</p>
                        <Image className="m-auto mt-3" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>

                    <div className="rcard w-[90vw] m-auto md:m-0
                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer bg-white">
                        <Image className="m-auto" width={60} height={150} alt="man" src="/rw5.webp"></Image>
                        <h1 className="font-bold text-center text-[20px] mt-2.5">Michael Harris</h1>
                        <p className="text-center w-[90%] m-auto"> everything was handled with top-notch professionalism. The new roof looks incredible,Couldn’t be happier with the results!</p>
                        <Image className="m-auto mt-5" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>

                    <div className="rcard w-[90vw] m-auto md:m-0
                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer bg-white">
                        <Image className="m-auto" width={120} height={150} alt="man" src="/rw6.webp"></Image>
                        <h1 className="font-bold text-center text-[20px] mt-5">Jason Miller</h1>
                        <p className="text-center w-[90%] m-auto">Storm damage repaired in a week! Great team, fair price, and reliable service.</p>
                        <Image className="m-auto mt-11" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>

                </div>
                <h1 className='text-center text-[20px] w-[90vw] text-white md:w-[60vw]  m-auto mt-3'>These are just a few stories — we’ve helped dozens more families protect their homes</h1>
                <div className='flex justify-center mt-5'>
                    <Link href="/getaquote"><button className='px-9 py-4 bg-orange-500 cursor-pointer text-white font-semibold hover:bg-orange-600'>GET A FREE QUOTE</button></Link>
                </div>
            </section>
            

            
            


        </>
    )
}

export default Testimonials