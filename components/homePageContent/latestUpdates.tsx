import React from "react";
import Link from "next/link";

const LatestUpdates = () => {
  // Array of update objects
  const updates = [
    {
      category: "NEWS",
      categoryColor: "primary",
      title: "2025 Tax Filing Season Opens",
      description: "The IRS has announced the official start date for the 2025 tax filing season. Be ready with SimpleTax.",
      link: "https://cleartax.in/s/due-date-tax-filing"
    },
    {
      category: "UPDATES",
      categoryColor: "green",
      title: "New Tax Credits Available",
      description: "Learn about the new energy-efficient home improvement tax credits available for this tax year.",
      link: "https://www.kotaklife.com/insurance-guide/savingstax/income-tax-deductions-list"
    },
    {
      category: "TIPS",
      categoryColor: "purple",
      title: "Maximize Your Tax Refund",
      description: "Top 5 strategies to ensure you don't miss any deductions and get the maximum refund possible.",
      link: "https://turbotax.intuit.com/tax-tips/tax-refund/5-hidden-ways-to-boost-your-tax-refund/L0AZGnJuSs"
    }
  ];

  type CategoryColor = "primary" | "green" | "purple";

  // Function to get the appropriate category style based on the category color
  const getCategoryStyle = (color: string) => {
    const styles: Record<CategoryColor, string> = {
      primary: "bg-primary/20 text-primary",
      green: "bg-green-100 text-green-800",
      purple: "bg-purple-100 text-purple-800"
    };
    return styles[color as CategoryColor] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map through the updates array to generate cards */}
          {updates.map((update, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="p-6">
                <span className={`inline-block ${getCategoryStyle(update.categoryColor)} text-xs font-medium px-2 py-1 rounded mb-4`}>
                  {update.category}
                </span>
                <h3 className="text-lg font-bold mb-2">
                  {update.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {update.description}
                </p>
                <Link
                  href={update.link}
                  target="_blank"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;