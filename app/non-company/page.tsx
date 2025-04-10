// pages/tax-returns.js
import Head from 'next/head';
import Link from 'next/link';

export default function Non_Company() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <Head>
        <title>Non Company</title>
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
      </main>
    </div>
  );
}