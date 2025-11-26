import React from 'react'

const Privacy = () => {
  return (
    <>
     <div className="min-h-screen bg-[#f9f9f9] text-gray-800 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#004099] mb-6">Privacy Policy</h1>

        <p className="mb-4">
          At SummitProRoofing, your privacy is our priority. We collect only the necessary information to provide roofing services and ensure you have a smooth experience.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Name, contact details, and address</li>
          <li>Service preferences and requests</li>
          <li>Website usage data for improving user experience</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Data</h2>
        <p className="mb-4">
          We use your information to process service requests, communicate with you, and improve our services. Your data is never sold or shared with third parties for marketing purposes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
        <p className="mb-4">
          Our website may use cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p>
          For any questions regarding your privacy, please contact us at <span className="text-[#004099] font-semibold">info@summitroofing.com</span>.
        </p>
      </div>
    </div>
    </>
  )
}

export default Privacy