// pages/tax-returns.js
import Head from "next/head";
import Link from "next/link";

export default function Non_Company() {
  return (
    <div className="min-h-screen container mx-auto py-6 px-4">
      <nav className="flex text-sm mb-6">
        <a href="/" className="text-blue-500 hover:underline">
          Home
        </a>
        <span className="mx-2">›</span>
        <p className="text-gray-500">Non-Company</p>
      </nav>

      <div className="py-6 flex flex-col items-center">
        <p className="text-4xl font-bold text-center text-gray-800 mb-8 py-6">
        Non-Company
        </p>

        <div className="w-full max-w-3xl p-6 border border-gray-200 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-6">
            Click on the links to navigate to respective page:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <Link href="/non-company/firm-llp">
                <span className="text-blue-600 hover:underline cursor-pointer">
                  Firm LLP
                </span>
              </Link>
            </li>
            <li>
              <Link href="/non-company/local-authority">
                <span className="text-blue-600 hover:underline cursor-pointer">
                  Local Authority
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
