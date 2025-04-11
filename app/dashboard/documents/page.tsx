"use client";

import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector, RootState } from "../../../store";
import { getDocument, addDocument, updateDocument, deleteDocument } from "../../../store/documents/actions";
import Link from "next/link";

interface DocumentDetails {
  documentId?: string;
  documentType: string;
  file: File | null;
  fileName: string;
  UserId?: string;
}

export default function DocumentUploadPage() {
  const dispatch = useAppDispatch();
  const {
      application: {
        bearerToken,
        id,
        apiState: { status, isError, message },
      },
      document: {
        document: { rows, count } 
      }
    } = useAppSelector((state: RootState) => state);

  // Document Types
  const originalList = [
    "Aadhar Card",
    "PAN Card",
    "Driving Licence",
    "Voter ID",
    "Passport",
    "Other",
  ];

  const usedTypes = rows.map((row) => row.documentType);

  const documentTypes = originalList.filter(
    (type) => !usedTypes.includes(type)
  );

  // State for managing documents
  const [documents, setDocuments] = useState<DocumentDetails[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [fetch, setFetch] = useState(true);
  const [currentDocument, setCurrentDocument] = useState<DocumentDetails>({
    documentId: "",
    documentType: "",
    file: null,
    fileName: "",
    UserId: id
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

  const fetchDocuments = async () => {
        try {
          dispatch(
            getDocument(id, {
              headers: { Authorization: `Bearer ${bearerToken}` },
            })
          );
        } catch (error) {
          console.log(error);
        }
      };
  
    useEffect(() => {
      if (fetch) {
        fetchDocuments();
        setFetch(false);
      }
    }, [fetch]);

    const handleAddDocument = () => {
      try {
        if (currentDocument.documentType===""||currentDocument.file===null||currentDocument.fileName===""){
          return;
        }
        
        // TODO: implement add new
        dispatch(
          addDocument(id,
            {
              headers: { 
                Authorization: `Bearer ${bearerToken}`,
                "Content-Type": "multipart/form-data",
               },
            },
            currentDocument
            )
        ).then(()=>{
          setIsEditing(false);
          setFetch(true);
          toast.success("Document added");
        })
    
        setIsEditing(false);
        setCurrentDocument({
          documentId: "",
          documentType: "",
          file: null,
          fileName: ""
        });

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } catch (error) {
        
      }
    };

    const handleUpdateDocument = () => {
      try {
        if (currentDocument.documentType===""){
          return;
        }
  
        // TODo: implement update bank
        dispatch(
          updateDocument(
            {
              headers: { Authorization: `Bearer ${bearerToken}` },
            },
            currentDocument
          )
        ).then(()=>{
          setIsEditing(false);
          setFetch(true);
          toast.success("Document updated");
        })
    
        setIsEditing(false);
        setCurrentDocument({
          documentId: "",
          documentType: "",
          file: null,
          fileName: ""
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } catch (error) {
        
      }
    };
    

  // Handle editing a document
  const handleEditDocument = (document: any) => {
    setCurrentDocument({
      documentId: document?.id,
      fileName: document?.fileName,
      documentType: document?.documentType,
      file: document?.file,
      UserId: document?.UserId
    });
    setIsEditing(true);
  };

  // Handle removing a document
  const handleRemoveDocument = (documentId: string) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this document?"
    );
    if (confirmRemove) {
      dispatch(
        deleteDocument(
          documentId,
          {
            headers: { Authorization: `Bearer ${bearerToken}` },
          },
          )
      ).then(()=>{
        setIsEditing(false);
        setFetch(true);
        toast.success("Document removed");
      }
      )
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
      {rows.length === 0 && (
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
      {rows.length > 0 && (
        <div className="space-y-4">
          <button
            className="mb-4 px-4 py-2 bg-[#303c8c] text-white rounded hover:bg-[#303c8c] cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            Add Document
          </button>

          {rows.map((document) => (
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
                <Link
                  href={document.file}
                  target="_blank"
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  View
                </Link>
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
              {currentDocument.documentId ? "Edit Document" : "Add Document"}
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

              {
                currentDocument?.documentId 
                ? <div>
                  <label
                    htmlFor="file"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Uploaded Document
                  </label>
                  <p className="pt-4">{currentDocument.fileName}</p>
                </div>
                : <div>
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
              }

              
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
                onClick={currentDocument.documentId ? handleUpdateDocument : handleAddDocument}
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