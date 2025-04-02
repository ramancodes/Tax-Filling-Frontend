"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector, RootState } from "../../../store";
import { getBankDetails, updateBankDetails, addBankDetails, deleteBankDetails } from "../../../store/bankDetails/actions"

// Define the bank details interface
interface BankDetails {
  bankId: string,
  bankName: string;
  accountNumber: number;
  customerId: number;
  ifscCode: string;
  UserId?: string;
}

export default function BankDetailsPage() {
  const dispatch = useAppDispatch();
  const {
    application: {
      bearerToken,
      id,
      apiState: { status, isError, message },
    },
    bankDetails: {
      bankDetails: { rows, count }
    }
  } = useAppSelector((state: RootState) => state);

  const [isEditing, setIsEditing] = useState(false);
  const [fetch, setFetch] = useState(true);
  const [currentBank, setCurrentBank] = useState<BankDetails>({
    bankId: "",
    bankName: "",
    accountNumber: 0,
    customerId: 0,
    ifscCode: "",
    UserId: id
  });

  const [errors, setErrors] = useState({
    accountNumber: "",
    ifscCode: "",
  });

  const fetchBankDetails = async () => {
      try {
        dispatch(
          getBankDetails(id, {
            headers: { Authorization: `Bearer ${bearerToken}` },
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    if (fetch) {
      fetchBankDetails();
      setFetch(false);
    }
  }, [fetch]);
  

  const validateAccountNumber = (accountNumber: number) => {
    const accountRegex = /^\d{9,18}$/;
    return accountRegex.test(accountNumber.toString());
  };

  const validateIFSCCode = (ifscCode: string) => {
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return ifscRegex.test(ifscCode);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (name === "accountNumber") {
      if (!validateAccountNumber(Number(value))) {
        setErrors((prev) => ({
          ...prev,
          accountNumber: "Account number must be 9-18 digits",
        }));
      }
    }

    if (name === "ifscCode") {
      if (!validateIFSCCode(value)) {
        setErrors((prev) => ({
          ...prev,
          ifscCode: "Invalid IFSC code format",
        }));
      }
    }

    setCurrentBank((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddBankDetails = () => {
    try {
      if (currentBank.bankName===""||currentBank.bankName==="N/A"||currentBank.customerId===0||currentBank.UserId===""||currentBank.UserId==="N/A"){
        return;
      }
      const newErrors = {
        accountNumber: !validateAccountNumber(currentBank.accountNumber)
          ? "Account number must be 9-18 digits"
          : "",
        ifscCode: !validateIFSCCode(currentBank.ifscCode)
          ? "Invalid IFSC code format"
          : "",
      };
  
      setErrors(newErrors);
  
      const hasErrors = Object.values(newErrors).some((error) => error !== "");
  
      if (hasErrors) {
        return;
      }
      
      // TODO: implement add new
      dispatch(
        addBankDetails(id,
          {
            headers: { Authorization: `Bearer ${bearerToken}` },
          },
          currentBank
          )
      ).then(()=>{
        setIsEditing(false);
        setFetch(true);
        toast.success("Bank details added");
      })
  
      setIsEditing(false);
      setCurrentBank({
        bankId: "",
        bankName: "",
        accountNumber: 0,
        customerId: 0,
        ifscCode: "",
      });
    } catch (error) {
      
    }
  };

  const handleUpdateBankDetails = () => {
    try {
      if (currentBank.bankName===""||currentBank.bankName==="N/A"||currentBank.customerId===0||currentBank.UserId===""||currentBank.UserId==="N/A"){
        return;
      }
      const newErrors = {
        accountNumber: !validateAccountNumber(currentBank.accountNumber)
          ? "Account number must be 9-18 digits"
          : "",
        ifscCode: !validateIFSCCode(currentBank.ifscCode)
          ? "Invalid IFSC code format"
          : "",
      };
  
      setErrors(newErrors);
  
      const hasErrors = Object.values(newErrors).some((error) => error !== "");
  
      if (hasErrors) {
        return;
      }

      // TODo: implement update bank
      dispatch(
        updateBankDetails(
          {
            headers: { Authorization: `Bearer ${bearerToken}` },
          },
          currentBank
        )
      ).then(()=>{
        setIsEditing(false);
        setFetch(true);
        toast.success("Bank details updated");
      })
  
      setIsEditing(false);
      setCurrentBank({
        bankId: "",
        bankName: "",
        accountNumber: 0,
        customerId: 0,
        ifscCode: "",
      });
    } catch (error) {
      
    }
  };

  const handleEditBank = (bank: any) => {
    setCurrentBank({
      bankId: bank.id,
      bankName: bank.bankName,
      accountNumber: bank.accountNumber,
      customerId: bank.customerId,
      ifscCode: bank.ifscCode,
      UserId: bank.UserId
    });
    setIsEditing(true);
  };

  const handleCloseDialog = () => {
    setIsEditing(false);
    setCurrentBank({
      bankId: "",
      bankName: "",
      accountNumber: 0,
      customerId: 0,
      ifscCode: "",
    });
    setErrors({
      accountNumber: "",
      ifscCode: "",
    });
  };

  const handleRemoveBank = (bankId: string) => {    
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this bank account?"
    );
    if (confirmRemove) {
      dispatch(
        deleteBankDetails(
          bankId,
          {
            headers: { Authorization: `Bearer ${bearerToken}` },
          },
          )
      ).then(()=>{
        setIsEditing(false);
        setFetch(true);
        toast.success("Bank details removed");
      }
      )
    }
  };

  return (
    <div>
      <p className="text-2xl font-bold mb-6">Bank Details</p>

      {/* Bank Details Home Screen */}
      {count === 0 && (
        <div className="flex flex-col items-center justify-center gap-10 mt-20">
          <div className="h-34 w-34 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-5xl">🏦</span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Add Your Bank Details</p>
            <button
              className="mt-2 px-4 py-2 bg-[#303c8c] text-white rounded hover:bg-[#303c8c] cursor-pointer"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Add Bank
            </button>
          </div>
        </div>
      )}

      {/* Bank Details Rows */}
      {count > 0 && (
        <div className="space-y-4">
          <button
            className="mb-4 px-4 py-2 bg-[#303c8c] text-white rounded hover:bg-[#303c8c]/80 cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            Add Bank
          </button>

          {rows.map((bank: any) => (
            <div
              key={bank.id}
              className="bg-white shadow rounded-lg p-6 flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold">{bank.bankName}</p>
                <p className="text-gray-600">
                  Account No: {bank.accountNumber}
                </p>
                <p className="text-gray-600">IFSC: {bank.ifscCode}</p>
                {bank.customerId && (
                  <p className="text-gray-600">
                    Customer ID: {bank.customerId}
                  </p>
                )}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditBank(bank)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemoveBank(bank.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Bank Modal */}
      {isEditing && (
        <div className="fixed backdrop-blur-sm inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl mx-4">
            <h2 className="text-xl font-bold mb-4">
              {currentBank.bankId ? "Edit Bank Details" : "Add Bank Details"}
            </h2>
            <p className="text-gray-600 mb-6">
              Fill in your bank account information
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="bankName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Bank Name
                </label>
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  value={currentBank.bankName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter Bank Name"
                />
              </div>

              <div>
                <label
                  htmlFor="accountNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Account Number
                </label>
                <input
                  type="number"
                  id="accountNumber"
                  name="accountNumber"
                  value={currentBank.accountNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter Account Number"
                />
                {errors.accountNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.accountNumber}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="customerId"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Customer ID
                </label>
                <input
                  type="number"
                  id="customerId"
                  name="customerId"
                  value={currentBank.customerId}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter Customer ID (Optional)"
                />
              </div>

              <div>
                <label
                  htmlFor="ifscCode"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  IFSC Code
                </label>
                <input
                  type="text"
                  id="ifscCode"
                  name="ifscCode"
                  value={currentBank.ifscCode}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter IFSC Code"
                />
                {errors.ifscCode && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.ifscCode}
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
                onClick={currentBank.bankId ? handleUpdateBankDetails : handleAddBankDetails}
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