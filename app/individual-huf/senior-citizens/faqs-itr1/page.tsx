'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function ITR1FAQ() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index: any) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  const faqItems = [
    {
      question: "Who can file ITR-1?",
      answer: "ITR-1 can be filed by a resident individual having total income upto Rs.50 lakh, having income from salaries, one house property, other sources (interest etc.), and agricultural income upto Rs.5 thousand. Non-residents cannot use ITR-1 form."
    },
    {
      question: "Who cannot file ITR-1?",
      answer: "ITR-1 cannot be filed by individuals who are directors in companies, have investments in unlisted equity shares, or have income from more than one house property. It also cannot be used by those with lottery/horse race winnings, income from business/profession, capital gains, or foreign income/assets."
    },
    {
      question: "How can I file ITR-1?",
      answer: "ITR-1 can be filed online through the Income Tax e-filing portal. You can either file directly through the portal using the 'File Now' option, or download the Excel/Java utility to prepare your return offline and upload later."
    },
    {
      question: "What documents do I need before filing ITR-1?",
      answer: "Before filing, keep your PAN card, Aadhaar card, Form 16 (from employer), bank statements showing interest income, rent receipts/agreements (if applicable), and details of tax-saving investments handy."
    },
    {
      question: "What is the due date for filing ITR-1?",
      answer: "For individuals not requiring tax audit, the due date is generally July 31 of the assessment year. Due dates may be extended by the government in special circumstances."
    },
    {
      question: "Can I revise my ITR-1 after filing?",
      answer: "Yes, if you discover any error or omission after filing, you can file a revised return before the end of the relevant assessment year or before completion of assessment, whichever is earlier."
    },
    {
      question: "Do I need to verify my ITR-1 after filing?",
      answer: "Yes, after filing ITR-1, you must verify it within 30 days of filing. Verification can be done through Aadhaar OTP, net banking, bank ATM, DEMAT account, bank account, or by sending a signed physical ITR-V to CPC Bengaluru."
    },
    {
      question: "How do I check the status of my ITR after filing?",
      answer: "You can check the status of your filed ITR by logging into the e-filing portal, navigating to 'View Filed Returns' under the 'e-File' menu, and selecting the relevant assessment year."
    }
  ];

  return (
    <div className="min-h-screen container mx-auto py-6 px-4">
      <nav className="flex text-sm mb-6">
        <a href="/" className="text-blue-500 hover:underline">Home</a>
        <span className="mx-2">›</span>
        <a href="/individual-huf" className="text-blue-500 hover:underline">Individual/HUF</a>
        <span className="mx-2">›</span>
        <a href="/individual-huf/senior-citizens" className="text-blue-500 hover:underline">Senior Citizens</a>
        <span className="mx-2">›</span>
        <p className="text-gray-500">ITR-1 FAQs</p>
      </nav>

      <p className="text-3xl font-bold text-center text-gray-800 mb-8">File ITR-1 (Sahaj) Online - FAQs</p>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {faqItems.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 last:border-0">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <svg 
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${expandedFaq === index ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 py-4 bg-gray-50 text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}