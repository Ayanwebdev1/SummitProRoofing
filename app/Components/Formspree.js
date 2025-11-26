
"use client";
import React, { useRef, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Map, Phone, Clock, Location, MapPin } from 'lucide-react'

export default function RoofingForm() {
    const [state, handleSubmit] = useForm("mldoppjq");
    const Formref = useRef(null);

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
            if (Formref.current) {
                Formref.current.reset();
            }
        }
    }, [state.succeeded]);

    return (
        <>
            <ToastContainer />
            <div className='flex w-[90vw] m-auto mb-10'>
                <form
                    ref={Formref}
                    onSubmit={handleSubmit}
                    className="flex-1 p-6 w-[40vw] rounded-2xl box-border space-y-4 mt-6 mb-8 rounded-r-none border border-gray-200"
                >
                    <h1 className='text-[#004099] text-[30px] font-extrabold tracking-tighter mb-0'>GET A FREE ESTIMATE</h1>
                    <p className='text-gray-500 mt-2'>Fill out the form below and our team will get back to you within 24 hours.</p>
                    {/* Name */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-semibold text-black/70 mb-1">Full Name</label>
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
                        <label htmlFor="phone" className="font-semibold text-black/70 mb-1">Phone Number</label>
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
                        <label htmlFor="email" className="font-semibold text-black/70 mb-1">Email Address</label>
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
                        <label htmlFor="service" className="font-semibold text-black/70 mb-1">Service Type</label>
                        <select
                            id="service"
                            name="service"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        >
                            <option value="">Select a service</option>
                            <option value="roof-installation">Roof Installation</option>
                            <option value="roof-repair">Roof Repair</option>

                            <option value="inspection">Inspection & Maintenance</option>
                            <option value="other">Other</option>
                        </select>
                        <ValidationError prefix="Service" field="service" errors={state.errors} />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                        <label htmlFor="message" className="font-semibold text-black/70 mb-1">Additional Details</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Type your message..."
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-[#004099] text-white py-2 rounded-lg font-semibold hover: cursor-pointer  hover:bg-[#01347a] transition-colors"
                    >
                        {state.submitting ? "Submitting..." : "Submit"}
                    </button>

                    {/* Trust line above form */}

                </form>
                
                <div className="flex-1 p-6 rounded-2xl bg-orange-500 w-[40vw] box-border  space-y-4 mt-6 mb-8 rounded-l-none">
                    <h1 className='text-white text-[30px] font-extrabold tracking-tighter mb-0'>CONTACT INFO</h1>

                    <div className="flex flex-col gap-6 text-white">

                        {/* Address */}
                        <div className="ml-5 flex items-start gap-3 mt-8">
                            <MapPin size={25} className="text-white flex-shrink-0" />
                            <div className="flex flex-col">
                                <h1 className="font-bold text-[20px]">Address</h1>
                                <p className="text-white/90">
                                    123 Summit Ave, Suite 100
                                    <span className="block">Denver, CO 80202</span>
                                </p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="ml-5 flex items-start gap-3">
                            <Clock size={25} className="text-white flex-shrink-0" />
                            <div className="flex flex-col">
                                <h1 className="font-bold text-[20px]">Hours</h1>
                                <p className="text-white/90">
                                    Mon-Fri: 8:00 AM - 6:00 PM
                                    <span className="block">Sat: 9:00 AM - 2:00 PM</span>
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="ml-5 flex items-start gap-3">
                            <Phone size={25} className="text-white flex-shrink-0" />
                            <div className="flex flex-col">
                                <h1 className="font-bold text-[20px]">Phone</h1>
                                <p className="text-white/90">
                                    <a className='hover:underline' href="tel:(123) 456-7890">(123) 456-7890</a>
                                </p>
                            </div>
                        </div>

                    </div>
                    
                    <div className='w-full border border-gray-200 rounded-lg h-[170px] mt-10 bg-orange-400/40'>
                        <h1 className='text-white font-bold text-[20px] mt-5 ml-5'>Need Emergency Help?</h1>
                        <p className='ml-5 mt-1 text-white/90'>Our emergency response team is available 24/7 for critical leaks and storm damage.</p>
                        <div className='flex items-center gap-3'>
                            <Phone className='text-white mt-5  ml-5' size={20} />
                            <a className='mt-5 text-white hover:underline' href="tel:(123) 456-7890">Call Emergency Line</a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}
