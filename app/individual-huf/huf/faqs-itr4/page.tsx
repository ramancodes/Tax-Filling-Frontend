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
      question: "What is ITR-4 (SUGAM)?",
      answer: "ITR-4 (SUGAM) is a tax return form for Individuals, HUFs & Firms (other than LLP) who have opted for presumptive income scheme u/s 44AD, 44ADA & 44AE. It's used for individuals and HUFs having income from Proprietary business or profession, and for computing business income on presumptive basis."
    },
    {
      question: "Do I need to maintain books of accounts and get them audited under Section 44AB?",
      answer: "If you are declaring profit at the rate of 8% or 6% (in case of digital transactions) under Section 44AD, 50% under Section 44ADA, and as per Section 44AE of the Act, maintaining books of accounts is not required. However, if you claim profits lower than the specified rates, you must maintain books of accounts and get them audited under Section 44AB if your total sales, turnover, or gross receipts exceed ₹1 crore (or ₹2 crore if 95% of transactions are through banking channels including digital means)."
    },
    {
      question: "If I have opted for Section 44AD or 44ADA, can I file my return in ITR-4?",
      answer: "Yes, ITR-4 is specifically designed for taxpayers who have opted for presumptive income schemes under Sections 44AD, 44ADA, or 44AE. This form simplifies the return filing process for eligible businesses and professionals."
    },
    {
      question: "What is the taxable income threshold for ITR-4?",
      answer: "There is no threshold limit for filing ITR-4. However, the presumptive taxation schemes under Sections 44AD, 44ADA, and 44AE have their own eligibility criteria: Section 44AD applies to eligible businesses with turnover up to ₹2 crores, Section 44ADA applies to specified professionals with gross receipts up to ₹50 lakhs, and Section 44AE applies to persons engaged in the business of plying, hiring, or leasing goods carriages with a maximum of 10 goods carriages at any time during the year."
    },
    {
      question: "Can a non-resident file ITR-4?",
      answer: "No, non-resident individuals cannot file ITR-4. This form is only for resident individuals, HUFs, and firms (other than LLPs) who qualify for and opt for the presumptive taxation schemes."
    },
    {
      question: "If I have income from salary and also presumptive business income, which ITR form should I file?",
      answer: "You should file ITR-4 if you have income from salary as well as presumptive business income under Sections 44AD, 44ADA, or 44AE. ITR-4 accommodates both these sources of income."
    },
    {
      question: "Can I file ITR-4 if I have a house property along with my business income?",
      answer: "Yes, you can file ITR-4 if you have income from one house property along with presumptive business income. However, if you have income from more than one house property, you cannot use ITR-4 and must file ITR-3 instead."
    },
    {
      question: "If I am a partner in a partnership firm, can I file ITR-4?",
      answer: "Yes, if you are a partner in a partnership firm and also have presumptive business income under Sections 44AD, 44ADA, or 44AE, you can file ITR-4. The salary and interest received from the firm should be reported under 'Income from Other Sources'."
    },
    {
      question: "If my business turnover is Rs. 40 lakh, can I file my return in ITR-4?",
      answer: "Yes, if your business turnover is ₹40 lakhs and you opt for the presumptive taxation scheme under Section 44AD, you can file ITR-4. The turnover limit for Section 44AD is ₹2 crores."
    },
    {
      question: "If I have incurred a loss in my business, can I file ITR-4?",
      answer: "No, you cannot declare a loss from business in ITR-4 under the presumptive taxation schemes. If you have incurred a loss and want to carry it forward, you must file ITR-3 with proper books of accounts and audit if applicable."
    },
    {
      question: "If I have income from Capital Gains, can I file ITR-4?",
      answer: "No, if you have income from Capital Gains (short-term or long-term), you cannot file ITR-4. You would need to file ITR-2 or ITR-3 depending on your other income sources."
    },
    {
      question: "I have income from Proprietary business and from a Partnership Firm. Which form should I use?",
      answer: "If you have income from your proprietary business under presumptive taxation schemes (44AD, 44ADA, or 44AE) and also receive income from a partnership firm as salary or interest, you can use ITR-4. Report the firm income under 'Income from Other Sources'."
    },
    {
      question: "What is the due date for filing ITR-4?",
      answer: "The due date for filing ITR-4 is July 31 following the end of the financial year if you are not required to get your accounts audited. If audit is required under Section 44AB, the due date is October 31. Always check for any extensions announced by the Income Tax Department."
    },
    {
      question: "I am a salaried individual having income from trading of shares. Which ITR form should I file?",
      answer: "If you have salary income and income from trading shares, where trading of shares is treated as capital gains, you should file ITR-2. If trading of shares is your business activity, you should file ITR-3. You cannot use ITR-4 if you have capital gains income."
    },
    {
      question: "Can a director of a company file ITR-4?",
      answer: "No, a director of a company cannot file ITR-4, regardless of having presumptive business income. Directors must file ITR-2 or ITR-3 depending on their sources of income."
    }
  ];

  return (
    <div className="min-h-screen container mx-auto py-6 px-4">
      <nav className="flex text-sm mb-6">
        <a href="/" className="text-blue-500 hover:underline">Home</a>
        <span className="mx-2">›</span>
        <a href="/individual-huf" className="text-blue-500 hover:underline">Individual/HUF</a>
        <span className="mx-2">›</span>
        <a href="/individual-huf/huf" className="text-blue-500 hover:underline">Hindu Undivided Family (HUF) for AY 2025-2026</a>
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