import React from "react";
import Link from "next/link";

const LatestUpdates = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News Card */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <span className="inline-block bg-primary/20 text-primary text-xs font-medium px-2 py-1 rounded mb-4">
                NEWS
              </span>
              <h3 className="text-lg font-bold mb-2">
                2025 Tax Filing Season Opens
              </h3>
              <p className="text-gray-600 mb-4">
                The IRS has announced the official start date for the 2025 tax
                filing season. Be ready with SimpleTax.
              </p>
              <Link
                href="/news/2025-tax-season"
                className="inline-flex items-center text-primary hover:underline"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Updates Card */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded mb-4">
                UPDATES
              </span>
              <h3 className="text-lg font-bold mb-2">
                New Tax Credits Available
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about the new energy-efficient home improvement tax
                credits available for this tax year.
              </p>
              <Link
                href="/updates/new-tax-credits"
                className="inline-flex items-center text-primary hover:underline"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Tips Card */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded mb-4">
                TIPS
              </span>
              <h3 className="text-lg font-bold mb-2">
                Maximize Your Tax Refund
              </h3>
              <p className="text-gray-600 mb-4">
                Top 5 strategies to ensure you don't miss any deductions and get
                the maximum refund possible.
              </p>
              <Link
                href="/tips/maximize-refund"
                className="inline-flex items-center text-primary hover:underline"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
