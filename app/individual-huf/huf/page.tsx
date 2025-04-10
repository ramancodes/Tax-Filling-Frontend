"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function SalariedIndividualsPage() {
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
        <a href="/individual-huf" className="text-blue-500 hover:underline">Individual/HUF</a>
        <span className="mx-2">›</span>
        <p className="text-gray-500">Hindu Undivided Family (HUF) for AY 2025-2026</p>
      </nav>
      <div className="font-sans text-gray-800 leading-relaxed flex flex-col items-center">
        <p className="text-4xl font-bold text-center text-gray-800 mb-8 mt-8 max-w-3xl">
          Hindu Undivided Family (HUF) for AY 2025-2026
        </p>
        <div className="bg-white p-5">
          <div className="max-w-6xl mx-auto bg-white p-6 rounded-md shadow">
            <p className="mb-8 mt-8 text-3xl font-bold">
              Returns and Forms Applicable for Hindu Undivided Family (HUF) for AY 2025-26 
            </p>
            <div className="mb-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800">
              Disclaimer: The content on this page is only to give an overview and general guidance and is not exhaustive. For complete details and guidelines, please refer to the Income Tax Act, Rules and Notifications.
              </p>
            </div>

            <div className="p-5 border border-gray-200 rounded-md mb-4">
              <p className="mb-4">
                There are 2 income tax return forms that are applicable for
                filing income tax return (ITR):
              </p>
              <ul className="list-disc pl-5 mb-5 space-y-2">
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
                    <h3 className="text-blue-900 font-medium mb-2">ITR-3</h3>
                    <p>
                    This return is applicable for Individual & Hindu Undivided Family (HUF);
                    Having Income under the head Profits or Gains of Business or Profession.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-md">
                  <div className="p-4">
                    <h3 className="text-blue-900 font-medium mb-2">
                      ITR-4 (SUGAM)
                    </h3>
                    <p className="mb-3">
                    ITR-4 cannot be used by a person who:
                    </p>
                    <ol>
                        <li>1. is a Director in a Company, or</li>
                        <li>2. has held any unlisted equity shares at any time during the previous year, or</li>
                        <li>3. has any asset (including financial interest in any entity) located outside India, or</li>
                        <li>4. has signing authority in any account located outside India, or </li>
                        <li>5. has income from any source outside India,</li>
                        <li>6. is a person in whose case payment or deduction of tax has been deferred on ESOP</li>
                        <li>7. who has any brought forward loss or loss to be carried forward under any head of income</li>
                        <li>8. has total income exceeding Rs. 50 lakhs.</li>
                    </ol>
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
                      There are 6 forms that are applicable
                      for filing income tax return (ITR):
                    </p>
                    <ul className="list-disc pl-5 mb-5 space-y-2">
                      <li>
                        <strong>Form 16A</strong>
                      </li>
                      <li>
                        <strong>Form 26 AS</strong>
                      </li>
                      <li>
                        <strong>Form 3CB-CD</strong>
                      </li>
                      <li>
                        <strong>Form 15G</strong>
                      </li>
                      <li>
                        <strong>Form 15H</strong>
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
                          1. Form 16A – Certificate u/s 203 of the Income Tax Act, 1961 for TDS on Income other than Salary
                          </p>
                          <p className="mb-3">
                            <em>Provided by :</em> Deductor to Deductee
                          </p>
                          <p>
                          Form 16A is a Tax Deducted at Source (TDS) Certificate issued quarterly that captures the amount credited, amount of TDS, Nature of Payments and the TDS Payments deposited with the Income Tax Department.
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-md">
                        <div className="p-4">
                          <p className="text-blue-900 font-medium mb-2 border-b border-gray-300">
                          2. Form 26 AS
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
                          3. Form 3CB-CD
                          </p>
                          <p className="mb-3">
                            <em>Submitted by :</em> Taxpayer who is required to get his / her accounts audited by an accountant u/s 44AB. To be furnished atleast one month before the due date for furnishing the return of income under sub-section (1) of section 139.
                          </p>
                          <p>
                          Report of Audit of Accounts (Form 3CB) and Statement of Particulars (Form 3CD) required to be furnished under Section 44AB of the Income Tax Act, 1961.
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-md">
                        <div className="p-4">
                          <p className="text-blue-900 font-medium mb-2 border-b border-gray-300">
                          4. Form 15G - Declaration by resident Taxpayer (not being a Company or Firm) claiming certain receipts without deduction of tax
                          </p>
                          <p className="mb-3">
                            <em>Submitted by :</em> A Resident Individual less than 60 years or HUF or any other Person (other than Company / Firm) to bank for not deducting TDS on Interest Income if the income is below basic exemption limit.
                          </p>
                          <p>
                          Estimated Income for the FY
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-md">
                        <div className="p-4">
                          <p className="text-blue-900 font-medium mb-2 border-b border-gray-300">
                          5. Form 15H - Declaration to be made by a resident Individual (who is 60 years age or more) claiming certain receipts without deduction of tax
                          </p>
                          <p className="mb-3">
                            <em>Submitted by :</em> A Resident Individual, 60 years or more to bank for not deducting TDS on Interest Income.
                          </p>
                          <p>
                          Estimated Income for the FY
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-md">
                        <div className="p-4">
                          <p className="text-blue-900 font-medium mb-2 border-b border-gray-300">
                          6. Form 3CEB
                          </p>
                          <p className="mb-3">
                            <em>Submitted by :</em> Taxpayer who enters into an international transaction or specified domestic transactions is required to obtain a report from a chartered accountant u/s 92E. To be furnished atleast one month before the due date for furnishing the return of income under sub-section (1) of section 139.
                          </p>
                          <p>
                          Report from a Chartered  Accountant containing details of all international transaction(s) and specified domestic transaction(s)
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
                      <ul className="mb-4 font-semibold">
                        <li>
                          The Finance Act 2024 has amended the provisions of Section 115BAC w.e.f AY 2024-25 to make new tax regime the default tax regime for the assessee being an Individual, HUF, AOP (not being co-operative societies), BOI or Artificial Juridical Person. However, the eligible taxpayers have the option to opt out of new tax regime and choose to be taxed under old tax regime. The old tax regime refers to the system of income tax calculation and slabs that existed before the introduction of the new tax regime. In the old tax regime, taxpayers have the option to claim various tax deductions and exemptions.
                        </li>
                        <li>
                          In "non-business cases", option to choose the regime can be exercised every year directly in the ITR to be filed on or before the due date specified under section 139(1).
                        </li>
                        <li>
                          In case of eligible taxpayers having income from business and profession, new tax regime is default regime. If assessee wants to opt out of new tax regime, they can furnish Form-10-IEA on or before the due date u/s 139(1) for furnishing the return of income. Also, for the purpose of withdrawal of such option i.e. opting out of old tax regime shall also be done by way of furnishing Form No.10-IEA. However, option to switch to old tax regime and withdraw the option in any subsequent AY  is available only once in lifetime for eligible taxpayers having income from business and profession.
                        </li>
                      </ul>
                    <br /><br />
                    <p>
                      1. Tax rates for Individual (resident or non-resident) less than 60 years of age anytime during the previous year are as under:
                    </p>
                    <div className="text-center my-5">
                      <img
                        src="/assests/individual-huf/business-profession/tax-slab-1.png"
                        alt="ITR Decision Chart"
                        className="max-w-full border border-gray-200 rounded-md"
                      />
                    </div>

                    <p className="mb-4 font-semibold">
                      2. Tax rates for Individual (resident or non-resident), 60 years or more but less than 80 years of age anytime during the previous year are as under:
                    </p>
                    <div className="text-center my-5">
                      <img
                        src="/assests/individual-huf/business-profession/tax-slab-2.png"
                        alt="ITR Decision Chart"
                        className="max-w-full border border-gray-200 rounded-md"
                      />
                    </div>

                    <p className="mb-4 font-semibold">
                      3. Tax rates for Individual (resident or non-resident) 80 years of age or more anytime during the previous year are as under:
                    </p>
                    <div className="text-center my-5">
                      <img
                        src="/assests/individual-huf/business-profession/tax-slab-3.png"
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

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="py-16 flex flex-col items-center">
          <p className="text-3xl font-bold text-center text-gray-800 mb-8">
            How to File Tax Returns
          </p>
          <div className="w-full max-w-3xl p-6 border border-gray-200 rounded-lg shadow-sm">
            {/* <p className="text-2xl font-semibold text-gray-800 mb-6">
                    How to File Tax Returns
                </p> */}

            <p className="text-gray-600 mb-6">
              For information on How to File Returns, please refer to the
              following resources:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              {/* <li>
                <Link href="/individual-huf/business-profession/user-manual-itr4">
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    ITR-4 User Manual
                  </span>
                </Link>
              </li> */}
              <li>
                <Link href="/individual-huf/huf/faqs-itr4">
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    ITR-4 Frequently Asked Questions
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
