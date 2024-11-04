import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col items-center p-6 sm:p-8 md:p-12">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Contact Us</h1>

      {/* Form Container */}
      <div className="w-full max-w-lg flex flex-col gap-4">
        <form className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your name"
            required
          />

          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your email"
            required
          />

          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your message"
            required
          ></textarea>

          <button
            type="submit"
            className="p-3 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Container */}
      <div className="w-full max-w-lg mt-8 h-64 sm:h-80 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.2328525796933!2d-0.12775828423037296!3d51.50735077963595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333a53c1bd%3A0xc5e4e2d8b6174839!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1612345678910!5m2!1sen!2s"
          width="100%"
          height="100%"
          className="border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
