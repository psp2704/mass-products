import React from 'react';
import design1 from '../night.png'
const ContactUs = () => {
  // style={{backgroundImage : `url(${design1})`, }}
  return (
    <div className="">
      <header className="">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center ">Contact Us</h1>
        </div>
      </header>
      <hr/>
      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg ">At Project Management Soft Skills, we are dedicated to providing exceptional services to enhance your project management capabilities. Whether you're seeking consultancy, training, or tailored solutions, we're here to help. Feel free to reach out to us using the following contact details:</p>
          </div>
          <div className="mt-8 max-w-lg mx-auto">
            <h2 className="text-xl font-bold ">Contact Information</h2>
            <ul className="mt-4 text-lg  list-disc list-inside text-gray-900">
              <li>Email: info@projectmanagementskills.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 1234 Main Street, City, Country</li>
            </ul>
            <p className="mt-8 text-lg ">For any inquiries or to schedule a consultation, please don't hesitate to contact us. We look forward to assisting you with your project management needs.</p>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default ContactUs;
