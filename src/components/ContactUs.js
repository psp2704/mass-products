import React from 'react';
import design1 from '../night.png'
const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-fuchsia-500 to-purple-600" style={{backgroundImage : `url(${design1})`, }}>
      <header className="">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-white">Contact Us</h1>
        </div>
      </header>
      <hr/>
      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-white">At Project Management Soft Skills, we are dedicated to providing exceptional services to enhance your project management capabilities. Whether you're seeking consultancy, training, or tailored solutions, we're here to help. Feel free to reach out to us using the following contact details:</p>
          </div>
          <div className="mt-8 max-w-lg mx-auto">
            <h2 className="text-xl font-bold text-white">Contact Information</h2>
            <ul className="mt-4 text-lg text-white list-disc list-inside">
              <li>Email: info@projectmanagementskills.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 1234 Main Street, City, Country</li>
            </ul>
            <p className="mt-8 text-lg text-white">For any inquiries or to schedule a consultation, please don't hesitate to contact us. We look forward to assisting you with your project management needs.</p>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default ContactUs;
