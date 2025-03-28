export default function IncomePage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Source Of Income</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Primary Income</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Employment</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Employer</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded">Tech Solutions Inc.</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Position</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded">Senior Developer</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Monthly Income</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded">$7,500.00</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded">January 2020</div>
                  </div>
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-800">Edit</button>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Additional Income Sources</h2>
              <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center text-sm">
                <span className="mr-1">+</span> Add Source
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Freelance Work</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Type</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded">Web Development</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Average Monthly Income</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded">$2,000.00</div>
                  </div>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="text-blue-600 hover:text-blue-800">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Remove</button>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Investments</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Type</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded">Dividend Stocks</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Average Monthly Income</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded">$500.00</div>
                  </div>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="text-blue-600 hover:text-blue-800">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Remove</button>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Income Summary</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">Total Monthly Income</h3>
                  <p className="text-2xl font-bold text-green-600">$10,000.00</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">Primary Income</h3>
                  <p className="text-2xl font-bold">$7,500.00</p>
                  <p className="text-sm text-gray-500">75% of total</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">Additional Income</h3>
                  <p className="text-2xl font-bold">$2,500.00</p>
                  <p className="text-sm text-gray-500">25% of total</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }