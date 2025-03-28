"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector, RootState } from "../../store";
import {logout} from '../../store/applications/actions'
import { useRouter, usePathname  } from "next/navigation";
import toast from "react-hot-toast";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const {
      bearerToken,
      apiState: { status, isError, message },
      isLoginError,
  } = useAppSelector((state: RootState) => state.application);

  React.useEffect(() => {
    if(isLoginError){
      toast.error(message);
    }
  }, [isLoginError]);
  
  const handleLogout = () =>{
    dispatch(logout());
    router.push("/");
  }

  useEffect(() => {
    setIsAuthenticated(!!bearerToken);
  }, [bearerToken]);

  useEffect(() => {
    if (isAuthenticated && (pathname === "/login" || pathname === "/register" || pathname === "/login/forgotPassword" || pathname === "/login/getUsername")) {
      router.push("/");
    }
  }, [isAuthenticated]);


  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const navItems = [
    { text: "Home", href: "/" },
    { text: "Dashboard", href: "/dashboard" },
    { text: "About", href: "/about" },
    { text: "Help", href: "/help" },
    { text: "Contact", href: "/contact" },
  ];
  return (
    <div>
      <Head>
        <title>SimpleTax</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header & Navbar */}
      <header className="shadow-md bg-[#303c8c]">
        <div className="container flex flex-col ">
          <div className="flex items-center justify-between bg-gray-100 px-16 py-2 w-lvw">
            <Link href='/'>
                <Image
                width={180}
                height={180}
                src="/logo.svg"
                alt="SimpleTax Logo"
                className="h-13 w-max"
                />
            </Link>
            {
              !isAuthenticated ? (
                <div className="pr-4">
                  <Link
                    href="/login"
                    className="inline-flex items-center px-4 py-1 border border-[#303c8c] text-[#303c8c] hover:bg-[#303c8c] hover:text-white rounded mr-2"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="inline-flex items-center px-4 py-1 border border-[#303c8c] bg-[#303c8c] text-white hover:bg-[#303c8c]/90 rounded"
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="pr-4">
                  <button
                    onClick={handleLogout}
                    className="cursor-pointer inline-flex items-center px-4 py-1 border border-[#303c8c] text-[#303c8c] hover:bg-[#303c8c] hover:text-white rounded mr-2"
                  >
                    Logout
                  </button>
                </div>
              )
            } 
          </div>

          {/* Desktop Navigation */}
          <div className="px-10 py-2">
            <nav className="mr-4 flex items-center justify-start gap-20 pl-10">
              {
                isAuthenticated 
                ? navItems.map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    className="px-3 py-1 text-white border-b-2 border-[#303c8c] hover:border-white font-semibold"
                  >
                    {item.text}
                  </Link>
                )) 
                : navItems.filter((item)=>item.text!=='Dashboard').map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    className="px-3 py-1 text-white border-b-2 border-[#303c8c] hover:border-white font-semibold"
                  >
                    {item.text}
                  </Link>
                ))
              }
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileNav}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer pending */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30"
            onClick={toggleMobileNav}
          ></div>

          {/* Drawer */}
          <div className="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-lg">
            <div className="p-4">
              <button
                className="absolute top-4 right-4 text-gray-500"
                onClick={toggleMobileNav}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <nav className="mt-8">
                <ul>
                  {navItems.map((item) => (
                    <li key={item.text} className="mb-2">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                  <li className="border-t border-gray-200 my-2 pt-2">
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
