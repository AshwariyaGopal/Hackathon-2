import Image from "next/image";

export default function Home() {
  return (
    <section className="relative bg-[#F2F0F1] w-[1440px] h-[663px]  ">
      {" "}
      {/* Reduced padding */}
      <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        {/* Text Content */}
        <div className="mr-auto place-self-center lg:col-span-7 relative z-10 flex flex-col justify-center mt-[-100px] lg:pl-8 lg:pr-8 text-left ">
          {" "}
          {/* Reduced margin */}
          <h1 className="w-[577px] h-[173px] font-satoshi font-extrabold text-[64px] leading-[64px]  mt-14 ">
            {" "}
            {/* Adjusted text size */}
            FIND CLOTHES <br />
            THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="w-[545px] h-[33px] top-[600px] left-[100px] font-normal  text-base text-black/60 font-satoshi leading-[22px] mt-8">
            {" "}
            {/* Reduced font and margin */}
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="flex gap-3 justify-start mt-10">
            {" "}
            {/* Reduced gap */}
            <button
              className="px-4 py-2 bg-black text-white rounded-full w-[180px] h-12"
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:mt-0 lg:col-span-5 lg:flex justify-center items-center relative  overflow-hidden">
          {" "}
          {/* Reduced offset */}
          <div className="relative w-full h-[500px] ">
            <Image
              src="/Rectangle 2 (1).png"
              alt="mockup"
              width={1300} /* Adjusted width */
              height={530} /* Adjusted height */
              className="object-cover rounded-lg shadow-md w-full h-full "
              style={{ objectPosition: "center right" }}
            />
            {/* Small Vector (right) */}
            <Image
              src="/Vector (4).png"
              alt="vector"
              className="absolute right-[85%] top-[40%] transform -translate-x-1/2 -translate-y-1/2"
              width={48}
              height={48}
            />
            {/* Large Vector (left) */}
            <Image
              src="/Vector (5).png"
              alt="Decorative Vector"
              className="absolute left-[90%] top-[20%] transform -translate-x-1/2 -translate-y-1/2"
              width={84}
              height={84}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
