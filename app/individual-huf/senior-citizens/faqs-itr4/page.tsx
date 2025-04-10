'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function ITR4FAQ() {
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
      question: "Who can file ITR-4 (Sugam)?",
      answer: "ITR-4 can be filed by resident individuals, HUFs and firms (other than LLP) having income up to ₹50 lakhs and having income from business and profession which is computed on a presumptive basis under sections 44AD, 44ADA and 44AE of the Income Tax Act. It can also be used for income from salary/pension, one house property, other sources (excluding winnings from lottery and income from race horses), and agricultural income up to ₹5,000."
    },
    {
      question: "Who cannot file ITR-4 (Sugam)?",
      answer: "ITR-4 cannot be filed by a non-resident or not ordinarily resident, an individual who is a director in a company, a person having investments in unlisted equity shares, or anyone with income from capital gains, more than one house property, foreign assets/income, or income taxable under section 115BBDA. Also, a person claiming relief under sections 90, 91 or having brought forward/carry forward losses under the 'business and profession' head cannot use ITR-4."
    },
    {
      question: "What is presumptive taxation under section 44AD?",
      answer: "Under section 44AD, eligible businesses with a turnover up to ₹2 crores can declare a minimum of 6% of turnover (for digital transactions) or 8% of turnover (for cash transactions) as their income, without maintaining detailed books of accounts. This simplifies tax filing for small businesses by presuming this income without requiring detailed expense documentation."
    },
    {
      question: "What is presumptive taxation under section 44ADA?",
      answer: "Section 44ADA applies to professionals with gross receipts up to ₹50 lakhs. Under this, professionals can declare a minimum of 50% of their gross receipts as income. This scheme is available for professionals like lawyers, doctors, engineers, architects, accountants, and other notified professions under section 44AA(1)."
    },
    {
      question: "What is presumptive taxation under section 44AE?",
      answer: "Section 44AE applies to persons owning goods carriages (transport vehicles). Income is calculated presumptively as ₹1,000 per ton of gross vehicle weight (or unladen weight in certain cases) per month for each heavy goods vehicle, and ₹7,500 per month for each vehicle other than heavy goods vehicles, regardless of whether the vehicle is owned for the whole year or part."
    },
    {
      question: "How do I file ITR-4 online?",
      answer: "Log in to the Income Tax e-filing portal with your PAN and password. Select 'e-File' menu and click on 'Income Tax Return'. Select the relevant Assessment Year, choose 'ITR-4 (SUGAM)' as the ITR form, select 'Online' as the submission mode, and follow the on-screen instructions to fill and submit your return."
    },
    {
      question: "What documents do I need to prepare before filing ITR-4?",
      answer: "Keep your PAN card, Aadhaar card, bank statements, Form 16 (if salaried), rental agreements (if applicable), details of presumptive business income including turnover/gross receipts, tax payment challans if any, and details of tax-saving investments handy before starting your ITR-4 filing."
    },
    {
      question: "Do I need to maintain books of accounts if I file ITR-4 under presumptive taxation?",
      answer: "No, that's the primary benefit of the presumptive taxation scheme. If you declare income as per the prescribed rates under sections 44AD, 44ADA, or 44AE, you are not required to maintain detailed books of accounts. However, you should keep basic records of your turnover/receipts."
    },
    {
      question: "What is the due date for filing ITR-4?",
      answer: "For individuals and HUFs not requiring audit, the due date is generally July 31 of the assessment year. If your business needs a tax audit, the due date is extended, usually to October 31. Always check the official website for any extensions announced by the government."
    },
    {
      question: "Can I revise my ITR-4 after filing?",
      answer: "Yes, if you discover any error or omission after filing, you can file a revised return before the end of the relevant assessment year or before completion of assessment, whichever is earlier."
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
        <p className="text-gray-500">ITR-4 FAQs</p>
      </nav>

      <p className="text-3xl font-bold text-center text-gray-800 mb-8">File ITR-4 (Sugam) Online - FAQs</p>
      
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