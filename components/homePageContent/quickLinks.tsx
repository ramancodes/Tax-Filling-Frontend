import React from 'react'
import Link from 'next/link';

const QuickLinks = () => {
  return (
    <section className="py-16 px-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Quick Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Individual Taxes */}
              <Link href="/individual-huf/salaried-employees" className='cursor-pointer'>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-6 text-center">
                    <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Individual Taxes</h3>
                    <p className="text-gray-600 mb-4">File your personal income tax return</p>
                      Learn More
                  </div>
                </div>
              </Link>
              
              {/* Business Taxes */}
              <Link href="/individual-huf/business-profession" className='cursor-pointer'>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-6 text-center">
                    <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Business Taxes</h3>
                    <p className="text-gray-600 mb-4">Solutions for small to medium businesses</p>
                      Learn More
                  </div>
                </div>
              </Link>
              
              {/* File Tax */}
              <Link href="/file-tax" className='cursor-pointer'>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-6 text-center">
                    <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2">File ITR</h3>
                    <p className="text-gray-600 mb-4">Estimate your tax return or liability</p>
                      Learn More
                  </div>
                </div>
              </Link>
              
              {/* Support Center */}
              <Link href="/help" className='cursor-pointer'>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-6 text-center">
                    <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Support Center</h3>
                    <p className="text-gray-600 mb-4">Get help with your tax questions</p>
                      Learn More
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
  )
}

export default QuickLinks