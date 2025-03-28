export default function BankAccountPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">My Bank Account</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Linked Accounts</h2>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-2xl">🏦</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Chase Bank</h3>
                    <p className="text-sm text-gray-500">Checking Account ****4567</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Primary</span>
              </div>
              
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 text-2xl">🏦</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Bank of America</h3>
                    <p className="text-sm text-gray-500">Savings Account ****7890</p>
                  </div>
                </div>
                <button className="text-red-600 hover:text-red-800">Remove</button>
              </div>
            </div>
            
            <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800">
              <span className="mr-2">+</span> Add New Account
            </button>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 22, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Monthly Salary</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+$3,500.00</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 20, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Amazon Purchase</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">-$89.99</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 18, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Grocery Store</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">-$156.32</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }