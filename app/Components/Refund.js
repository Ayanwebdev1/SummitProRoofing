import React from 'react'

const Refund = () => {
  return (
    <>
    <div className="min-h-screen bg-[#f9f9f9] text-gray-800 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#004099] mb-6">Refund Policy</h1>

        <p className="mb-4">
          At SummitProRoofing, we take pride in our workmanship. If you are not satisfied with our services, we are committed to resolving any issues promptly.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Eligibility for Refunds</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Services not performed as described</li>
          <li>Unresolved complaints after our follow-up</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Process</h2>
        <p className="mb-4">
          Contact our support team within 7 days of service completion. Provide your service details and a brief description of the issue. Our team will review your request and provide a resolution.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Exceptions</h2>
        <p className="mb-4">
          Refunds do not apply for normal wear and tear, damage due to natural disasters, or services that were completed as agreed upon.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p>
          For any questions regarding your refund, please contact us at <span className="text-[#004099] font-semibold">info@summitroofing.com</span>.
        </p>
      </div>
    </div>
    </>
  )
}

export default Refund