"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does a roof installation take?",
    answer: "Depending on the size and complexity, most installations take 1–3 days. We ensure quality work without cutting corners."
  },
  {
    question: "Do you provide a warranty on your work?",
    answer: "Yes! All our roofing services come with a warranty. Materials and workmanship are both covered, giving you peace of mind."
  },
  {
    question: "Can you work with insurance claims?",
    answer: "Absolutely. We guide you through the process and provide documentation needed to support your insurance claim."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Austin, TX and nearby areas. Contact us to confirm if your property is within our service zone."
  },
  {
    question: "Do you offer emergency roof repairs?",
    answer: "Yes, our team is available 24/7 for urgent repair needs to protect your home from further damage."
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  // const toggleFAQ = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  const toggleFAQ = (index)=>{
    setOpenIndex(openIndex === index? null:index)
  }

  return (
    <section className="py-12 mt-[30px]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl text-[#004099] font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-300 rounded-xl p-4 bg-white shadow-sm"
            >
              <button 
                className="w-full flex justify-between items-center font-semibold text-left text-gray-800 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}