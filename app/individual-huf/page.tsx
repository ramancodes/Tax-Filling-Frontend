// pages/tax-returns.js
import Head from 'next/head';
import Link from 'next/link';

export default function Individual_HUF() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <Head>
        <title>Individual/HUF</title>
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
              <Link href="/individual-huf/salaried-employees">
                <span className="text-blue-600 hover:underline cursor-pointer">
                    Salaried Employees
                </span>
              </Link>
            </li>
            <li>
              <Link href="/individual-huf/business-profession">
                <span className="text-blue-600 hover:underline cursor-pointer">
                    Business Profession
                </span>
              </Link>
            </li>
            <li>
              <Link href="/individual-huf/senior-citizens">
                <span className="text-blue-600 hover:underline cursor-pointer">
                    Senior, Super Senior Citizens
                </span>
              </Link>
            </li>
            <li>
              <Link href="/individual-huf/huf">
                <span className="text-blue-600 hover:underline cursor-pointer">
                  Hindu Undivided Family
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}