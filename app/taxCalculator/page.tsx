"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function TaxCalculator() {
  // Form state
  const [assessmentYear, setAssessmentYear] = useState('2025-26');
  const [taxRegime, setTaxRegime] = useState('new');
  const [ageCategory, setAgeCategory] = useState('general');
  const [residentialStatus, setResidentialStatus] = useState('resident');
  const [gender, setGender] = useState('male');
  const [incomeFromSalary, setIncomeFromSalary] = useState('');
  const [incomeFromHouseProperty, setIncomeFromHouseProperty] = useState('');
  const [incomeFromBusinessProfession, setIncomeFromBusinessProfession] = useState('');
  const [incomeFromCapitalGains, setIncomeFromCapitalGains] = useState('');
  const [incomeFromOtherSources, setIncomeFromOtherSources] = useState('');
  const [exemptIncome, setExemptIncome] = useState('');
  const [deductionsUnderChapterVIA, setDeductionsUnderChapterVIA] = useState('');
  const [taxAlreadyPaid, setTaxAlreadyPaid] = useState('');
  
  // Results state
  const [showResults, setShowResults] = useState(false);
  const [calculationResults, setCalculationResults] = useState({
    totalIncome: 0,
    taxableIncome: 0,
    taxLiability: 0,
    educationCess: 0,
    totalTaxLiability: 0,
    taxRefund: 0,
    taxPayable: 0
  });

  const assessmentYearOptions = [
    { value: '2025-26', label: '2025-26' },
    { value: '2024-25', label: '2024-25' },
    { value: '2023-24', label: '2023-24' }
  ];

  const calculateTax = () => {
    // Parse all inputs to numbers, default to 0 if empty or NaN
    const salary = parseFloat(incomeFromSalary) || 0;
    const houseProperty = parseFloat(incomeFromHouseProperty) || 0;
    const business = parseFloat(incomeFromBusinessProfession) || 0;
    const capitalGains = parseFloat(incomeFromCapitalGains) || 0;
    const otherSources = parseFloat(incomeFromOtherSources) || 0;
    const exempt = parseFloat(exemptIncome) || 0;
    const deductions = parseFloat(deductionsUnderChapterVIA) || 0;
    const paidTax = parseFloat(taxAlreadyPaid) || 0;

    // Calculate total income
    const totalIncome = salary + houseProperty + business + capitalGains + otherSources;
    
    // Calculate taxable income after deductions
    const taxableIncome = Math.max(0, totalIncome - exempt - deductions);
    
    // Calculate tax based on regime and age category
    let taxLiability = 0;

    if (taxRegime === 'new') {
      // New Tax Regime
      if (taxableIncome <= 300000) {
        taxLiability = 0;
      } else if (taxableIncome <= 600000) {
        taxLiability = (taxableIncome - 300000) * 0.05;
      } else if (taxableIncome <= 900000) {
        taxLiability = 15000 + (taxableIncome - 600000) * 0.10;
      } else if (taxableIncome <= 1200000) {
        taxLiability = 45000 + (taxableIncome - 900000) * 0.15;
      } else if (taxableIncome <= 1500000) {
        taxLiability = 90000 + (taxableIncome - 1200000) * 0.20;
      } else {
        taxLiability = 150000 + (taxableIncome - 1500000) * 0.30;
      }
    } else {
      // Old Tax Regime
      const basicExemption = 
        ageCategory === 'senior' ? 300000 : 
        ageCategory === 'superSenior' ? 500000 : 250000;
      
      if (taxableIncome <= basicExemption) {
        taxLiability = 0;
      } else if (taxableIncome <= 500000) {
        taxLiability = (taxableIncome - basicExemption) * 0.05;
      } else if (taxableIncome <= 1000000) {
        taxLiability = (500000 - basicExemption) * 0.05 + (taxableIncome - 500000) * 0.20;
      } else {
        taxLiability = (500000 - basicExemption) * 0.05 + 500000 * 0.20 + (taxableIncome - 1000000) * 0.30;
      }
    }
    
    // Calculate education cess (4%)
    const educationCess = taxLiability * 0.04;
    
    // Calculate total tax liability
    const totalTaxLiability = taxLiability + educationCess;
    
    // Calculate tax payable or refund
    const taxRefund = paidTax > totalTaxLiability ? paidTax - totalTaxLiability : 0;
    const taxPayable = totalTaxLiability > paidTax ? totalTaxLiability - paidTax : 0;
    
    // Update results state
    setCalculationResults({
      totalIncome: totalIncome,
      taxableIncome: taxableIncome,
      taxLiability: taxLiability,
      educationCess: educationCess,
      totalTaxLiability: totalTaxLiability,
      taxRefund: taxRefund,
      taxPayable: taxPayable
    });

    // Show results
    setShowResults(true);
  };

  const resetForm = () => {
    setIncomeFromSalary('');
    setIncomeFromHouseProperty('');
    setIncomeFromBusinessProfession('');
    setIncomeFromCapitalGains('');
    setIncomeFromOtherSources('');
    setExemptIncome('');
    setDeductionsUnderChapterVIA('');
    setTaxAlreadyPaid('');
    setShowResults(false);
  };

  // Format number as currency
  const formatCurrency = (amount: any) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen container mx-auto py-6 px-4">
      <nav className="flex text-sm mb-6">
        <a href="/" className="text-blue-500 hover:underline">Home</a>
        <span className="mx-2">›</span>
        <p className="text-gray-500">Tax Calculator</p>
      </nav>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Income Tax Calculator</h1>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden mb-8">
          <div className="bg-blue-300 text-white px-6 py-4">
            <h2 className="text-xl font-semibold">Calculate Your Tax Liability</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* First column */}
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Assessment Year
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={assessmentYear}
                    onChange={(e) => setAssessmentYear(e.target.value)}
                  >
                    {assessmentYearOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Tax Regime
                  </label>
                  <div className="flex">
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        className="form-radio"
                        name="taxRegime"
                        value="old"
                        checked={taxRegime === 'old'}
                        onChange={() => setTaxRegime('old')}
                      />
                      <span className="ml-2">Old</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="taxRegime"
                        value="new"
                        checked={taxRegime === 'new'}
                        onChange={() => setTaxRegime('new')}
                      />
                      <span className="ml-2">New</span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Age Category
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={ageCategory}
                    onChange={(e) => setAgeCategory(e.target.value)}
                    disabled={taxRegime === 'new'}
                  >
                    <option value="general">Below 60 years</option>
                    <option value="senior">Between 60 and 80 years</option>
                    <option value="superSenior">Above 80 years</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Residential Status
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={residentialStatus}
                    onChange={(e) => setResidentialStatus(e.target.value)}
                  >
                    <option value="resident">Resident</option>
                    <option value="nonResident">Non-Resident</option>
                    <option value="notOrdinaryResident">Not Ordinarily Resident</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Gender
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    disabled={taxRegime === 'new'}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              {/* Second column */}
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Income from Salary
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    value={incomeFromSalary}
                    onChange={(e) => setIncomeFromSalary(e.target.value)}
                    placeholder="0"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Income from House Property
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    value={incomeFromHouseProperty}
                    onChange={(e) => setIncomeFromHouseProperty(e.target.value)}
                    placeholder="0"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Income from Business/Profession
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    value={incomeFromBusinessProfession}
                    onChange={(e) => setIncomeFromBusinessProfession(e.target.value)}
                    placeholder="0"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Income from Capital Gains
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    value={incomeFromCapitalGains}
                    onChange={(e) => setIncomeFromCapitalGains(e.target.value)}
                    placeholder="0"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Income from Other Sources
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    value={incomeFromOtherSources}
                    onChange={(e) => setIncomeFromOtherSources(e.target.value)}
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Third column */}
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Exempt Income
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    value={exemptIncome}
                    onChange={(e) => setExemptIncome(e.target.value)}
                    placeholder="0"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Deductions under Chapter VI-A
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    value={deductionsUnderChapterVIA}
                    onChange={(e) => setDeductionsUnderChapterVIA(e.target.value)}
                    placeholder="0"
                    disabled={taxRegime === 'new'}
                  />
                  {taxRegime === 'new' && (
                    <p className="text-sm text-red-600 mt-1">
                      Most deductions are not available in the new tax regime
                    </p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Tax Already Paid/TDS
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    value={taxAlreadyPaid}
                    onChange={(e) => setTaxAlreadyPaid(e.target.value)}
                    placeholder="0"
                  />
                </div>
                
                <div className="mt-8 flex space-x-4">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={calculateTax}
                  >
                    Calculate
                  </button>
                  <button
                    className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={resetForm}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {showResults && (
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-green-700 text-white px-6 py-4">
              <h2 className="text-xl font-semibold">Tax Calculation Results</h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Income Details</h3>
                  <table className="w-full mb-6">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Total Income</td>
                        <td className="py-2 text-right font-semibold">{formatCurrency(calculationResults.totalIncome)}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Exempt Income</td>
                        <td className="py-2 text-right font-semibold">{formatCurrency(parseFloat(exemptIncome) || 0)}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Deductions under Chapter VI-A</td>
                        <td className="py-2 text-right font-semibold">{formatCurrency(parseFloat(deductionsUnderChapterVIA) || 0)}</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-600 font-bold">Taxable Income</td>
                        <td className="py-2 text-right font-bold">{formatCurrency(calculationResults.taxableIncome)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Tax Details</h3>
                  <table className="w-full mb-6">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Income Tax</td>
                        <td className="py-2 text-right font-semibold">{formatCurrency(calculationResults.taxLiability)}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Education & Health Cess (4%)</td>
                        <td className="py-2 text-right font-semibold">{formatCurrency(calculationResults.educationCess)}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Total Tax Liability</td>
                        <td className="py-2 text-right font-semibold">{formatCurrency(calculationResults.totalTaxLiability)}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Tax Already Paid/TDS</td>
                        <td className="py-2 text-right font-semibold">{formatCurrency(parseFloat(taxAlreadyPaid) || 0)}</td>
                      </tr>
                      {calculationResults.taxPayable > 0 && (
                        <tr>
                          <td className="py-2 text-red-600 font-bold">Tax Payable</td>
                          <td className="py-2 text-right font-bold text-red-600">{formatCurrency(calculationResults.taxPayable)}</td>
                        </tr>
                      )}
                      {calculationResults.taxRefund > 0 && (
                        <tr>
                          <td className="py-2 text-green-600 font-bold">Tax Refund</td>
                          <td className="py-2 text-right font-bold text-green-600">{formatCurrency(calculationResults.taxRefund)}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200 mt-4">
                <p className="text-yellow-700 text-sm">
                  <strong>Disclaimer:</strong> This calculator is for informational purposes only and should not be considered as tax advice. 
                  The actual tax liability may vary based on various factors. Please consult a tax professional before filing your taxes.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Last Updated: April 2025 | Income Tax Department, Government of India</p>
        </div>
      </div>
    </div>
  );
}