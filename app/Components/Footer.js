import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Home } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#094599] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* 0️⃣ Logo */}
        <div className="flex flex-col mr-7 items-center space-y-4">
                  <Link href="/"><div className="flex items-center h-full gap-2 cursor-pointer">

          <Home className="w-8 h-8 text-white bg-orange-600 rounded-[5px] p-1" />
          <h1 className="text-[25px] font-bold  text-white">SUMMITPRO<span className="text-[#e85b30]">ROOFING</span></h1>
        </div></Link>
          <p className="text-white/90">Reliable roofing solutions for homes & businesses.</p>
         <div className="flex gap-4 mt-8">
  <a 
    href="https://www.facebook.com/" 
    aria-label="Facebook SummitProRoofing"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Facebook size={24} className="hover:text-orange-500 cursor-pointer" />
  </a>

  <a 
    href="https://www.twitter.com/" 
    aria-label="Twitter SummitProRoofing"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Twitter size={24} className="hover:text-orange-500 cursor-pointer" />
  </a>

  <a 
    href="https://www.instagram.com/" 
    aria-label="Instagram SummitProRoofing"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Instagram size={24} className="hover:text-orange-500 cursor-pointer" />
  </a>
</div>
        </div>

        {/* 1️⃣ Contact Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-orange-500 flex-shrink-0" />
            <p>123 Summit Ave, Suite 100<br />Denver, CO 80202</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-orange-500 flex-shrink-0" />
            <a className="hover:underline" href="tel:(123) 456-7890">(123) 456-7890</a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-orange-500 flex-shrink-0" />
            {/* <p className="cursor-pointer">info@summitroofing.com</p> */}
            <a target="_blank" href="mailto:info@summitroofing.com">info@summitroofing.com</a>
          </div>
        </div>

        {/* 2️⃣ Service Area */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Service Area</h2>
          <ul className="space-y-2 text-white/90">
            <li>Denver</li>
            <li>Aurora</li>
            <li>Lakewood</li>
            <li>Littleton</li>
            <li>Highlands Ranch</li>
          </ul>

          <h2 className="text-xl font-bold mt-4">Policies</h2>
          
            <Link href="/privacy"><li className="hover:text-orange-500 list-none cursor-pointer">Privacy Policy</li></Link>
            <Link href="/terms&conditions"><li className="hover:text-orange-500 list-none cursor-pointer">Terms & Conditions</li></Link>
            <Link href="/refund"><li className="hover:text-orange-500 list-none cursor-pointer">Refund Policy</li></Link>
          
        </div>

        {/* 3️⃣ Embedded Map */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Our Location</h2>
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.123456789!2d-104.99025138461946!3d39.73923697944812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78a2abc12345%3A0xabcdef1234567890!2s123%20Summit%20Ave%2C%20Denver%2C%20CO%2080202!5e0!3m2!1sen!2sus!4v169xxxxxxx"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-white/80 text-sm">
        &copy; {new Date().getFullYear()} Summit Roofing. All rights reserved.
      </div>
    </footer>
  );
}
