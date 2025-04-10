"use client";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector, RootState } from "../../store";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ITRForm() {
  const [step, setStep] = useState(1);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    assessmentYear: "",
    filingType: "",
    itrType: "",
    file: null,
  });
  const [success, setSuccess] = useState(false);

  const dispatch = useAppDispatch();

  const {
    bearerToken,
    apiState: { status, isError, message },
    isLoginError,
  } = useAppSelector((state: RootState) => state.application);

  const assessmentYears = [
    "2024-25",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
  ];
  
  const filingTypes = [
    "u/s 92CD - Modified Return",
    "u/s 139(9A) – After condonation of delay u/s 119(2)(b) / Court Order or Sanction Order of Business re-organisation of the Competent authority issued prior to 01.04.2022",
    "139(8A) - Updated Return",
  ];
  
  const itrTypes = ["ITR-1", "ITR-2", "ITR-3", "ITR-4"];

  const handleContinue = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    if (e.target.files.length > 0) {
      setFormData((prevState) => ({
        ...prevState,
        file: e.target.files[0],
      }));
      setFileName(e.target.files[0].name);
    }
  };

  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      
      // Validate form data
      if (!formData.assessmentYear || !formData.filingType || !formData.itrType || !formData.file) {
        toast.error("Please fill all required fields");
        return;
      }
      
      console.log("Form data to submit:", formData);
      
      // Here you would normally dispatch your API call
      // dispatch(submitITRForm(formData, { headers: { Authorization: `Bearer ${bearerToken}` } }));
      
      setSuccess(true);
      toast.success("Income Tax Return Filed Successfully");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form");
    }
  };

  const isStepValid = () => {
    if (step === 1) return !!formData.assessmentYear;
    if (step === 2) return !!formData.assessmentYear && !!formData.filingType;
    if (step === 3) return !!formData.assessmentYear && !!formData.filingType && !!formData.itrType && !!formData.file;
    return false;
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
          <p className="text-gray-500">File Now</p>
        </nav>

        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Income Tax Return (ITR)
        </h1>

        {success ? (
          <div className="flex flex-col items-center justify-center mt-20">
            {/* Glossy Circle with Tick */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Glossy effect */}
                <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-sm transform -translate-y-2"></div>
              </div>
              {/* Tick Mark */}
              <div className="relative w-20 h-10 border-l-8 border-b-8 border-white transform -rotate-45 translate-y-2"></div>
            </div>
      
            {/* Go to Home Button */}
            <Link
              href="/"
              className="mt-10 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform transition-all duration-300 active:scale-95"
            >
              Go to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Mandatory Field Indicator */}
            <div className="text-right text-sm mb-4">
              <span className="text-red-500">*</span> Indicates mandatory fields
            </div>

            {/* Form Container */}
            <div className="bg-white border border-gray-200 rounded-md p-6 mb-6 relative">
              {/* Step 1 - Assessment Year */}
              {step === 1 && (
                <div>
                  {/* Assessment Year */}
                  <div className="mb-6">
                    <label htmlFor="assessmentYear" className="block mb-2 font-medium">
                      Select Assessment Year <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="assessmentYear"
                      name="assessmentYear"
                      value={formData.assessmentYear}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="" disabled>Select Assessment Year</option>
                      {assessmentYears.map((year, index) => (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Information Box */}
                  <div className="bg-blue-50 p-4 mb-6 text-gray-700 rounded">
                    <h3 className="font-medium mb-2">Information</h3>
                    <p>
                      You will need to upload the ITR form prepared using
                      offline utility in the next step
                    </p>
                  </div>
                </div>
              )}

              {/* Step 2 - Filing Type */}
              {step === 2 && (
                <div>
                  {/* Assessment Year (Display Only) */}
                  <div className="mb-6">
                    <label htmlFor="assessmentYearDisplay" className="block mb-2 font-medium">
                      Assessment Year <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="assessmentYearDisplay"
                      value={formData.assessmentYear}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50"
                      disabled
                    />
                  </div>

                  {/* Filing Type */}
                  <div className="mb-6">
                    <label htmlFor="filingType" className="block mb-2 font-medium">
                      Select Filing Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="filingType"
                      name="filingType"
                      value={formData.filingType}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="" disabled>Select Filing Type</option>
                      {filingTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3 - ITR Type and File Upload */}
              {step === 3 && (
                <div>
                  {/* Assessment Year (Display Only) */}
                  <div className="mb-6">
                    <label htmlFor="assessmentYearDisplay" className="block mb-2 font-medium">
                      Assessment Year <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="assessmentYearDisplay"
                      value={formData.assessmentYear}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50"
                      disabled
                    />
                  </div>

                  {/* Filing Type (Display Only) */}
                  <div className="mb-6">
                    <label htmlFor="filingTypeDisplay" className="block mb-2 font-medium">
                      Filing Type <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="filingTypeDisplay"
                      value={formData.filingType}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50"
                      disabled
                    />
                  </div>

                  {/* ITR Type */}
                  <div className="mb-6">
                    <label htmlFor="itrType" className="block mb-2 font-medium">
                      Select ITR Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="itrType"
                      name="itrType"
                      value={formData.itrType}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="" disabled>Select ITR Type</option>
                      {itrTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* File Upload Section */}
                  <div className="mb-6">
                    <label className="block mb-2 font-medium">
                      Upload ITR Document <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-l-md px-4 py-2 bg-gray-50"
                        placeholder="No file chosen"
                        value={fileName}
                        readOnly
                      />
                      <input
                        type="file"
                        id="file"
                        name="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept=".pdf,.xml,.json"
                        onChange={handleFileChange}
                      />
                      <button
                        type="button"
                        onClick={handleBrowseClick}
                        className="px-4 py-2 bg-[#303c8c] text-white rounded-r-md hover:bg-[#303c8c]/90 focus:outline-none focus:ring-2 focus:ring-[#303c8c]/80 focus:ring-offset-2"
                      >
                        Browse
                      </button>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Accepted formats: PDF, XML, JSON (Max size: 5MB)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded flex items-center hover:bg-blue-50"
                disabled={step === 1}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleContinue}
                  className={`px-6 py-2 rounded flex items-center ${
                    !isStepValid()
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-[#303c8c] text-white hover:bg-[#303c8c]/90"
                  }`}
                  disabled={!isStepValid()}
                >
                  Continue
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className={`px-6 py-2 rounded ${
                    !isStepValid()
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-[#303c8c] text-white hover:bg-[#303c8c]/90"
                  }`}
                  disabled={!isStepValid()}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}