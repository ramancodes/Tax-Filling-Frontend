'use client'
import { useRef, useState } from 'react';
import Head from 'next/head';

export default function ITRForm() {
  const [step, setStep] = useState(1);
  const [assessmentYear, setAssessmentYear] = useState('');
  // const [filingMode, setFilingMode] = useState('');
  const [filingType, setFilingType] = useState('');
  const [isAudited, setIsAudited] = useState('No');
  const [itrType, setItrType] = useState('');
  const [taxAmount, setTaxAmount] = useState('');
  const [fileName, setFileName] = useState('');
  
  const [showAssessmentDropdown, setShowAssessmentDropdown] = useState(false);
  const [showFilingTypeDropdown, setShowFilingTypeDropdown] = useState(false);
  const [showItrTypeDropdown, setShowItrTypeDropdown] = useState(false);
  
  const assessmentYears = ['2024-25', '2023-24', '2022-23', '2021-22', '2020-21'];
  const filingTypes = [
    'u/s 92CD - Modified Return',
    'u/s 139(9A) – After condonation of delay u/s 119(2)(b) / Court Order or Sanction Order of Business re-organisation of the Competent authority issued prior to 01.04.2022',
    '139(8A) - Updated Return'
  ];
  const itrTypes = ['ITR-1', 'ITR-2', 'ITR-3', 'ITR-4'];

  const handleContinue = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleAssessmentDropdown = () => {
    setShowAssessmentDropdown(!showAssessmentDropdown);
    setShowFilingTypeDropdown(false);
    setShowItrTypeDropdown(false);
  };

  const toggleFilingTypeDropdown = () => {
    setShowFilingTypeDropdown(!showFilingTypeDropdown);
    setShowAssessmentDropdown(false);
    setShowItrTypeDropdown(false);
  };

  const toggleItrTypeDropdown = () => {
    setShowItrTypeDropdown(!showItrTypeDropdown);
    setShowAssessmentDropdown(false);
    setShowFilingTypeDropdown(false);
  };

  const selectAssessmentYear = (year: any) => {
    setAssessmentYear(year);
    setShowAssessmentDropdown(false);
  };

  const selectFilingType = (type: any) => {
    setFilingType(type);
    setShowFilingTypeDropdown(false);
  };

  const selectItrType = (type: any) => {
    setItrType(type);
    setShowItrTypeDropdown(false);
  };

  const handleFileChange = (e: any) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const handleTaxAmountChange = (e: any) => {
    // Allow only numbers and decimals
    const value = e.target.value;
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      setTaxAmount(value);
    }
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      console.log('No file selected');
      return;
    }

    // Do something with the files
    // create form data
    console.log(files[0]);
    
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-6 px-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex text-sm mb-6">
          <a href="/" className="text-blue-500 hover:underline">Home</a>
          <span className="mx-2">›</span>
          <p className="text-gray-500">File Now</p>
        </nav>

        {/* div Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Income Tax Return (ITR)</h1>
        
        {/* Mandatory Field Indicator */}
        <div className="text-right text-sm mb-4">
          <span className="text-red-500">*</span> Indicates mandatory fields
        </div>

        {/* Form Container */}
        <div className="bg-white border border-gray-200 rounded-md p-6 mb-6 relative">
          {/* Step 1 - Assessment Year and Filing Mode */}
          {step === 1 && (
            <div>
              {/* Filing Mode */}
              {/* <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Select Mode of Filing <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="online"
                      name="filingMode"
                      value="Online"
                      checked={filingMode === 'Online'}
                      onChange={() => setFilingMode('Online')}
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="online" className="ml-2">
                      Online <span className="text-gray-500">(Recommended)</span>
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="offline"
                      name="filingMode"
                      value="Offline"
                      checked={filingMode === 'Offline'}
                      onChange={() => setFilingMode('Offline')}
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="offline" className="ml-2">Offline</label>
                  </div>
                </div>
              </div> */}

              {/* Assessment Year */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Select Assessment year <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-left flex justify-between items-center bg-white"
                    onClick={toggleAssessmentDropdown}
                  >
                    {assessmentYear || 'Select'}
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {showAssessmentDropdown && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                      <div className="py-1">
                        {assessmentYears.map((year, index) => (
                          <button
                            key={index}
                            className={`w-full text-left px-4 py-2 hover:bg-blue-100 ${year === assessmentYear ? 'bg-[#303c8c] text-white' : 'bg-white'}`}
                            onClick={() => selectAssessmentYear(year)}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Information Box */}
              <div className="bg-blue-50 p-4 mb-6 text-gray-700 rounded">
                <h3 className="font-medium mb-2">Information</h3>
                <p>
                  You will need to upload the ITR form prepared using offline utility in the next step
                </p>
              </div>
            </div>
          )}

          {/* Step 2 - Filing Type */}
          {step === 2 && (
            <div>
              {/* Assessment Year (Selected) */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Select Assessment year <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-left flex justify-between items-center bg-white"
                    onClick={toggleAssessmentDropdown}
                  >
                    {assessmentYear}
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mb-6">
                  <label className="block mb-2 font-medium">
                    Select Filing Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <button
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-left flex justify-between items-center bg-white"
                      onClick={toggleFilingTypeDropdown}
                    >
                      {filingType || 'Select'}
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {showFilingTypeDropdown && (
                      <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                        <div className="py-1">
                          {filingTypes.map((type, index) => (
                            <button
                              key={index}
                              className={`w-full text-left px-4 py-2 hover:bg-blue-100 ${type === filingType ? 'bg-[#303c8c] text-white' : ''}`}
                              onClick={() => selectFilingType(type)}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
            </div>
          )}

          {/* Step 3 - Audit Info, ITR Type, File Upload, and Tax Amount */}
          {step === 3 && (
            <div>
              {/* Assessment Year (Selected) */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Select Assessment year <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-left flex justify-between items-center bg-white"
                  >
                    {assessmentYear}
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Filing Type (Selected) */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Select Filing Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-left flex justify-between items-center bg-white"
                  >
                    {filingType}
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Audit Information */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Are you audited u/s 44AB or political party as per section 13A? <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="auditYes"
                      name="isAudited"
                      value="Yes"
                      checked={isAudited === 'Yes'}
                      onChange={() => setIsAudited('Yes')}
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="auditYes" className="ml-2">Yes</label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="auditNo"
                      name="isAudited"
                      value="No"
                      checked={isAudited === 'No'}
                      onChange={() => setIsAudited('No')}
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="auditNo" className="ml-2">No</label>
                  </div>
                </div>
              </div>

              {/* ITR Type */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Select ITR Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-left flex justify-between items-center bg-white"
                    onClick={toggleItrTypeDropdown}
                  >
                    {itrType || 'Select'}
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {showItrTypeDropdown && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                      <div className="py-1">
                        {itrTypes.map((type, index) => (
                          <button
                            key={index}
                            className={`w-full text-left px-4 py-2 hover:bg-blue-100 ${type === itrType ? 'bg-[#303c8c] text-white' : ''}`}
                            onClick={() => selectItrType(type)}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* NEW: File Upload Section */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Upload ITR Document <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center">
                  <label 
                    className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-l-md bg-white cursor-pointer hover:bg-gray-50"
                  >
                    <span className={`${fileName ? 'text-gray-900' : 'text-gray-500'}`}>
                      {fileName || 'Choose file...'}
                    </span>
                    <input 
                      type="file"
                      className="hidden"
                      accept=".pdf,.xml,.json"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                  </label>
                  <button 
                    className="px-4 py-2 bg-[#303c8c] text-white rounded-r-md hover:bg-[#303c8c]/90 focus:outline-none focus:ring-2 focus:ring-[#303c8c]/80 focus:ring-offset-2"
                    onClick={handleButtonClick}
                  >
                    Upload
                  </button>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Accepted formats: PDF, XML, JSON (Max size: 5MB)
                </p>
              </div>

              {/* NEW: Tax Amount Section */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Total Tax Amount <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500">₹</span>
                  </div>
                  <input
                    type="text"
                    value={taxAmount}
                    onChange={handleTaxAmountChange}
                    placeholder="Enter tax amount"
                    className="w-full pl-8 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Enter the total tax amount in Indian Rupees (INR)
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button 
            onClick={handleBack}
            className="px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded flex items-center hover:bg-blue-50"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          
          <button 
            onClick={handleContinue}
            className={`px-6 py-2 rounded flex items-center ${
              (step === 1 && (!assessmentYear)) ||
              (step === 2 && !filingType) ||
              (step === 3 && (!itrType || !fileName || !taxAmount))
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
            disabled={
              (step === 1 && (!assessmentYear)) ||
              (step === 2 && !filingType) ||
              (step === 3 && (!itrType || !fileName || !taxAmount))
            }
          >
            {step === 3 ? 'Submit' : 'Continue'}
            {step !== 3 && (
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}