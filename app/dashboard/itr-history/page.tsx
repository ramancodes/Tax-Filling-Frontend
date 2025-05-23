"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
// Material UI icons instead of Lucide
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DescriptionIcon from '@mui/icons-material/Description';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useAppDispatch, useAppSelector, RootState } from "../../../store";
import { getTaxReturn } from "../../../store/taxReturns/actions";
import { Button } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import axios from "axios";
import { AppConfig } from "../../../config/config";
import toast from "react-hot-toast";
import Script from "next/script";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function ITRHistoryPage() {
  const [fetch, setFetch] = useState(true);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const {
    application: {
      bearerToken,
      id,
      apiState: { status, isError, message },
    },
    taxReturn:{
      taxReturn: {rows, count}
    }
  } = useAppSelector((state: RootState) => state);
  
  // // Extract rows and count safely with default values to prevent undefined errors
  // const rows = taxReturn?.taxReturn?.rows || [];
  // const count = taxReturn?.taxReturn?.count || 0;
  
  const dispatch = useAppDispatch();

  const fetchTaxReturns = async () => {
    try {
      dispatch(
        getTaxReturn(id, {
          headers: { Authorization: `Bearer ${bearerToken}` },
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    if (fetch) {
      fetchTaxReturns();
      setFetch(false);
    }
  }, [fetch]);  

  // Track which dropdowns are open
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  // Toggle dropdown visibility
  const toggleDropdown = (id: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Format amount as currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (isoString: any) => {
    const date = new Date(isoString);
  
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  }

  const initPay = (order: any, type: any, incomeTaxId: any, paymentId: any) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: `${type} payment`,
      description:`${type} payment`,
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response: any)=>{
        console.log(response)

        try {
          const {data} = await axios.post(AppConfig.BACKEND_URL+'/verify-payment', 
            {response, type, incomeTaxId, paymentId},
            {
              headers: { Authorization: `Bearer ${bearerToken}` },
            }
          )
          console.log("data: ",data);
          
          if(data.success){
            setFetch(true);
          }
        } catch (error) {
          console.log(error)
          toast.error("Payment Failed")
          
        }
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const handlePayment = async (incomeTaxId: any, type: any) => {
    try {
      const { data } = await axios.post(
        AppConfig.BACKEND_URL + '/payment-razorpay',
        { incomeTaxId, type },
        {
          headers: { Authorization: `Bearer ${bearerToken}` },
        }
      );
      console.log(data);
      
      if (data.success) {
        console.log(data.order);
        initPay(data.order, type, incomeTaxId, data.order.id);
      } else {
        toast.error("Failed to initiate payment");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Error initializing payment");
    }
  };
  

  return (
    <div>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
        onLoad={() => setRazorpayLoaded(true)}
      />
      <p className="text-2xl font-bold mb-6">Income Tax Return History</p>
      {count === 0 && (
        <div className="flex flex-col items-center justify-center gap-10 mt-20">
        <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-5xl">📄</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <p className="text-xl font-semibold">No ITRs Filed</p>
          <p className="text-gray-600 text-center max-w-md">
            You haven't filed any Income Tax Returns yet. When you file your first ITR, it will appear here.
          </p>
          <Link
            href="/file-tax"
            className="mt-2 px-6 py-3 bg-[#303c8c] text-white rounded-md hover:bg-[#25305f] transition-colors"
          >
            File ITR Now
          </Link>
        </div>
      </div>
      )}

      {count > 0 &&
        <div className="mx-auto py-6 px-4">
          <div className="space-y-4">
            {rows.map((record) => (
              <div
                key={record.id}
                className="bg-white shadow rounded-lg p-6"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center space-x-2">
                      <DescriptionIcon className="text-blue-500" fontSize="small" />
                      <p className="pl-4 pb-2 pr-4 text-lg font-semibold w-4xl">{record?.itrType}</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">Filed on: {formatDate(record?.createdAt)}</p>
                    <p className="text-gray-800 font-medium mt-2">Tax Amount: {formatCurrency(record?.totalTaxAmount)}</p>
                    <p className="text-gray-800 font-medium mt-2">Due Tax Amount: {formatCurrency(record?.dueTaxAmount)}</p>
                  </div>
                  <div>
                  {/* view and income details button */}
                  <div className="flex space-x-3 mt-4">
                    <Link 
                    href={record?.file}
                    target="_blank"
                    className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                      <VisibilityIcon fontSize="small" className="mr-2" /> View
                    </Link>
                    <button
                      onClick={() => toggleDropdown(record?.id)}
                      className="flex items-center px-4 py-2 bg-[#303c8c] text-white rounded hover:bg-[#25305f] transition-colors"
                    >
                      Income Details {openDropdowns[record?.id] ? 
                        <KeyboardArrowUpIcon fontSize="small" className="ml-2" /> : 
                        <KeyboardArrowDownIcon fontSize="small" className="ml-2" />}
                    </button>
                  </div>
                  </div>

                </div>

                {/* pay fees and pay tax buttons */}
                <div className="flex space-x-3 mt-4">
                  {
                    record?.feePaid
                    ? null
                    : <button
                    onClick={() => handlePayment(record?.id, "fees")}
                    className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                      <PaymentIcon fontSize="small" className="mr-2" /> Pay Application Fees
                    </button>
                  }

                  {
                    record?.dueTaxAmount <= 0
                    ? null
                    :
                    !record?.feePaid || record?.duePaid
                    ? null
                    : <button
                    onClick={() => handlePayment(record?.id, "tax")}
                    className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                      <ReceiptIcon fontSize="small" className="mr-2" /> Pay Due Tax
                    </button>
                  }
                </div>

                {openDropdowns[record?.id] && record?.incomeDetails && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h3 className="font-medium mb-3">Income Details</h3>
                    <div className="bg-gray-50 rounded-md p-3">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-gray-600">
                            <th className="pb-2">Income Type</th>
                            <th className="pb-2">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {record.incomeDetails.map((detail:any, idx:any) => (
                            <tr key={idx} className="border-t border-gray-200">
                              <td className="py-2">{detail?.incomeType}</td>
                              <td className="py-2">{formatCurrency(detail?.incomeAmount)}</td>
                            </tr>
                          ))}
                          <tr className="border-t border-gray-200 font-semibold">
                            <td className="py-2">Total Income</td>
                            <td className="py-2">
                              {formatCurrency(
                                record?.totalIncome
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
}