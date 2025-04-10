// pages/tax-returns.js
import Head from 'next/head';
import Link from 'next/link';

export default function Company() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <Head>
        <title>Company</title>
        <meta name="description" content="Resources for filing tax returns" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Navigate to the following pages.
        </h1>
        
        <div className="w-full max-w-3xl p-6 border border-gray-200 rounded-lg shadow-sm">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <Link href="/company/domestic-company">
                <span className="text-blue-600 hover:underline cursor-pointer">
                    Domestic Company
                </span>
              </Link>
            </li>
            <li>
              <Link href="/company/foreign-company">
                <span className="text-blue-600 hover:underline cursor-pointer">
                    Foreign Company
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}