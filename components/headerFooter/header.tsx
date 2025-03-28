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

  const navMenus = [
    {
      text: "Individual/HUF",
      href: "/individual-huf",
      submenus: [
        { text: "Salaried Employees", href: "/individual-huf/salaried-employees" },
        { text: "Business/Profession", href: "/individual-huf/business-profession" },
        { text: "Senior / Super Senior Citizen", href: "/individual-huf/senior-citizens" },
        { text: "Non Resident", href: "/individual-huf/non-resident" },
        { text: "Hindu Undivided Family (HUF)", href: "/individual-huf/huf" }
      ]
    },
    {
      text: "Company",
      href: "/company",
      submenus: []
    },
    {
      text: "Non-Company",
      href: "/non-company",
      submenus: []
    },
    {
      text: "Tax Professionals & Others",
      href: "/tax-professionals",
      submenus: [
        { text: "Guidance to file Tax Return", href: "/tax-professionals/guidance" },
        { text: "Return / Forms applicable to me", href: "/tax-professionals/forms" },
        { text: "Tax slabs", href: "/tax-professionals/tax-slabs" },
        { text: "Deductions on which I can get tax b...", href: "/tax-professionals/deductions" },
        { text: "Update my profile details", href: "/tax-professionals/profile" },
        { text: "Assisted filing", href: "/tax-professionals/assisted-filing" },
        { text: "Downloads", href: "/tax-professionals/downloads" }
      ]
    },
    { text: "About", href: "/about", submenus: [] },
    { text: "Help", href: "/help", submenus: [] },
    { text: "Contact", href: "/contact", submenus: [] }
  ];

  const additionalNavItems = [
    { text: "Home", href: "/" },
    { text: "Dashboard", href: "/dashboard" },
    
  ];

  return (
    <div>
      <Head>
        <title>SimpleTax</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header & Navbar */}
      <header className="shadow-md bg-[#303c8c]">
        <div className="flex flex-col justify-center items-center w-full">
          <div className={`flex items-center justify-between bg-gray-100 px-8 py-2 w-full`}>
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
          <div className="px-1 py-2 w-full">
            <nav className="flex items-center justify-center gap-10 pl-10">
              {isAuthenticated ? (
                additionalNavItems.map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    className="px-1 py-1 text-white border-b-2 border-[#303c8c] hover:border-white font-semibold text-sm"
                  >
                    {item.text}
                  </Link>
                ))
              ) : (
                additionalNavItems
                  .filter((item) => item.text !== 'Dashboard')
                  .map((item) => (
                    <Link
                      key={item.text}
                      href={item.href}
                      className="px-1 py-1 text-white border-b-2 border-[#303c8c] hover:border-white font-semibold text-sm"
                    >
                      {item.text}
                    </Link>
                  ))
              )}

              {/* Dropdown Menus */}
              {navMenus.map((menu) => (
                <div key={menu.text} className="group relative">
                  <Link
                    href={menu.href}
                    className="px-1 py-1 text-white border-b-2 border-[#303c8c] hover:border-white font-semibold text-sm flex items-center"
                  >
                    {menu.text}
                    {menu.submenus.length > 0 && (
                      <svg 
                        className="w-4 h-4 ml-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  
                  {menu.submenus.length > 0 && (
                    <div className="absolute hidden group-hover:block z-50 bg-white shadow-lg mt-2 rounded-md min-w-[250px]">
                      {menu.submenus.map((submenu) => (
                        <Link
                          key={submenu.text}
                          href={submenu.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                        >
                          {submenu.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
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
                  {additionalNavItems.map((item) => (
                    <li key={item.text} className="mb-2">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                  
                  {navMenus.map((menu) => (
                    <React.Fragment key={menu.text}>
                      <li>
                        <Link
                          href={menu.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded font-semibold"
                        >
                          {menu.text}
                        </Link>
                      </li>
                      {menu.submenus.map((submenu) => (
                        <li key={submenu.text} className="pl-4">
                          <Link
                            href={submenu.href}
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded text-sm"
                          >
                            {submenu.text}
                          </Link>
                        </li>
                      ))}
                    </React.Fragment>
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