"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector, RootState } from "../../../store";
import { getUserDetails, updateUserDetails } from "../../../store/user/actions";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const {
    application: {
      bearerToken,
      id,
      email,
      apiState: { status, isError, message },
    },
    userDetails: {
      userDetails: { details },
    },
  } = useAppSelector((state: RootState) => state);

  const [isEditing, setIsEditing] = useState(false);
  const [fetch, setFetch] = useState(true);
  const [formData, setFormData] = useState({
    firstName: details?.firstName ?? "",
    middleName: details?.middleName ?? "",
    lastName: details?.lastName ?? "",
    gender: details?.gender ?? "",
    dob: details?.dob ?? "",
    phoneNo: details?.phoneNo ?? "",
    address: details?.address ?? "",
    occupation: details?.occupation ?? "",
    website: details?.website ?? "",
    UserId: details?.UserId!=="N/A" ? details?.UserId : id,
  });
  const [errors, setErrors] = useState({
    dob: "",
    phoneNo: ""
  });

  const fetchUserDetails = async () => {
    try {
      dispatch(
        getUserDetails(id, {
          headers: { Authorization: `Bearer ${bearerToken}` },
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const validateAge = (dob: string) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age >= 18;
  };

  const validatePhoneNumber = (phoneNo: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phoneNo);
  };

  const formattedDate = (dateStr: string) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (name === "dob") {
      if (!validateAge(value)) {
        setErrors((prev) => ({
          ...prev,
          dob: "You must be 18 years or older",
        }));
      }
    }

    if (name === "phoneNo") {
      if (!validatePhoneNumber(value)) {
        setErrors((prev) => ({
          ...prev,
          phoneNo: "Phone number must be 10 digits, starting with 6-9",
        }));
      }
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (fetch) {
      fetchUserDetails();
      setFetch(false);
    }
  }, [fetch]);

  const handleSaveProfile = () => {
    try {
      if(formData.UserId==="" || formData.UserId==="N/A"){
        return;
      }
      const newErrors = {
        dob: !validateAge(formData.dob) ? "You must be 18 years or older" : "",
        phoneNo: !validatePhoneNumber(formData.phoneNo)
          ? "Phone number must be 10 digits, starting with 6-9"
          : "",
      };
  
      setErrors(newErrors);
  
      const hasErrors = Object.values(newErrors).some((error) => error !== "");
  
      if (hasErrors) {
        return;
      }

      const isUpdate = details?.id==="N/A" ? false : true;

      dispatch(
        updateUserDetails(
          isUpdate,
          formData,
          {
            headers: { Authorization: `Bearer ${bearerToken}` },
          }
          )
      ).then(()=>{
        setIsEditing(false);
        setFetch(true);
        toast.success("Profile Updated");
      }
      )
    } catch (error) {
      toast.error("Failed to Update")
    }
  };

  const handleCloseDialog = () => {
    setIsEditing(false);
    if (details && details?.id !== "N/A") {
      setFormData({
        firstName: details?.firstName || "",
        middleName: details?.middleName || "",
        lastName: details?.lastName || "",
        gender: details?.gender || "",
        dob: details?.dob || "",
        phoneNo: details?.phoneNo || "",
        address: details?.address || "",
        occupation: details?.occupation || "",
        website: details?.website || "",
        UserId: details?.UserId || id,
      });
    }
  };

  return (
    <div>
      {/* Create Profile Details */}
      {details?.id === "N/A" ? (
        <div>
          <p className="text-2xl font-bold">Profile Details</p>
          <div className="flex flex-col items-center justify-center gap-10 mt-20">
            <div className="h-34 w-34 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-5xl">👤</span>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold">Add Your Details</p>
              <button
                className="mt-2 px-4 py-2 bg-[#303c8c] text-white rounded hover:bg-[#303c8c] cursor-pointer"
                onClick={() => setIsEditing(true)}
              >
                Add Profile
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-2xl font-bold mb-6">Profile Details</p>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center space-x-6 mb-6">
              <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-4xl">👤</span>
              </div>
              <div>
                <p className="text-xl font-semibold">{details?.firstName}</p>
                <p className="text-gray-500">{details?.email || email}</p>
                <button
                  className="mt-2 px-4 py-2 bg-[#303c8c] text-white rounded hover:bg-[#303c8c] cursor-pointer"
                  onClick={() => {
                    setIsEditing(true)
                    setFormData({
                      firstName: details?.firstName || "",
                      middleName: details?.middleName || "",
                      lastName: details?.lastName || "",
                      gender: details?.gender || "",
                      dob: details?.dob || "",
                      phoneNo: details?.phoneNo || "",
                      address: details?.address || "",
                      occupation: details?.occupation || "",
                      website: details?.website || "",
                      UserId: details?.UserId || id,
                    });
                  }}
                >
                  Edit Profile
                </button>
              </div>
            </div>

            <div>
              <p className="text-lg font-medium mb-4">Personal Information</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <div className="mt-1 p-2 bg-gray-50 rounded">
                        {details?.middleName
                          ? `${details?.firstName} ${details?.middleName} ${details?.lastName}`
                          : `${details?.firstName} ${details?.lastName}`}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Date of Birth
                      </label>
                      <div className="mt-1 p-2 bg-gray-50 rounded">
                        {formattedDate(details?.dob)}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="mt-1 p-2 bg-gray-50 rounded">
                        {details?.phoneNo}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Website
                      </label>
                      <div className="mt-1 p-2 bg-gray-50 rounded">
                        {details?.website}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Gender
                      </label>
                      <div className="mt-1 p-2 bg-gray-50 rounded">
                        {details?.gender}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Occupation
                      </label>
                      <div className="mt-1 p-2 bg-gray-50 rounded">
                        {details?.occupation}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <div className="mt-1 p-2 bg-gray-50 rounded">
                        {details?.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profile Create/Edit Modal */}
      {isEditing && (
        <div className="fixed backdrop-blur-sm inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl mx-4">
            <h2 className="text-xl font-bold mb-4">
              {details?.id === "N/A" ? "Create Profile" : "Edit Profile"}
            </h2>
            <p className="text-gray-600 mb-6">
              {details?.id === "N/A"
                ? "Fill in your personal details"
                : "Update your personal information"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="middleName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
                {errors.dob && (
                  <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phoneNo"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
                {errors.phoneNo && (
                  <p className="text-red-500 text-xs mt-1">{errors.phoneNo}</p>
                )}
              </div>
              <div>
                <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
                  Occupation
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
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
                onClick={handleSaveProfile}
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
