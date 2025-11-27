"use client";
import React, { useRef, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Faqs from './Faqs'
import Image from 'next/image';



export default function Quoteform() {
    const [state, handleSubmit] = useForm("mldoppjq");
    const formRef = useRef(null);

    useEffect(() => {
        if (state.succeeded) {
            toast.success("✅ Form Submitted Successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            if (formRef.current) {
                formRef.current.reset();
            }
        }
    }, [state.succeeded]);

    return (
        <>

            
            <ToastContainer />

           
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full max-w-3xl mx-auto p-8 rounded-2xl shadow-[5px_20px_30px_rgba(0,0,0,0.3)] space-y-6 mt-6 mb-8 bg-white"
            >
                <h2 className="text-3xl font-bold text-[#004099] mb-4 text-center">Get a Free Quote</h2>
                <p className="text-gray-600 mb-6">Fill out the form below and our experts will get back to you with a personalized estimate.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Full Name */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-semibold text-[#004099] mb-1">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="font-semibold text-[#004099] mb-1">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-semibold text-[#004099] mb-1">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    {/* Service Type */}
                    <div className="flex flex-col">
                        <label htmlFor="service" className="font-semibold text-[#004099] mb-1">Service Type</label>
                        <select
                            id="service"
                            name="service"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        >
                            <option value="">Select a service</option>
                            <option value="roof-installation">Roof Installation</option>
                            <option value="roof-repair">Roof Repair</option>
                            <option value="gutter-cleaning">Gutter Cleaning / Replacement</option>
                            <option value="inspection">Inspection & Maintenance</option>
                            <option value="other">Other</option>
                        </select>
                        <ValidationError prefix="Service" field="service" errors={state.errors} />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col">
                        <label htmlFor="address" className="font-semibold text-[#004099] mb-1">Address</label>
                        <input
                            id="address"
                            type="text"
                            name="address"
                            placeholder="Street Address"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <ValidationError prefix="Address" field="address" errors={state.errors} />
                    </div>

                    {/* City */}
                    <div className="flex flex-col">
                        <label htmlFor="city" className="font-semibold text-[#004099] mb-1">City</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            placeholder="City"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <ValidationError prefix="City" field="city" errors={state.errors} />
                    </div>

                    {/* Zip Code */}
                    <div className="flex flex-col">
                        <label htmlFor="zip" className="font-semibold text-[#004099] mb-1">Zip Code</label>
                        <input
                            id="zip"
                            type="text"
                            name="zip"
                            placeholder="Zip Code"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <ValidationError prefix="Zip Code" field="zip" errors={state.errors} />
                    </div>
                </div>

                {/* Message / Additional Details */}
                <div className="flex flex-col">
                    <label htmlFor="message" className="font-semibold text-[#004099] mb-1">Additional Details</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Type your message here..."
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-orange-500 cursor-pointer text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 hover:bg-orange-600"
                >
                    {state.submitting ? "Submitting..." : "Get My Free Quote"}
                </button>

                <p className="text-gray-500 mt-2 text-sm text-center m-auto">
                    We respect your privacy. No spam. Only a real estimate from our experts.
                </p>
            </form>

            <section className='mt-[60px] '>
                <h1 className='text-[35px] text-center font-bold'>Why <span className='text-[#004099]'>Homeowners</span> Trust Us</h1>

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
                        <h1 className="font-bold text-[20px] text-center mt-2"> 2 Years Warranty</h1>
                        <div className="w-[80%] text-center m-auto mt-2">We stand by our work long after it’s done. Every roof we build comes with a solid 2-year workmanship guarantee for total peace of mind.</div>
                    </div>

                </div>

            </section>

            <section className="w-full py-20 bg-gray-50 mt-[50px] mb-5">
                <div className="max-w-5xl mx-auto px-5">

                    {/* Heading */}
                    <h2 className="text-[35px] font-bold text-center mb-4">
                        How It <span className="text-[#004099]">Works</span>
                    </h2>

                    <p className="text-center text-gray-600 w-[90vw] md:max-w-[60vw] mx-auto mb-14">
                        A quick, simple, and transparent process designed to make your experience stress-free.
                    </p>

                    {/* Step 1 */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-[#004099]">01.</h3>
                        <h4 className="text-xl font-semibold mt-1">Tell Us What's Needed</h4>
                        <p className="text-gray-600 mt-2">
                            Share basic details or photos so we understand what type of roofing service you need.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-[#004099]">02.</h3>
                        <h4 className="text-xl font-semibold mt-1">We Inspect & Prepare Your Quote</h4>
                        <p className="text-gray-600 mt-2">
                            Our team evaluates your information and creates a clear, honest estimate.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#004099]">03.</h3>
                        <h4 className="text-xl font-semibold mt-1">Get Your Final Price</h4>
                        <p className="text-gray-600 mt-2">
                            No surprises. No hidden fees. Just a straightforward quote you can trust.
                        </p>
                    </div>

                </div>

            </section>

            <Faqs />
            <section>
                <h1 className='text-[35px] text-center font-bold mt-[50px] text-[#004099]'>Prefer to contact us via call or email?</h1>
                <p className='w-[90vw] md:w-[60vw] m-auto text-center mt-3'>Choose the method that’s easiest for you. Whether it’s a quick call for urgent needs or an email with details, our team is ready to assist and provide your free quote promptly.</p>


            <div className='flex justify-center items-center gap-5
            mb-5
            '>
                <button className="bg-orange-500 px-5 py-3 md:px-9 md:py-4 rounded-xl text-white font-semibold mt-4 hover:scale-105 transition ease-in-out cursor-pointer"><a href="tel:+19283283629">Call Now</a></button>
            

            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ayan@ayankhalid.dev&su=Roofing%20Inquiry&body=Hi,%20I%20want%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#004099] text-black font-semibold mt-4 px-5 py-3 md:px-9 md:py-4 rounded-xl inline-block text-center text-white hover:scale-105 transition ease-in-out cursor-pointer"
            >
                Email Us
            </a>
            </div>
                </section>
                

        </>
    );
}