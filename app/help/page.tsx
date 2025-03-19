'use client'
import React, { useState } from 'react';

const Help = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [expandedFaq, setExpandedFaq] = useState<Number | null>(null);

  const toggleFaq = (index: Number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. Fill in your personal details, email address, and create a password. You'll need to verify your email before you can start filing taxes."
    },
    {
      question: "What documents do I need to file my taxes?",
      answer: "You'll need Form 16 (if you're salaried), bank statements, investment proofs (for Section 80C, 80D deductions), home loan statements (if applicable), rent receipts (if you pay rent), and any other income or investment documents. Our system will guide you through the specific documents needed based on your income sources."
    },
    {
      question: "How secure is my data on your platform?",
      answer: "We implement bank-level security measures including 256-bit encryption, secure socket layer (SSL) protection, and two-factor authentication. Your data is stored in encrypted format on secure servers with regular security audits. We never share your information with third parties without your explicit consent."
    },
    {
      question: "How do I know which ITR form to file?",
      answer: "Our system automatically determines the appropriate ITR form based on your income sources and personal details. After you input your information, we'll recommend the correct form (ITR-1, ITR-2, etc.) according to the latest Income Tax Department guidelines."
    },
    {
      question: "Can I save my progress and continue later?",
      answer: "Yes, your progress is automatically saved as you go through each section. You can log out and return to continue from where you left off at any time before the filing deadline."
    },
    {
      question: "What if I make a mistake in my filing?",
      answer: "If you discover a mistake after submission but before verification, you can make corrections and resubmit. If you've already verified your return, you can file a revised return within the time limit specified by the Income Tax Department (usually before the end of the assessment year or before the return is processed)."
    },
    {
      question: "How do I know if my tax return was successfully filed?",
      answer: "After submitting your return, you'll receive an acknowledgment number. You can check the status of your filing in your dashboard. Additionally, you'll receive email notifications about the progress of your filing including submission, verification, and processing updates."
    }
  ];

  const resources = [
    {
      title: "Tax Filing Guide",
      description: "A comprehensive step-by-step guide to filing your taxes efficiently",
      icon: "📋",
      link: "#"
    },
    {
      title: "Deductions Handbook",
      description: "Complete list of available tax deductions and how to claim them",
      icon: "💰",
      link: "#"
    },
    {
      title: "Video Tutorials",
      description: "Visual guides for navigating our platform and understanding tax concepts",
      icon: "🎬",
      link: "#"
    },
    {
      title: "Tax Calculator",
      description: "Estimate your tax liability before filing",
      icon: "🧮",
      link: "#"
    },
    {
      title: "Document Checklist",
      description: "Printable list of documents needed for various income sources",
      icon: "✅",
      link: "#"
    },
    {
      title: "Income Tax Glossary",
      description: "Definitions of common tax terms in simple language",
      icon: "📚",
      link: "#"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Help & Support</h1>
        <p className="text-xl text-gray-600">Find answers and resources to make your tax filing experience smooth</p>
      </div>

      {/* Main Tabs */}
      <div className="mb-8">
        <div className="flex border-b border-gray-200">
          <button
            className={`py-2 px-4 font-medium text-sm mr-4 ${activeTab === 'faq' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('faq')}
          >
            Frequently Asked Questions
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm mr-4 ${activeTab === 'resources' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      {activeTab === 'faq' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="p-4 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resources Section */}
      {activeTab === 'resources' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Resources & Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <a 
                key={index} 
                href={resource.link}
                className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{resource.icon}</span>
                  <h3 className="text-lg font-medium text-gray-800">{resource.title}</h3>
                </div>
                <p className="text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Latest Tax Updates</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <p className="text-gray-700">Budget 2024: Changes to tax slabs and implications for taxpayers</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <p className="text-gray-700">New deadline announced for filing ITR for AY 2024-25</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <p className="text-gray-700">Updates to Section 80C deductions for the current fiscal year</p>
              </li>
            </ul>
            <a href="#" className="block mt-4 text-blue-600 hover:text-blue-800 font-medium">
              View all tax updates →
            </a>
          </div>
        </div>
      )}

      {/* Quick Help Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Help</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-gray-700 text-center">Create New Return</span>
          </a>
          <a href="#" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <span className="text-gray-700 text-center">Reset Password</span>
          </a>
          <a href="#" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-gray-700 text-center">View Tax Forms</span>
          </a>
          <a href="#" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="text-gray-700 text-center">Download Returns</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;