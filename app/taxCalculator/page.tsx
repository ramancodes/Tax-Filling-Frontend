// app/tax-calculator/page.jsx
'use client';

import { useState } from 'react';
import { Calculate, AttachMoney, AccountBalance, TrendingUp } from '@mui/icons-material';

export default function TaxCalculatorPage() {
  const [calculationType, setCalculationType] = useState('income');
  const [income, setIncome] = useState('');
  const [filingStatus, setFilingStatus] = useState('single');
  const [taxResult, setTaxResult] = useState(null);

  const taxBrackets2025 = {
    single: [
      { min: 0, max: 11000, rate: 0.10 },
      { min: 11001, max: 44725, rate: 0.12 },
      { min: 44726, max: 95375, rate: 0.22 },
      { min: 95376, max: 182100, rate: 0.24 },
      { min: 182101, max: 231250, rate: 0.32 },
      { min: 231251, max: 578125, rate: 0.35 },
      { min: 578126, max: Infinity, rate: 0.37 }
    ],
    married: [
      { min: 0, max: 22000, rate: 0.10 },
      { min: 22001, max: 89450, rate: 0.12 },
      { min: 89451, max: 190750, rate: 0.22 },
      { min: 190751, max: 364200, rate: 0.24 },
      { min: 364201, max: 462500, rate: 0.32 },
      { min: 462501, max: 693750, rate: 0.35 },
      { min: 693751, max: Infinity, rate: 0.37 }
    ]
  };

  const calculateIncomeTax = () => {
    const numericIncome = parseFloat(income);
    if (isNaN(numericIncome) || numericIncome <= 0) {
      alert('Please enter a valid income amount.');
      return;
    }

    const brackets = taxBrackets2025[filingStatus];
    let totalTax = 0;

    for (let bracket of brackets) {
      if (numericIncome > bracket.max) {
        // Full bracket taxed
        const bracketAmount = bracket.max - bracket.min;
        totalTax += bracketAmount * bracket.rate;
      } else if (numericIncome > bracket.min) {
        // Partial bracket taxed
        const bracketAmount = numericIncome - bracket.min;
        totalTax += bracketAmount * bracket.rate;
        break;
      }
    }

    const effectiveTaxRate = (totalTax / numericIncome) * 100;

    setTaxResult({
      totalTax: totalTax.toFixed(2),
      effectiveTaxRate: effectiveTaxRate.toFixed(2)
    });
  };

  const renderCalculatorSection = () => {
    switch (calculationType) {
      case 'income':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Annual Income</label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                placeholder="Enter your annual income"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Filing Status</label>
              <select
                value={filingStatus}
                onChange={(e) => setFilingStatus(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
              >
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
              </select>
            </div>
            
            <button
              onClick={calculateIncomeTax}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Calculate Tax
            </button>
          </div>
        );
      case 'capital-gains':
        return <div>Capital Gains Tax Calculator (Coming Soon)</div>;
      case 'retirement':
        return <div>Retirement Tax Planning (Coming Soon)</div>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Tax Calculator</h1>
        
        {/* Calculator Type Selection */}
        <div className="flex justify-center space-x-4 mb-6">
          <button 
            onClick={() => setCalculationType('income')}
            className={`flex items-center px-4 py-2 rounded-md transition ${
              calculationType === 'income' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <AttachMoney className="mr-2" /> Income Tax
          </button>
          
          <button 
            onClick={() => setCalculationType('capital-gains')}
            className={`flex items-center px-4 py-2 rounded-md transition ${
              calculationType === 'capital-gains' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <TrendingUp className="mr-2" /> Capital Gains
          </button>
          
          <button 
            onClick={() => setCalculationType('retirement')}
            className={`flex items-center px-4 py-2 rounded-md transition ${
              calculationType === 'retirement' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <AccountBalance className="mr-2" /> Retirement
          </button>
        </div>
        
        {/* Calculator Section */}
        {renderCalculatorSection()}
        
        {/* Results Section */}
        {taxResult && (
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Tax Calculation Results</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-sm text-gray-600">Total Tax</p>
                <p className="text-2xl font-bold text-blue-600">${taxResult.totalTax}</p>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-sm text-gray-600">Effective Tax Rate</p>
                <p className="text-2xl font-bold text-green-600">{taxResult.effectiveTaxRate}%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}