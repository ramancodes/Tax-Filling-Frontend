"use client";

import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector, RootState } from "../../../store";

// Define the document details interface
interface DocumentDetails {
  id?: string;
  documentType: string;
  file: File | null;
  fileName: string;
}

export default function DocumentUploadPage() {
  const dispatch = useAppDispatch();
  const {
    application: {
      bearerToken,
      id,
      apiState: { status, isError, message },
    },
  } = useAppSelector((state: RootState) => state);

  // Document Types
  const documentTypes = [
    "Aadhar Card",
    "PAN Card",
    "Driving Licence",
    "Voter ID",
    "Passport",
    "Other",
  ];

  // State for managing documents
  const [documents, setDocuments] = useState<DocumentDetails[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentDocument, setCurrentDocument] = useState<DocumentDetails>({
    documentType: "",
    file: null,
    fileName: "",
  });

  // Ref for file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Validation function
  const validateDocument = () => {
    if (!currentDocument.documentType) {
      toast.error("Please select a document type");
      return false;
    }
    if (!currentDocument.file) {
      toast.error("Please select a file");
      return false;
    }
    return true;
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (selectedFile.size > maxSize) {
        toast.error("File size should not exceed 5MB");
        return;
      }

      setCurrentDocument((prev) => ({
        ...prev,
        file: selectedFile,
        fileName: selectedFile.name,
      }));
    }
  };

  // Handle document type change
  const handleDocumentTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrentDocument((prev) => ({
      ...prev,
      documentType: e.target.value,
    }));
  };

  // Save document details
  const handleSaveDocument = () => {
    // Validate document
    if (!validateDocument()) {
      return;
    }

    // Check if editing existing document
    const existingDocIndex = documents.findIndex(
      (doc) => doc.id === currentDocument.id
    );

    if (existingDocIndex !== -1) {
      // Update existing document
      const updatedDocuments = [...documents];
      updatedDocuments[existingDocIndex] = {
        ...currentDocument,
        id: currentDocument.id,
      };
      setDocuments(updatedDocuments);
      toast.success("Document updated");
    } else {
      // Add new document
      const newDocument = {
        ...currentDocument,
        id: `doc_${Date.now()}`,
      };
      setDocuments((prev) => [...prev, newDocument]);
      toast.success("Document added");
    }

    // Reset state
    setIsEditing(false);
    setCurrentDocument({
      documentType: "",
      file: null,
      fileName: "",
    });

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle viewing a document
  const handleViewDocument = (document: DocumentDetails) => {
    if (document.file) {
      const fileURL = URL.createObjectURL(document.file);
      window.open(fileURL, "_blank");
    }
  };

  // Handle editing a document
  const handleEditDocument = (document: DocumentDetails) => {
    setCurrentDocument(document);
    setIsEditing(true);
  };

  // Handle removing a document
  const handleRemoveDocument = (documentId: string) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this document?"
    );
    if (confirmRemove) {
      setDocuments((prev) => prev.filter((doc) => doc.id !== documentId));
      toast.success("Document removed");
    }
  };

  // Close dialog
  const handleCloseDialog = () => {
    setIsEditing(false);
    setCurrentDocument({
      documentType: "",
      file: null,
      fileName: "",
    });

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <p className="text-2xl font-bold mb-6">Document Upload</p>

      {/* No Documents Added */}
      {documents.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-10 mt-20">
          <div className="h-34 w-34 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-5xl">📄</span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Upload Your Documents</p>
            <button
              className="mt-2 px-4 py-2 bg-[#303c8c] text-white rounded hover:bg-[#303c8c] cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              Add Document
            </button>
          </div>
        </div>
      )}

      {/* Documents List */}
      {documents.length > 0 && (
        <div className="space-y-4">
          <button
            className="mb-4 px-4 py-2 bg-[#303c8c] text-white rounded hover:bg-[#303c8c] cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            Add Document
          </button>

          {documents.map((document) => (
            <div
              key={document.id}
              className="bg-white shadow rounded-lg p-6 flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold">
                  {document.documentType}
                </p>
                <p className="text-gray-600">
                  File: {document.fileName || "N/A"}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleViewDocument(document)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  View
                </button>
                <button
                  onClick={() => handleEditDocument(document)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemoveDocument(document.id!)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Document Upload Modal */}
      {isEditing && (
        <div className="fixed backdrop-blur-sm inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl mx-4">
            <h2 className="text-xl font-bold mb-4">
              {currentDocument.id ? "Edit Document" : "Add Document"}
            </h2>
            <p className="text-gray-600 mb-6">
              Upload your document details
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="documentType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Document Type
                </label>
                <select
                  id="documentType"
                  name="documentType"
                  value={currentDocument.documentType}
                  onChange={handleDocumentTypeChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select Document Type</option>
                  {documentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="file"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Upload Document
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full p-2 border rounded-md"
                />
                {currentDocument.fileName && (
                  <p className="text-sm text-gray-600 mt-1">
                    Selected File: {currentDocument.fileName}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={handleCloseDialog}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveDocument}
                className="px-4 py-2 bg-[#303c8c] text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}