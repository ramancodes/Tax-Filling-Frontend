import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
        {/* Footer */}
      <footer className="bg-[#1a2038] text-white py-12 px-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              {/* <h3 className="text-lg font-bold mb-4">SimpleTax</h3> */}
              <Link href='/'>
                  <Image
                  src="/logo-dark.svg"
                  alt="SimpleTax Logo"
                  width={180}
                  height={150}
                  className='mb-4 text-white'
                  />
              </Link>
              <p className="text-gray-400">
                Making tax filing simple, accurate, and affordable.
              </p>
            </div>
            
            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tax-guides" className="text-gray-400 hover:text-white">
                    Tax Guides
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-gray-400 hover:text-white">
                    Tax Calculators
                  </Link>
                </li>
                <li>
                  <Link href="/forms" className="text-gray-400 hover:text-white">
                    Tax Forms
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/aboutDeveloper" className="text-gray-400 hover:text-white">
                    About Developer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-4">Related Sites</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://incometaxindia.gov.in/Pages/default.aspx" target='_blank' className="text-gray-400 hover:text-white">
                  Income Tax India
                  </Link>
                </li>
                <li>
                  <Link href="https://tdscpc.gov.in/app/login.xhtml" target='_blank' className="text-gray-400 hover:text-white">
                  TRACES
                  </Link>
                </li>
                <li>
                  <Link href="https://www.protean-tinpan.com/" target='_blank' className="text-gray-400 hover:text-white">
                  Protean (previously NSDL)
                  </Link>
                </li>
                <li>
                  <Link href="https://incometaxindia.gov.in/Pages/right-to-information.aspx" target='_blank' className="text-gray-400 hover:text-white">
                  Right To Information (ITD)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-400 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className='flex justify-center items-center gap-6'>
              <Link href='https://www.incometax.gov.in/iec/foportal/' target='_blank'>
                <Image
                width={130}
                height={100}
                 src="/india.svg" 
                 alt="india" />
              </Link>
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 SimpleTax. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/security" className="text-gray-400 hover:text-white">
                Security
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;