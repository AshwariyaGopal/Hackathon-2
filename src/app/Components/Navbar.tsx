import Image from "next/image";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Navbar() {
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
      <nav className="bg-white border-b border-gray-300 overflow-hidden h-20">
        <div className="flex justify-between items-center mx-auto px-10 py-4 max-w-screen-xl ">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-xl font-bold font-integral-cf">SHOP.CO</span>
          </Link>

          {/* Navbar links */}
          <div className="hidden md:flex items-center space-x-6 text-black ">
           <div className="font-satoshi font-normal flex gap-1"> <Link href="/ProductDetail" className="hover:underline">Shop</Link>
           <Image src = "/Frame (17).png" alt= "arrow" width={14} height={14}/></div>
            <div className="font-satoshi font-normal"><Link href="Category" className="hover:underline">on Sale</Link></div>
            <div className="font-satoshi font-normal"><Link href="#" className="hover:underline">New Arrivals</Link></div>
            <div className="font-satoshi font-normal"> <Link href="#" className="hover:underline">Brands</Link></div>
          </div>

          {/* Search bar and icons container */}
          <div className="flex items-center space-x-6 ">
            {/* Search bar */}
            <div className="relative flex items-center space-x-3 bg-gray-100 p-3 rounded-[62px] w-96 h-12">
               {/* Search Icon */}
          <div className="absolute left-4 text-[#00000066] pt-1">
            <i className="fas fa-search text-lg"></i>
          </div>
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full h-full bg-transparent pl-10 text-sm font-normal text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
              />
              {/* <svg
                className="absolute left-3 top-3 w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg> */}
            </div>

            {/* Icons after search bar */}
            {/* <div className="flex items-center space-x-4">
              <Image src="/Frame 5.png" alt="icon" width={62} height={24} />
              {/* Add more icons here if needed */}
            
             {/* Cart Icon */}
        <div className="flex items-center space-x-4">
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
          <Image src = "/Frame (4).png" alt= "icon" width={24} height={24}/>
        </div>
          </div>
        </div>
      </nav>
      {/* <div className="absolute w-[1240px] h-0 left-[100px] top-[134px] border border-[rgba(0,0,0,0.1)]"></div> */}

    </div>
  );
}
