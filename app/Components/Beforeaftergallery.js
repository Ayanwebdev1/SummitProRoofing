"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Beforeaftergallery() {

  //Ye React ka hook hai — useRef.
  // useRef ka matlab hota hai:
  // 👉 “ek box jisme hum kisi element ka reference (yaani link) store karte hain.”
  // null matlab initially khali hai, hum baad me is ref ko kisi div ya element se attach karenge.

  const scrollRef = useRef(null);


  const scroll = (direction) => { //yay function parameter direction lay raha hai yani ya to left ya to right

    const { current } = scrollRef; //current ko humnay name assign kardia hai scrollref
    if (current) { //agar current exist karta hai yani koi element scrollref may agaya hai
      const scrollAmount = direction === "left" ? -300 : 300;  //left ho to -300 else +300


      // Ye line actual scrolling karwa rahi hai.
      // scrollBy() ek browser method hai jo kisi element ke andar scroll karwata hai.
      // { left: scrollAmount } → left-right direction me kitna move karna hai.
      // behavior: "smooth" → scroll smoothly move kare (jump nahi).
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const clients = [
    "/ba1.webp",
    "/ba2.webp",
    "/ba3.webp",
    "/ba4.jpeg",
    "/ba5.webp",
    "/ba6.webp",

  ];

  return (
    <section className="py-10 text-center relative">


      <div className="relative w-[90vw] md:w-[70%] mx-auto">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#004099] hover:bg-[#01347a] cursor-pointer text-white p-3 rounded-full z-10 shadow-md"
        >
          <ChevronLeft aria-label="Scroll Left" size={24} />
        </button>

        {/* Scrollable Logos */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-hidden no-scrollbar overflow-y-hidden scroll-smooth px-10"
        >
          {clients.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 w-[70vw] md:w-[20vw] h-[50vh] rounded-xl flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer relative shadow-lg"
            >
              <Image
                src={logo}
                alt={`Client ${i}`}
                fill
                className="rounded-xl "
                
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#004099] hover:bg-[#01347a] text-white p-3 rounded-full z-10 shadow-md cursor-pointer"
        >
          <ChevronRight aria-label="Scroll Right" size={24} />
        </button>
      </div>
    </section>
  );
}