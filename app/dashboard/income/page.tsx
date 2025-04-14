"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector, RootState } from "../../../store";
import { getIncomeSource, updateIncomeSource, deleteIncomeSource, addIncomeSource } from "../../../store/incomeSources/actions"

// Define the income source interface
interface IncomeSource {
  incomeSourceId?: string;
  incomeType: 'Primary' | 'Secondary' | 'Extra';
  source: string;
  amountPerAnnum: number;
}

export default function IncomeSourcesPage() {
  const dispatch = useAppDispatch();
  const {
    application: {
      bearerToken,
      id,
      apiState: { status, isError, message },
    },
    incomeSource: {
      incomeSource: {rows, count}
    }
  } = useAppSelector((state: RootState) => state);

  const [isEditing, setIsEditing] = useState(false);
  const [fetch, setFetch] = useState(true);
  const [currentIncomeSource, setCurrentIncomeSource] = useState<IncomeSource>({
    incomeSourceId: "",
    incomeType: 'Primary',
    source: '',
    amountPerAnnum: 0,
  });

  const fetchIncomeSource = async () => {
    try {
      dispatch(
        getIncomeSource(id, {
          headers: { Authorization: `Bearer ${bearerToken}` },
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    if (fetch) {
      fetchIncomeSource();
      setFetch(false);
    }
  }, [fetch]);

  const [errors, setErrors] = useState({
    source: '',
    amountPerAnnum: '',
  });

  const validateSource = (source: string) => {
    return source.trim().length > 0;
  };

  const validateAmount = (amount: number) => {
    return amount > 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));

    if (name === 'amountPerAnnum') {
      setCurrentIncomeSource((prevState) => ({
        ...prevState,
        [name]: Number(value),
      }));
    } else {
      setCurrentIncomeSource((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleAddIncomeSource = () => {
    try {
      const newErrors = {
        source: !validateSource(currentIncomeSource.source)
          ? "Income source cannot be empty"
          : "",
        amountPerAnnum: !validateAmount(currentIncomeSource.amountPerAnnum)
          ? "Amount must be greater than 0"
          : "",
      };

      setErrors(newErrors);

      const hasErrors = Object.values(newErrors).some((error) => error !== "");

      if (hasErrors) {
        return;
      }
      
      // TODO: implement add income
      dispatch(
        addIncomeSource(id,
          {
            headers: { Authorization: `Bearer ${bearerToken}` },
          },
          currentIncomeSource
          )
      ).then(()=>{
        setIsEditing(false);
        setFetch(true);
        toast.success("New Income Source added");
      })
  
      setIsEditing(false);
      setCurrentIncomeSource({
        incomeType: 'Primary',
        source: '',
        amountPerAnnum: 0,
      });
    } catch (error) {
      
    }
  };

  const handleUpdateIncomeSource = () => {
    try {
      const newErrors = {
        source: !validateSource(currentIncomeSource.source)
          ? "Income source cannot be empty"
          : "",
        amountPerAnnum: !validateAmount(currentIncomeSource.amountPerAnnum)
          ? "Amount must be greater than 0"
          : "",
      };

      setErrors(newErrors);

      const hasErrors = Object.values(newErrors).some((error) => error !== "");

      if (hasErrors) {
        return;
      }

      // TODo: implement update income
      dispatch(
        updateIncomeSource(
          {
            headers: { Authorization: `Bearer ${bearerToken}` },
          },
          currentIncomeSource
        )
      ).then(()=>{
        setIsEditing(false);
        setFetch(true);
        toast.success("Income Source updated");
      })
  
      setIsEditing(false);
      setCurrentIncomeSource({
        incomeType: 'Primary',
        source: '',
        amountPerAnnum: 0,
      });
    } catch (error) {
      
    }
  };

  const handleEditIncomeSource = (source: any) => {
    setCurrentIncomeSource({
      incomeSourceId: source.id,
      incomeType: source.incomeType,
      source: source.source,
      amountPerAnnum: source.amountPerAnnum,
    });
    setIsEditing(true);
  };

  const handleCloseDialog = () => {
    setIsEditing(false);
    setCurrentIncomeSource({
      incomeSourceId: "",
      incomeType: 'Primary',
      source: '',
      amountPerAnnum: 0,
    });
    setErrors({
      source: '',
      amountPerAnnum: '',
    });
  };

  const handleRemoveIncomeSource = (sourceId: string) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this income source?"
    );
    if (confirmRemove) {
      dispatch(
        deleteIncomeSource(
          sourceId,
          {
            headers: { Authorization: `Bearer ${bearerToken}` },
          },
          )
      ).then(()=>{
        setIsEditing(false);
        setFetch(true);
        toast.success("Income Source removed");
      }
      )
    }
  };

  return (
    <div>
      <p className="text-2xl font-bold mb-6">Income Sources</p>
      {count === 0 && (
        <div className="flex flex-col items-center justify-center gap-10 mt-20">
          <div className="h-34 w-34 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-5xl">💰</span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Add Your Income Sources</p>
            <button
              className="mt-2 px-4 py-2 bg-[#303c8c] text-white rounded hover:bg-[#303c8c] cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              Add Income Source
            </button>
          </div>
        </div>
      )}

      {count > 0 && (
        <div className="space-y-4">
          <button
            className="mb-4 px-4 py-2 bg-[#303c8c] text-white rounded hover:bg-[#303c8c] cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            Add Income Source
          </button>

          {rows.map((source) => (
            <div
              key={source.id}
              className="bg-white shadow rounded-lg p-6 flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold">{source.source}</p>
                <p className="text-gray-600">
                  Income Type: {source.incomeType}
                </p>
                <p className="text-gray-600">
                  Amount per Annum: ₹{source.amountPerAnnum.toLocaleString()}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditIncomeSource(source)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemoveIncomeSource(source?.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isEditing && (
        <div className="fixed backdrop-blur-sm inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl mx-4">
            <h2 className="text-xl font-bold mb-4">
              {currentIncomeSource?.incomeSourceId ? "Edit Income Source" : "Add Income Source"}
            </h2>
            <p className="text-gray-600 mb-6">
              Fill in your income source information
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="source"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Income Source
                </label>
                <input
                  type="text"
                  id="source"
                  name="source"
                  value={currentIncomeSource.source}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter Income Source (e.g., Job, Business)"
                />
                {errors.source && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.source}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="incomeType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Income Type
                </label>
                <select
                  id="incomeType"
                  name="incomeType"
                  value={currentIncomeSource.incomeType}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="Primary">Primary</option>
                  <option value="Secondary">Secondary</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="amountPerAnnum"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Amount per Annum (₹)
                </label>
                <input
                  type="number"
                  id="amountPerAnnum"
                  name="amountPerAnnum"
                  value={currentIncomeSource.amountPerAnnum}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter Annual Income Amount"
                />
                {errors.amountPerAnnum && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.amountPerAnnum}
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
                onClick={currentIncomeSource?.incomeSourceId ? handleUpdateIncomeSource : handleAddIncomeSource}
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