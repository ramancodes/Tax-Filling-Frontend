export default function DocumentsPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">My Documents</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Uploaded Documents</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center">
              <span className="mr-2">+</span> Upload New
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <div className="h-40 bg-gray-100 rounded flex items-center justify-center mb-3">
                <span className="text-4xl">📄</span>
              </div>
              <h3 className="font-medium">ID Document</h3>
              <p className="text-sm text-gray-500 mb-2">Passport</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Uploaded: Mar 10, 2025</span>
                <button className="text-blue-600 hover:text-blue-800">View</button>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="h-40 bg-gray-100 rounded flex items-center justify-center mb-3">
                <span className="text-4xl">📄</span>
              </div>
              <h3 className="font-medium">Proof of Address</h3>
              <p className="text-sm text-gray-500 mb-2">Utility Bill</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Uploaded: Mar 5, 2025</span>
                <button className="text-blue-600 hover:text-blue-800">View</button>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="h-40 bg-gray-100 rounded flex items-center justify-center mb-3">
                <span className="text-4xl">📄</span>
              </div>
              <h3 className="font-medium">Tax Document</h3>
              <p className="text-sm text-gray-500 mb-2">W-2 Form</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Uploaded: Feb 15, 2025</span>
                <button className="text-blue-600 hover:text-blue-800">View</button>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Required Documents</h2>
            <div className="border rounded-lg p-4 bg-yellow-50">
              <div className="flex items-start">
                <div className="text-yellow-500 mr-3 text-xl">⚠️</div>
                <div>
                  <h3 className="font-medium">Bank Statement</h3>
                  <p className="text-sm text-gray-600 mt-1">Please upload your most recent bank statement to complete your profile verification.</p>
                  <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                    Upload Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }