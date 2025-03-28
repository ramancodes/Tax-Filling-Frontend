// 'use client';

// import { useState } from 'react';
// import { 
//   Calculate as CalculateIcon, 
//   AccountBalance as BankIcon, 
//   MoneyOff as DeductionIcon, 
//   TrendingUp as InvestmentIcon 
// } from '@mui/icons-material';

// export default function IndianTaxCalculatorPage() {
//   // State variables
//   const [calculationType, setCalculationType] = useState('income');
//   const [income, setIncome] = useState('');
//   const [age, setAge] = useState('');
//   const [taxRegime, setTaxRegime] = useState('new');
//   const [deductions, setDeductions] = useState({
//     section80C: 0,
//     section80D: 0,
//     homeInterest: 0
//   });

//   // 2024-2025 Indian Tax Slabs (New Regime)
//   const newTaxSlabs = [
//     { min: 0, max: 300000, rate: 0, rebate: true },
//     { min: 300001, max: 600000, rate: 0.05 },
//     { min: 600001, max: 900000, rate: 0.10 },
//     { min: 900001, max: 1200000, rate: 0.15 },
//     { min: 1200001, max: 1500000, rate: 0.20 },
//     { min: 1500001, max: Infinity, rate: 0.30 }
//   ];

//   // 2024-2025 Old Regime Tax Slabs
//   const oldTaxSlabs = [
//     { min: 0, max: 250000, rate: 0, rebate: true },
//     { min: 250001, max: 500000, rate: 0.05 },
//     { min: 500001, max: 750000, rate: 0.10 },
//     { min: 750001, max: 1000000, rate: 0.15 },
//     { min: 1000001, max: 1250000, rate: 0.20 },
//     { min: 1250001, max: 1500000, rate: 0.25 },
//     { min: 1500001, max: Infinity, rate: 0.30 }
//   ];

//   const calculateIncomeTax = () => {
//     const numericIncome = parseFloat(income);
//     if (isNaN(numericIncome) || numericIncome <= 0) {
//       alert('Please enter a valid income amount.');
//       return;
//     }

//     const selectedSlabs = taxRegime === 'new' ? newTaxSlabs : oldTaxSlabs;
//     let totalTax = 0;
//     let rebateApplied = false;

//     for (let bracket of selectedSlabs) {
//       if (bracket.rebate && numericIncome <= bracket.max) {
//         rebateApplied = true;
//         break;
//       }

//       if (numericIncome > bracket.max) {
//         const bracketAmount = bracket.max - bracket.min;
//         totalTax += bracketAmount * bracket.rate;
//       } else if (numericIncome > bracket.min) {
//         const bracketAmount = numericIncome - bracket.min;
//         totalTax += bracketAmount * bracket.rate;
//         break;
//       }
//     }

//     // Health and Education Cess
//     const cess = totalTax * 0.04;
//     const grossTax = totalTax + cess;

//     // Deductions (Section 80C, 80D, Home Interest)
//     const totalDeductions = 
//       deductions.section80C + 
//       deductions.section80D + 
//       deductions.homeInterest;

//     // Limit deductions
//     const maxSection80C = 150000;
//     const maxSection80D = 50000;
//     const maxHomeInterest = 200000;

//     const clampedDeductions = Math.min(
//       totalDeductions, 
//       maxSection80C + maxSection80D + maxHomeInterest
//     );

//     const netTax = Math.max(grossTax - clampedDeductions, 0);
//     const effectiveTaxRate = (netTax / numericIncome) * 100;

//     return {
//       totalTax: netTax.toFixed(2),
//       effectiveTaxRate: effectiveTaxRate.toFixed(2),
//       rebateApplied
//     };
//   };

//   const [taxResult, setTaxResult] = useState(null);

//   const handleCalculate = () => {
//     const result = calculateIncomeTax();
//     setTaxResult(result);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
//         <div className="p-6 bg-blue-600 text-white">
//           <h1 className="text-3xl font-bold text-center">Indian Tax Calculator 2024-25</h1>
//         </div>

//         <div className="p-6">
//           {/* Tax Regime Selection */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Select Tax Regime
//             </label>
//             <div className="flex space-x-4">
//               <button
//                 onClick={() => setTaxRegime('new')}
//                 className={`px-4 py-2 rounded-md transition ${
//                   taxRegime === 'new' 
//                     ? 'bg-blue-600 text-white' 
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 New Regime
//               </button>
//               <button
//                 onClick={() => setTaxRegime('old')}
//                 className={`px-4 py-2 rounded-md transition ${
//                   taxRegime === 'old' 
//                     ? 'bg-blue-600 text-white' 
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 Old Regime
//               </button>
//             </div>
//           </div>

//           {/* Income Input */}
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Annual Income</label>
//               <input
//                 type="number"
//                 value={income}
//                 onChange={(e) => setIncome(e.target.value)}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
//                 placeholder="Enter annual income (₹)"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Age Group</label>
//               <select
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
//               >
//                 <option value="">Select Age Group</option>
//                 <option value="below-60">Below 60 Years</option>
//                 <option value="60-80">60-80 Years</option>
//                 <option value="above-80">Above 80 Years</option>
//               </select>
//             </div>
//           </div>

//           {/* Deductions Section */}
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold mb-4 text-gray-800">Deductions</h2>
//             <div className="grid md:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   <DeductionIcon className="mr-2 text-blue-600" />
//                   Section 80C (₹)
//                 </label>
//                 <input
//                   type="number"
//                   value={deductions.section80C}
//                   onChange={(e) => setDeductions(prev => ({...prev, section80C: parseFloat(e.target.value) || 0}))}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                   placeholder="Max ₹1,50,000"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   <BankIcon className="mr-2 text-green-600" />
//                   Section 80D (₹)
//                 </label>
//                 <input
//                   type="number"
//                   value={deductions.section80D}
//                   onChange={(e) => setDeductions(prev => ({...prev, section80D: parseFloat(e.target.value) || 0}))}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                   placeholder="Max ₹50,000"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   <InvestmentIcon className="mr-2 text-purple-600" />
//                   Home Loan Interest (₹)
//                 </label>
//                 <input
//                   type="number"
//                   value={deductions.homeInterest}
//                   onChange={(e) => setDeductions(prev => ({...prev, homeInterest: parseFloat(e.target.value) || 0}))}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                   placeholder="Max ₹2,00,000"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Calculate Button */}
//           <div className="mt-6">
//             <button
//               onClick={handleCalculate}
//               className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition flex items-center justify-center"
//             >
//               <CalculateIcon className="mr-2" /> Calculate Tax
//             </button>
//           </div>

//           {/* Tax Results */}
//           {taxResult && (
//             <div className="mt-6 bg-gray-50 p-6 rounded-lg">
//               <h2 className="text-2xl font-bold mb-4 text-gray-800">Tax Calculation Results</h2>
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div className="bg-white p-4 rounded-md shadow-md">
//                   <p className="text-sm text-gray-600">Total Tax Payable</p>
//                   <p className="text-2xl font-bold text-blue-600">₹{taxResult.totalTax}</p>
//                 </div>
//                 <div className="bg-white p-4 rounded-md shadow-md">
//                   <p className="text-sm text-gray-600">Effective Tax Rate</p>
//                   <p className="text-2xl font-bold text-green-600">{taxResult.effectiveTaxRate}%</p>
//                 </div>
//               </div>
//               {taxResult.rebateApplied && (
//                 <div className="mt-4 bg-green-100 p-3 rounded-md">
//                   <p className="text-green-800">Tax Rebate Applied: No Tax Payable</p>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }