import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      <nav className="flex text-sm mb-6">
        <a href="/" className="text-blue-500 hover:underline">Home</a>
        <span className="mx-2">›</span>
        <p className="text-gray-500">About</p>
      </nav>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About SimpleTax
          </h1>
          <p className="text-xl text-gray-600">
            Your trusted partner for hassle-free tax filing in India
          </p>
        </div>

        {/* About the Website Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            About the Website
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
              <Image
                src="/logo.svg"
                alt="Project Logo"
                className="rounded-lg shadow-md"
                width={400}
                height={400}
              />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <p className="text-gray-700 mb-4">
                  This website is developed in 2025 as a college major project,
                  aiming to deliver a seamless and efficient tax management
                  experience. The project leverages modern web technologies to
                  provide a robust and scalable solution.
                </p>
                <p className="text-gray-700 mb-4">
                  We prioritize data security, accuracy, and compliance while
                  ensuring an intuitive user experience. Our system integrates
                  advanced algorithms to optimize tax calculations and keep users
                  updated with the latest financial regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Indian Tax System Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            About Indian Tax System
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex gap-2 justify-center items-center">
            <Image
              src="/india.svg"
              alt="India"
              className="bg-[#1a2038] px-2 py-1 rounded"
              width={200}
              height={200}
            />
              <p className="text-gray-700 mb-4">
                The Indian tax system is administered by the Central Board of
                Direct Taxes (CBDT) and the Central Board of Indirect Taxes and
                Customs (CBIC). Income tax in India follows a progressive
                structure with different tax slabs based on income levels.
              </p>
            </div>
            <div className="my-8">
              <h3 className="text-xl font-semibold mb-4">
                Key Components of Indian Tax System:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <a className="border rounded-lg p-4 hover:shadow-md transition-shadow" href="https://dor.gov.in/direct-tax" target="_blank">
                  <h4 className="text-lg font-medium text-[#1f2c76] mb-2">
                    Direct Taxes
                  </h4>
                  <p className="text-gray-700">
                    Income Tax, Corporate Tax, Capital Gains Tax, and more,
                    collected directly from individuals and organizations.
                  </p>
                </a>
                <a className="border rounded-lg p-4 hover:shadow-md transition-shadow" href="https://www.mospi.gov.in/sites/default/files/Statistical_year_book_india_chapters/DIRECT-INDIRECT%20TAX-WRITEUP.pdf" target="_blank">
                  <h4 className="text-lg font-medium text-[#1f2c76] mb-2">
                    Indirect Taxes
                  </h4>
                  <p className="text-gray-700">
                    GST (Goods and Services Tax), Customs Duty, and other taxes
                    collected from intermediaries.
                  </p>
                </a>
                <a className="border rounded-lg p-4 hover:shadow-md transition-shadow" href="https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable-1" target="_blank">
                  <h4 className="text-lg font-medium text-[#1f2c76] mb-2">
                    Tax Regimes
                  </h4>
                  <p className="text-gray-700">
                    Options between old and new tax regimes with different
                    deduction structures and tax rates.
                  </p>
                </a>
                <a className="border rounded-lg p-4 hover:shadow-md transition-shadow" href="https://incometaxindia.gov.in/Pages/e-filing.aspx" target="_blank">
                  <h4 className="text-lg font-medium text-[#1f2c76] mb-2">
                    Filing Requirements
                  </h4>
                  <p className="text-gray-700">
                    Annual filing requirements based on income thresholds, with
                    various forms (ITR-1, ITR-2, etc.) for different income
                    sources.
                  </p>
                </a>
              </div>
            </div>
            <p className="text-gray-700">
              Understanding and navigating this complex system is where SimpleTax
              comes in. We simplify the process by automatically determining which
              forms you need to file, which deductions you qualify for, and
              ensuring compliance with all regulations.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-[#1f2c76] text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to simplify your tax filing?
          </h2>
          <p className="mb-6 text-lg">
            Join thousands of satisfied users who have made tax season stress-free
            with SimpleTax.
          </p>
          <Link href="/file-tax" className="bg-white text-[#1f2c76] font-semibold py-3 px-8 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
