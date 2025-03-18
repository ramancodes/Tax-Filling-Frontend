'use client'
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: '',
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="py-8 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2">We're here to help with your tax filing questions and concerns.</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-[#1f2c76] mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Customer Support</h3>
                <p className="mt-2 text-gray-600">Our support team is available Monday through Friday, 8:00 AM to 8:00 PM IST.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Technical Support</h3>
                <p className="mt-2 text-gray-600">Having trouble with our website or software? Our technical team can help.</p>
                <p className="mt-1 text-[#1f2c76]">support@example.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                <div className="mt-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 8:00 PM IST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-[#1f2c76] mb-6">Send Us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <p className="font-medium">Thank you for contacting us!</p>
                <p>We've received your message and will get back to you within 24-48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Tax Filing Question">Tax Filing Question</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Billing Question">Billing Question</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border"
                    required
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#1f2c76] hover:text-[#1f2c76] border border-[#1f2c76] hover:bg-white hover:border hover:border-[#1f2c76] text-white font-medium py-2 px-4 rounded transition duration-150"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
            
            <div className="mt-6 text-sm text-gray-500">
              <p>We value your privacy. Any information you provide will only be used to address your inquiry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;