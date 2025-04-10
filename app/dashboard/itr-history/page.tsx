"use client";

import { useState } from "react";
import Link from "next/link";
// Material UI icons instead of Lucide
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DescriptionIcon from '@mui/icons-material/Description';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Define the income details interface
interface IncomeDetail {
  incomeType: string;
  incomeAmount: number;
}

// Define the ITR history interface
interface ITRRecord {
  id: string;
  itrType: string;
  fileDate: string;
  amount: number;
  incomeDetails: IncomeDetail[];
}

export default function ITRHistoryPage() {
  // Sample data - in a real app, this would come from an API call
  const [itrRecords, setItrRecords] = useState<ITRRecord[]>([
    {
      id: "itr_1",
      itrType: "ITR-1",
      fileDate: "15 Jul 2023",
      amount: 25000,
      incomeDetails: [
        { incomeType: "Salary", incomeAmount: 950000 },
        { incomeType: "Interest", incomeAmount: 15000 },
      ],
    },
    {
      id: "itr_2",
      itrType: "ITR-2",
      fileDate: "24 Mar 2023",
      amount: 75000,
      incomeDetails: [
        { incomeType: "Salary", incomeAmount: 1250000 },
        { incomeType: "Rental Income", incomeAmount: 360000 },
        { incomeType: "Capital Gains", incomeAmount: 120000 },
      ],
    },
    {
      id: "itr_3",
      itrType: "ITR-4",
      fileDate: "10 Sep 2022",
      amount: 42500,
      incomeDetails: [
        { incomeType: "Business Income", incomeAmount: 1850000 },
        { incomeType: "Other Sources", incomeAmount: 75000 },
      ],
    },
  ]);

  // Track which dropdowns are open
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  // Toggle dropdown visibility
  const toggleDropdown = (id: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to view ITR file
  const handleViewITR = (id: string) => {
    // In a real app, this would open the file or redirect to a viewer
    console.log(`Viewing ITR with ID: ${id}`);
    alert(`Viewing ITR file with ID: ${id}`);
  };

  // Format amount as currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-6 px-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex text-sm mb-6">
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>
          <span className="mx-2">›</span>
          <p className="text-gray-500">ITR History</p>
        </nav>

        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Income Tax Return History
        </h1>

        {/* ITR Records */}
        {itrRecords.length > 0 ? (
          <div className="space-y-4">
            {itrRecords.map((record) => (
              <div
                key={record.id}
                className="bg-white shadow rounded-lg p-6"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center space-x-2">
                      <DescriptionIcon className="text-blue-500" fontSize="small" />
                      <p className="text-lg font-semibold">{record.itrType}</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">Filed on: {record.fileDate}</p>
                    <p className="text-gray-800 font-medium mt-2">Tax Amount: {formatCurrency(record.amount)}</p>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleViewITR(record.id)}
                      className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                      <VisibilityIcon fontSize="small" className="mr-2" /> View
                    </button>
                    <button
                      onClick={() => toggleDropdown(record.id)}
                      className="flex items-center px-4 py-2 bg-[#303c8c] text-white rounded hover:bg-[#25305f] transition-colors"
                    >
                      Income Details {openDropdowns[record.id] ? 
                        <KeyboardArrowUpIcon fontSize="small" className="ml-2" /> : 
                        <KeyboardArrowDownIcon fontSize="small" className="ml-2" />}
                    </button>
                  </div>
                </div>

                {/* Income Details Dropdown */}
                {openDropdowns[record.id] && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h3 className="font-medium mb-3">Income Details</h3>
                    <div className="bg-gray-50 rounded-md p-3">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-gray-600">
                            <th className="pb-2">Income Type</th>
                            <th className="pb-2">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {record.incomeDetails.map((detail, idx) => (
                            <tr key={idx} className="border-t border-gray-200">
                              <td className="py-2">{detail.incomeType}</td>
                              <td className="py-2">{formatCurrency(detail.incomeAmount)}</td>
                            </tr>
                          ))}
                          <tr className="border-t border-gray-200 font-semibold">
                            <td className="py-2">Total Income</td>
                            <td className="py-2">
                              {formatCurrency(
                                record.incomeDetails.reduce((total, item) => total + item.incomeAmount, 0)
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-10 mt-20">
            <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-5xl">📄</span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <p className="text-xl font-semibold">No ITRs Filed</p>
              <p className="text-gray-600 text-center max-w-md">
                You haven't filed any Income Tax Returns yet. When you file your first ITR, it will appear here.
              </p>
              <Link
                href="/itr/file"
                className="mt-2 px-6 py-3 bg-[#303c8c] text-white rounded-md hover:bg-[#25305f] transition-colors"
              >
                File ITR Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}