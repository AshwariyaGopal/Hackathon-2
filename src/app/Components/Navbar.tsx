"use client";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {/* Top black bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="flex justify-center items-center h-6">
          <span className="text-sm font-light text-center">
            Sign up and get 20% off on your first order.{" "}
            <Link href="#" className="underline font-medium">
              Sign Up Now
            </Link>
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white border-b border-gray-300 overflow-hidden xl:h-20">
        <div className="flex justify-between items-center mx-auto px-10 py-4 max-w-screen-xl ">
          {/* Search icon (only visible on mobile screens) */}
          <button className="xl:hidden z-50 " onClick={toggleMenu}>
            {/* <i className="fas fa-search text-lg text-gray-700"></i> */}
            <FontAwesomeIcon
              icon={faBars}
              style={{ width: "30px", height: "30px", color: "black" }}
            />
          </button>
          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center gap-6 p-6 z-40 transition-transform ease-in-out duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <Link href="/ProductDetail" className="text-lg hover:underline">
              Shop
            </Link>
            <Link href="/Category" className="text-lg hover:underline">
              On Sale
            </Link>
            <Link href="#" className="text-lg hover:underline">
              New Arrivals
            </Link>
            <Link href="#" className="text-lg hover:underline">
              Brands
            </Link>

            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-5 text-white text-2xl"
            >
              ✖
            </button>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse "
          >
            <span className="self-center text-2xl font-bold font-integral-cf ">
              SHOP.CO
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 text-black ">
            <div className=" font-semibold flex gap-1">
              <Link href="/ProductDetail" className="hover:underline">
                Shop
              </Link>
              <Image src="/Frame (17).png" alt="arrow" width={14} height={14} />
            </div>
            <div className=  " font-semibold ">
              <Link href="Category" className="hover:underline">
                on Sale
              </Link>
            </div>
            <div className=" font-semibold">
              <Link href="#" className="hover:underline">
                New Arrivals
              </Link>
            </div>
            <div className="font-semibold">
              {" "}
              <Link href="#" className="hover:underline">
                Brands
              </Link>
            </div>
          </div>

          {/* Search bar and icons container */}

          {/* Search bar (only visible on larger screens) */}
          <div className="relative items-center bg-gray-100 p-3 rounded-[62px] w-96 h-12 hidden sm:flex ">
            {/* Search Icon */}
            <div className="absolute left-4 text-[#00000066] pt-1">
              <i className="fas fa-search text-lg"></i>
            </div>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full h-full bg-transparent pl-10 text-sm font-normal text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            />
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4 relative z-20 ">
            {/* Other Nav Links */}
            <Link href="/Cart">
              <div className="cursor-pointer">
                <Image
                  src="/Frame (3).png" // Replace with your cart icon image path
                  alt="cart"
                  width={24}
                  height={24}
                />
              </div>
            </Link>
            <Image src="/Frame (4).png" alt="icon" width={24} height={24} />
          </div>
        </div>
      </nav>
    </div>
  );
}
