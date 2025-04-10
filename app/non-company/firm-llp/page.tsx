"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function FIRMLLPPage() {
  const [expandedSection, setExpandedSection] = useState("");

  const toggleSection = (section: any) => {
    if (expandedSection === section) {
      setExpandedSection("");
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="min-h-screen container mx-auto py-6 px-4">
      <nav className="flex text-sm mb-6">
        <a href="/" className="text-blue-500 hover:underline">Home</a>
        <span className="mx-2">›</span>
        <a href="/non-company" className="text-blue-500 hover:underline">Non-Company</a>
        <span className="mx-2">›</span>
        <p className="text-gray-500">Partnership Firm / LLP</p>
      </nav>
      <div className="font-sans text-gray-800 leading-relaxed flex flex-col items-center">
        <p className="text-4xl font-bold text-center text-gray-800 mb-8 mt-8 max-w-3xl">
        Partnership Firm / LLP for AY 2025-26
        </p>
        <div className="bg-white p-5">
          <div className="max-w-6xl mx-auto bg-white p-6 rounded-md shadow">
            <p className="mb-8 mt-8 text-3xl font-bold">
            Returns and Forms Applicable for Partnership Firm / LLP for AY 2025-26
            </p>
            <div className="mb-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800">
                Disclaimer: The content on this page is only to give an overview
                and general guidance and is not exhaustive. For complete details
                and guidelines please refer Income Tax Act, Rules and
                Notifications.
              </p>
            </div>

            <div className="p-5 border border-gray-200 rounded-md mb-4">
              <p className="mb-4">
                There are 4 income tax return forms that are applicable for
                filing income tax return (ITR):
              </p>
              <ul className="list-disc pl-5 mb-5 space-y-2">
                <li>
                  <strong>ITR-1 (SAHAJ)</strong>
                </li>
                <li>
                  <strong>ITR-2</strong>
                </li>
                <li>
                  <strong>ITR-3</strong>
                </li>
                <li>
                  <strong>ITR-4 (SUGAM)</strong>
                </li>
              </ul>
              <p className="mb-4">
                Income tax return for each category of individuals are briefly
                described below:
              </p>

              <div className="space-y-5">
                <div className="border border-gray-200 rounded-md">
                  <div className="p-4">
                    <h3 className="text-blue-900 font-medium mb-2">
                      ITR-1 (SAHAJ)
                    </h3>
                    <p className="mb-3">
                      For Individuals being a resident (other than not
                      ordinarily resident) having total income up to Rs.50 lakh,
                      having Income from Salaries, one house property, other
                      sources (Interest etc.), and agricultural income up to
                      Rs.5 thousand.
                    </p>
                    <p>
                      [Not for an individual who is either Director in a company
                      or has invested in unlisted equity shares]
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-md">
                  <div className="p-4">
                    <h3 className="text-blue-900 font-medium mb-2">ITR-2</h3>
                    <p>
                      For Individuals and HUFs not having income from profits
                      and gains of business or profession
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-md">
                  <div className="p-4">
                    <h3 className="text-blue-900 font-medium mb-2">ITR-3</h3>
                    <p>
                      For individuals and HUFs having income from profits and
                      gains of business or profession
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-md">
                  <div className="p-4">
                    <h3 className="text-blue-900 font-medium mb-2">
                      ITR-4 (SUGAM)
                    </h3>
                    <p className="mb-3">
                      For Individuals, HUFs and Firms (other than LLP) being a
                      resident having total income up to Rs.50 lakh and having
                      income from business and profession which is computed
                      under sections 44AD, 44ADA or 44AE
                    </p>
                    <p>
                      [Not for an individual who is either Director in a company
                      or has invested in unlisted equity shares]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="rounded overflow-hidden">
                <div
                  className="bg-blue-50 p-4 cursor-pointer rounded-md hover:bg-blue-100 transition-colors"
                  onClick={() => toggleSection("returnForms")}
                >
                  <h2 className="text-lg font-medium text-blue-900 flex items-center">
                    <span className="mr-3 text-xl text-blue-600 w-5 text-center">
                      {expandedSection === "returnForms" ? "−" : "+"}
                    </span>
                        Forms Applicable
                  </h2>
                </div>

                {expandedSection === "returnForms" && (
                  <div className="p-5 border border-gray-200 rounded-md mb-4">
                    <p className="mb-4">
                      There are 8 forms that are applicable
                      for filing income tax return (ITR):
                    </p>
                    <ul className="list-disc pl-5 mb-5 space-y-2">
                      <li>
                        <strong>Form 15H</strong>
                      </li>
                      <li>
                        <strong>Form 12BB</strong>
                      </li>
                      <li>
                        <strong>Form 16</strong>
                      </li>
                      <li>
                        <strong>Form 16A</strong>
                      </li>
                      <li>
                        <strong>Form 26 AS</strong>
                      </li>
                      <li>
                        <strong>Form 10E</strong>
                      </li>
                      <li>
                        <strong>Form 67</strong>
                      </li>
                      <li>
                        <strong>Form 3CB-3CD</strong>
                      </li>
                      <li>
                        <strong>Form 3CEB</strong>
                      </li>
                    </ul>
                    <p className="mb-4">
                      Forms for each category of individuals are
                      briefly described below:
                    </p>

                    <div className="space-y-5">
                      <div className="border border-gray-200 rounded-md">
                        <div className="p-4">
                          <p className="text-blue-900 font-medium mb-2 border-b border-gray-300">
                          1. Form 12BB - Particulars of claims by an employee for deduction of tax (u/s 192)
                          </p>
                          <p className="mb-3">
                            <em>Provided by :</em> An Employee to his Employer(s)
                          </p>
                          <p>
                            Evidence or particulars of HRA, LTC, Deduction of Interest on home loan, Tax Saving Claims / Deductions on eligible payments or investments for the purpose of calculating Tax to be Deducted at Source (TDS).
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-md">
                        <div className="p-4">
                          <p className="text-blue-900 font-medium mb-2 border-b border-gray-300">
                          2. Form 15H - Declaration to be made by an individual (who is 60 years of age or more) claiming certain receipts without deduction of tax 
                          </p>
                          <p className="mb-3">
                            <em>Submitted by :</em> A Resident Individual, 60 years or more of age to Bank, for not deducting TDS on interest income 
                          </p>
                          <p>
                          Estimated Income for the FY
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-md">
                        <div className="p-4">
                          <p className="text-blue-900 font-medium mb-2 border-b border-gray-300">
                          3. Form 16A – Certificate u/s 203 of the Income Tax Act, 1961 for TDS on Income other than Salary
                          </p>
                          <p className="mb-3">
                            <em>Provided by :</em> Deductor to Deductee
                          </p>
                          <p>
                          Form 16A is a Tax Deducted at Source (TDS) Certificate issued quarterly that captures the amount of TDS, Nature of Payments and the TDS Payments deposited with the Income Tax Department.
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-md">
                        <div className="p-4">
                          <p className="text-blue-900 font-medium mb-2 border-b border-gray-300">
                          4. Form 67 - Statement of Income from a country or specified territory outside India and Foreign Tax Credit
                          </p>
                          <p className="mb-3">
                            <em>Submitted by :</em> Taxpayer on or before the due date specified for furnishing the ITRs u/s 139(1)
                          </p>
                          <p>
                          Income from a country or specified territory outside India and Foreign Tax Credit claimed.
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-md">
                        <div className="p-4">
                          <p className="text-blue-900 font-medium mb-2 border-b border-gray-300">
                          5. Form 26 AS
                          </p>
                          <p className="mb-3">
                            <em>Provided by :</em> Income Tax Department
                          </p>
                          <p>
                          Tax Deducted / Collected at Source.
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-md">
                        <div className="p-4">
                          <p className="text-blue-900 font-medium mb-2 border-b border-gray-300">
                          6. Form 15G - Declaration by resident taxpayer (not being a Company or Firm) claiming certain receipts without deduction of tax
                          </p>
                          <p className="mb-3">
                            <em>Submitted by :</em> A Resident Individual less than 60 years or HUF or any other Person (other than Company / Firm) to Bank for not deducting TDS on Interest Income, if the income is below basic exemption limit
                          </p>
                          <p>
                          Estimated Income for the FY.
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-md">
                        <div className="p-4">
                          <p className="text-blue-900 font-medium mb-2 border-b border-gray-300">
                          7. Form 15H - Declaration to be made by a resident individual (who is 60 years age or more) claiming certain receipts without deduction of tax
                          </p>
                          <p className="mb-3">
                            <em>Submitted by :</em> A Resident Individual, 60 years or more to Bank for not deducting TDS on Interest Income
                          </p>
                          <p>
                          Estimated Income for the FY.
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-md">
                        <div className="p-4">
                          <p className="text-blue-900 font-medium mb-2 border-b border-gray-300">
                          8. Form 10E - Form for furnishing particulars of Income for claiming relief u/s 89(1) when Salary is paid in arrears or advance
                          </p>
                          <p className="mb-3">
                            <em>Provided by :</em> An Employee to the Income Tax Department
                          </p>
                          <p>
                          Arrears / Advance Salary Gratuity Compensation on Termination Commutation of Pension.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div
                  className="bg-blue-50 p-4 cursor-pointer rounded-md hover:bg-blue-100 transition-colors"
                  onClick={() => toggleSection("checkItrs")}
                >
                  <h2 className="text-lg font-medium text-blue-900 flex items-center">
                    <span className="mr-3 text-xl text-blue-600 w-5 text-center">
                      {expandedSection === "checkItrs" ? "−" : "+"}
                    </span>
                    Tax Slabs for AY 2025-26
                  </h2>
                </div>

                {expandedSection === "checkItrs" && (
                  <div className="p-5 border border-gray-200 rounded-md mb-4">
                    <p className="mb-4 font-semibold">
                    The Finance Act 2024 has amended the provisions of Section 115BAC w.e.f AY 2024-25 to make new tax regime the default tax regime for the assessee being an Individual, HUF, AOP (not being co-operative societies), BOI or Artificial Juridical Person. 
                    However, the eligible taxpayers have the option to opt out of new tax regime and choose to be taxed under old tax regime. 
                    The old tax regime refers to the system of income tax calculation and slabs that existed before the introduction of the new tax regime. 
                    In the old tax regime, taxpayers have the option to claim various tax deductions and exemptions. 
                    <br /><br />

                    In "non-business cases", option to choose the regime can be exercised every year directly in the ITR to be filed on or before the due date specified under section 139(1). 
                    <br /><br />
                    
                    In case of eligible taxpayers having income from business and profession, new tax regime is default regime. If assessee wants to opt out of new tax regime, they can furnish Form-10-IEA on or before the due date u/s 139(1) for furnishing the return of income. Also, for the purpose of withdrawal of such option i.e. opting out of old tax regime shall also be done by way of furnishing Form No.10-IEA. However, option to switch to old tax regime and withdraw the option in any subsequent AY  is available only once in lifetime for eligible taxpayers having income from business and profession.
                    <br /><br />
                    
                    Tax rates for Individual (resident or non-resident) less than 60 years of age anytime during the previous year are as under:
                    </p>
                    <div className="text-center my-5">
                      <img
                        src="/assests/individual-huf/salaried-employees/tax-slab-1.png"
                        alt="ITR Decision Chart"
                        className="max-w-full border border-gray-200 rounded-md"
                      />
                    </div>

                    <p className="mb-4 font-semibold">
                        Tax rates for Individual (resident or non-resident), 60 years or more but less than 80 years of age anytime during the previous year are as under:
                    </p>
                    <div className="text-center my-5">
                      <img
                        src="/assests/individual-huf/salaried-employees/tax-slab-2.png"
                        alt="ITR Decision Chart"
                        className="max-w-full border border-gray-200 rounded-md"
                      />
                    </div>

                    <p className="mb-4 font-semibold">
                        Tax rates for Individual (resident or non-resident) 80 years of age or more anytime during the previous year are as under:
                    </p>
                    <div className="text-center my-5">
                      <img
                        src="/assests/individual-huf/salaried-employees/tax-slab-3.png"
                        alt="ITR Decision Chart"
                        className="max-w-full border border-gray-200 rounded-md"
                      />
                    </div>
                  </div>
                )}

                {/* <div
                  className="bg-blue-50 p-4 cursor-pointer rounded-md hover:bg-blue-100 transition-colors"
                  onClick={() => toggleSection("investments")}
                >
                  <h2 className="text-lg font-medium text-blue-900 flex items-center">
                    <span className="mr-3 text-xl text-blue-600 w-5 text-center">
                      {expandedSection === "forms" ? "−" : "+"}
                    </span>
                        Investments / Payments / Incomes on which I can get tax benefit
                  </h2>
                </div>

                {expandedSection === "investments" && (
                  <div className="p-5 border border-gray-200 rounded-md mb-4">
                    
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}