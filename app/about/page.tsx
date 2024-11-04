import React from 'react'

export default function AboutUs() {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/500x300" // replace with your actual image URL if available
            alt="About Everest City Mobiles"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-blue-600">About Everest City Mobiles</h2>
          <p className="text-lg">
            Everest City Mobiles has been at the forefront of the mobile industry, bringing the latest and greatest technology to our valued customers. With a strong commitment to customer satisfaction, we aim to deliver exceptional products and services.
          </p>
          <p>
            Founded in 2010, we have grown to become one of the most trusted names in the mobile phone industry. We offer a wide range of mobile devices, accessories, and after-sales services, ensuring that our customers find everything they need under one roof.
          </p>
          <p>
            Our team of dedicated professionals works tirelessly to source the latest models and keep up with the rapid advancements in mobile technology. We believe in building lasting relationships with our customers by providing reliable products and excellent support.
          </p>
        </div>
      </div>

      {/* Bottom Mission Section */}
      <div className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
        <p className="text-base md:text-lg">
          At Everest City Mobiles, our mission is to make high-quality mobile technology accessible and affordable to everyone. We strive to provide an unparalleled shopping experience, ensuring that each customer finds the perfect mobile device that meets their needs and budget.
        </p>
      </div>
    </div>
  );
}
