import Image from "next/image";
import Footer from "@/app/Components/Footer";
export default function Category() {
  return (
    <div className="w-full h-auto">
      {/*first home and casual*/}
      <div className="w-[123px] h-[22px] top-[158px] left-[100px] gap-3 flex lg:ml-16 lg:mt-5 overflow-x-hidden">
        <div className="w-[63px] h-4 gap-1 flex ">
          <p className="w-[43px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60 ">
            Home
          </p>
          <Image src="/Frame (5).png" alt="sign" width={16} height={16} />
        </div>
        <p className="w-[48px] h-[22px] font-satoshi font-normal text-base leading-[21.6px]">
          Casual
        </p>
      </div>
      {/*filters and side data div for align them flex*/}
      <div className="flex">
        {/*filters*/}
        <div className="w-[295px] h-[1220px] top-[204px] left-[100px] rounded-[20px] border border-[#0000001A] py-5 px-6 gap-6 lg:ml-16 lg:mt-5 ">
          {/*filter heading and sign*/}
          <div className="w-[247px] h-[27px] justify-between flex">
            <h2 className="w-[57px] h-[27px] font-satoshi font-bold text-xl leading-[27px]">
              Filters
            </h2>
            <Image src="/Frame (13).png" alt="sign" width={24} height={24} />
          </div>
          {/*line*/}
          <div className="w-[247px] border rotate-0 border-[#0000001A] lg:mt-6"></div>

          {/*second part div content*/}
          <div className="w-[247px] h-[160px] gap-5">
            {/*first t shirts*/}
            <div className="w-[247px] h-4 justify-between flex lg:mt-5">
              <p className="w-[52px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60 whitespace-nowrap">
                T-shirts
              </p>
              <Image src="/Frame (14).png" alt="sign" width={16} height={16} />
            </div>
            {/*second shorts*/}
            <div className="w-[247px] h-4 justify-between flex lg:mt-5 lg:gap-12">
              <p className="w-[45px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                Shorts
              </p>
              <Image
                src="/Frame (14).png"
                alt="sign"
                width={16}
                height={16}
                className="lg:ml-[140px]"
              />
              .
            </div>
            {/*third shirt*/}
            <div className="w-[247px] h-4 justify-between flex lg:mt-5">
              <p className="w-[39px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                Shirts
              </p>
              <Image src="/Frame (14).png" alt="sign" width={16} height={16} />
            </div>
            {/*fourth hoodie*/}
            <div className="w-[247px] h-4 justify-between flex lg:mt-5">
              <p className="w-[51px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                Hoodie
              </p>
              <Image src="/Frame (14).png" alt="sign" width={16} height={16} />
            </div>
            {/*fifth jeans*/}
            <div className="w-[247px] h-4 justify-between flex lg:mt-5">
              <p className="w-[41px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                Jeans
              </p>
              <Image src="/Frame (14).png" alt="sign" width={16} height={16} />
            </div>
          </div>
          {/*line*/}
          <div className="w-[247px] border rotate-0 border-[#0000001A] lg:mt-8"></div>

          {/* Price Section */}
          <div className="relative w-[247px] h-[90px] flex flex-col gap-5 lg:mt-4">
            {/* Price and Sign */}
            <div className="flex justify-between items-center w-[247px] h-[27px]">
              {/* Price Label */}
              <h1 className="font-satoshi font-bold text-[20px] leading-[27px] text-black">
                Price
              </h1>

              {/* Sign (Image) */}
              <Image
                src="/Frame (9).png"
                alt="sign"
                width={16}
                height={16}
                className="rotate-180"
              />
            </div>

            {/* Below Part (Progress Bar and Labels) */}
            <div className="relative w-[247px] h-[43px]">
              {/* Gray Progress Bar Background */}
              <div className="absolute top-[28px] w-[247px] h-[6px] bg-gray-200 rounded-full"></div>

              {/* Black Progress Bar */}
              <div className="absolute top-[28px] left-[43.13px] w-[150.29px] h-[6px] bg-black rounded-full"></div>

              {/* Ellipse 4 (First Circle) */}
              <div className="absolute top-[20px] left-[41px] w-[20px] h-[20px] bg-black rounded-full"></div>

              {/* Ellipse 5 (Second Circle) */}
              <div className="absolute top-[20px] left-[187px] w-[20px] h-[20px] bg-black rounded-full"></div>

              {/* $50 Label */}
              <p className="absolute top-[45px] left-[37px] font-satoshi font-medium text-[14px] leading-[19px] text-black">
                $50
              </p>

              {/* $200 Label */}
              <p className="absolute top-[45px] left-[179px] font-satoshi font-medium text-[14px] leading-[19px] text-black text-center">
                $200
              </p>
            </div>
          </div>

          {/*line*/}
          <div className="w-[247px] border border-[#0000001A] rotate-0  lg:mt-10"></div>

          {/* Colors */}
          <div className="w-[247px] h-[137px] gap-5 lg:mt-6">
            {/* Header Section */}
            <div className="flex justify-between items-center w-full h-[27px]">
              <h1 className="font-satoshi font-bold text-xl leading-[27px]">
                Colors
              </h1>
              <Image
                src="/Frame (9).png"
                alt="sign"
                width={16}
                height={16}
                className="rotate-180"
              />
            </div>

            {/* Circle Colors first row */}
            <div className="flex justify-between items-center w-full h-[90px]">
              <div className="w-[37px] h-[37px] rounded-full bg-[#00C12B] border-[2px] border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#F50606] border border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#F5DD06] border border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#F57906] border border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#06CAF5] border border-black/20"></div>
            </div>
            {/* Circle Colors (Second Row) */}
            <div className="flex justify-between items-center w-full h-[37px]">
              <div className="w-[37px] h-[37px] rounded-full bg-[#063AF5] border-[2px] border-black/20">
                <Image
                  src="/Frame (16).png"
                  alt="sign"
                  width={16}
                  height={16}
                  className="lg:ml-2 lg:mt-2"
                />
              </div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#7D06F5] border border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#F506A4] border border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#FFFFFF] border border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#000000] border border-black/20"></div>
            </div>
          </div>
          {/*line*/}
          <div className="w-[247px] border border-[#0000001A] rotate-0 lg:mt-10 "></div>
          <div className="w-[247px] h-[274px] flex flex-col gap-5 lg:mt-6">
            {/* Header Section */}
            <div className="w-[247px] h-[27px] flex justify-between items-center">
              <h1 className="w-[38px] h-[27px] font-satoshi font-bold text-xl leading-[27px]">
                Size
              </h1>
              <Image
                src="/Frame (9).png"
                alt="sign"
                width={16}
                height={16}
                className="rotate-180"
              />
            </div>

            {/* Button Section */}
            <div className="w-[247px] h-[227px] flex flex-wrap gap-2 ">
              {/* XX-Small */}
              <div className="w-24 h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[56px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60 whitespace-nowrap">
                  XX-Small
                </button>
              </div>
              {/* X-Small */}
              <div className="w-[88px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[48px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60 whitespace-nowrap">
                  X-Small
                </button>
              </div>
              {/* Small */}
              <div className="w-[74px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[34px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60">
                  Small
                </button>
              </div>
              {/* Medium */}
              <div className="w-[90px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[50px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60">
                  Medium
                </button>
              </div>
              {/* Large */}
              <div className="w-[76px] h-[39px] bg-black rounded-[62px] flex justify-center items-center">
                <button className="w-[36px] h-[19px] font-satoshi font-medium text-base leading-[19px] text-white">
                  Large
                </button>
              </div>
              {/* X-Large */}
              <div className="w-[89px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[49px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60 whitespace-nowrap">
                  X-Large
                </button>
              </div>
              {/* XX-Large */}
              <div className="w-[98px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[58px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60 whitespace-nowrap">
                  XX-Large
                </button>
              </div>
              {/* 3X-Large */}
              <div className="w-[97px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[57px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60 whitespace-nowrap">
                  3X-Large
                </button>
              </div>
              {/* 4X-Large */}
              <div className="w-[98px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[58px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60 whitespace-nowrap">
                  4X-Large
                </button>
              </div>
            </div>
          </div>
          {/*line*/}
          <div className="w-[247px] border border-[#0000001A]  lg:mt-6"></div>
          {/*dress*/}
          <div className="w-[247px] h-[171px] gap-5 lg:mt-5">
            {/*dress by style*/}
            <div className="w-[247px] h-[27px] justify-between flex">
              <h1 className="w-[103px] h-[27px] font-satoshi font-bold text-xl leading-[27px] text-black whitespace-nowrap">
                Dress Style
              </h1>
              <Image
                src="/Frame (9).png"
                alt="sign"
                width={16}
                height={16}
                className="rotate-180"
              />
            </div>
            {/*below*/}
            <div className="w-[247px] h-[124px] gap-5">
              {/*casual*/}
              <div className="w-[247px] h-4 justify-between flex lg:mt-3">
                <p className="w-12 h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                  Casual
                </p>
                <Image src="/Frame (5).png" alt="sign" width={16} height={16} />
              </div>
              {/*formal*/}
              <div className="w-[247px] h-4 justify-between flex lg:mt-3">
                <p className="w-[49px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                  Formal
                </p>
                <Image src="/Frame (5).png" alt="sign" width={16} height={16} />
              </div>
              {/*party*/}
              <div className="w-[247px] h-4 justify-between flex lg:mt-3">
                <p className="w-9 h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                  Party
                </p>
                <Image src="/Frame (5).png" alt="sign" width={16} height={16} />
              </div>
              {/*Gym*/}
              <div className="w-[247px] h-4 justify-between flex lg:mt-3">
                <p className="w-[33px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                  Gym
                </p>
                <Image src="/Frame (5).png" alt="sign" width={16} height={16} />
              </div>
            </div>
            {/*last buttton*/}
            <div className=" absolute w-[247px] h-12 rounded-[62px] py-4 px-[54px] gap-3 bg-black ">
              <button className="flex justify-center items-center w-full h-full font-satoshi font-medium text-base leading-[18.9px] text-white whitespace-nowrap text-center">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
        {/*right part*/}

        <div className="flex flex-col lg:mt-6 lg:ml-5">
          <div className="flex flex-row">
            <h1 className="w-[101px] h-[43px] top-[204px] left-[415px] font-satoshi font-bold text-[32px] leading-[43.2px]">
              Casual
            </h1>
            <div className="w-[369px] h-4 top-[222px] left-[944px] gap-3 flex justify-end lg:ml-52 lg:mt-3">
              <p className="w-[209px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60 whitespace-nowrap">
                Showing 1-10 of 100 Products
              </p>
            </div>
            <div className="w-[175px] h-4 gap-1 flex flex-row items-end lg:mt-2 lg:ml-4">
              {/* Sort by: Most Popular */}
              <div className="w-[155px] h-3 font-satoshi font-medium text-base leading-[22px] text-black/60">
                Sort by:
              </div>

              {/* Most Popular */}
              <div className="w-[155px] h-3 font-satoshi font-medium text-base leading-[22px] text-black whitespace-nowrap">
                Most Popular
              </div>

              <Image
                src="/Frame (17).png"
                alt="sign"
                width={16}
                height={16}
                className="relative top-1"
              />
            </div>
          </div>

          {/* New content below the existing one (Images aligned horizontally under "Casual") */}
          <div className="flex gap-3 mt-4 justify-start">
            {/* Example Image 1 */}
            <div className="flex flex-col">
              <div className="w-[295px] h-[298px] top-[263px] left-[415px] rounded-[20px] overflow-hidden">
                <Image
                  src="/image 8 (2).png"
                  alt="Clothes 1"
                  width={294}
                  height={441}
                />
              </div>
              <h1 className="w-[227px] h-[27px] top-[577px] left-[415px] font-satoshi font-bold text-xl leading-[27px] whitespace-nowrap mt-5">
                Gradient Graphic T-shirt
              </h1>
              {/* stars and rating*/}
              <div className="w-[193px] h-[30px] top-[278px] left-[750px] flex items-center   ">
                {/* Stars */}
                <div className="w-[139px] h-[28px] flex gap-[2px] overflow-hidden">
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  {/* Half Star */}
                  <span
                    className="w-[22.58px] h-[30px] text-[#FFC633] text-2xl"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                  >
                    ★
                  </span>
                </div>
                {/* Rating Text */}
                <div className="flex items-center mt-2 mr-14">
                  <span className="text-[14px] font-satoshi text-black ">
                    3.5
                  </span>
                  <span className="text-[14px] font-satoshi text-black opacity-60">
                    /5
                  </span>
                </div>
              </div>
              {/*pricing*/}
              <div className="flex flex-row  mt-2">
                <div className="w-[176px] h-[43px] top-[317px] left-[750px] gap-1 flex">
                  {/* $260 */}
                  <div className="w-[81px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black">
                    $145
                  </div>
                </div>
              </div>
            </div>

            {/* Example Image 2 */}
            <div className="flex flex-col">
              <div className="w-[295px] h-[298px] top-[263px] left-[730px] rounded-[20px] overflow-hidden">
                <Image
                  src="/image 9 (2).png"
                  alt="Clothes 2"
                  width={296}
                  height={444}
                />
              </div>
              <h1 className="w-[231px] h-[27px] top-[577px] left-[730px] font-satoshi font-bold text-xl leading-[27px] whitespace-nowrap mt-5">
                Polo with Tipping Details
              </h1>
              {/* stars and rating*/}
              <div className="w-[193px] h-[30px] top-[278px] left-[750px] flex items-center   ">
                {/* Stars */}
                <div className="w-[139px] h-[28px] flex gap-[2px] overflow-hidden">
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  {/* Half Star */}
                  <span
                    className="w-[22.58px] h-[30px] text-[#FFC633] text-2xl"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                  >
                    ★
                  </span>
                </div>
                {/* Rating Text */}
                <div className="flex items-center mt-2 mr-12">
                  <span className="text-[14px] font-satoshi text-black ">
                    4.5
                  </span>
                  <span className="text-[14px] font-satoshi text-black opacity-60">
                    /5
                  </span>
                </div>
              </div>
              {/*pricing*/}
              <div className="flex flex-row  mt-2">
                <div className="w-[176px] h-[43px] top-[317px] left-[750px] gap-1 flex">
                  {/* $260 */}
                  <div className="w-[81px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black">
                    $180
                  </div>
                </div>
              </div>
            </div>

            {/* Example Image 3 */}
            <div className="flex flex-col">
              <div className="w-[296px] h-[298px] top-[263px] left-[1045px] rounded-[20px] overflow-hidden">
                <Image
                  src="/image 10 (2).png"
                  alt="Clothes 3"
                  width={296}
                  height={444}
                />
              </div>
              <h1 className="w-[190px] h-[27px] top-[577px] left-[1045px] font-satoshi font-bold text-xl leading-[27px] whitespace-nowrap mt-5">
                Black Striped T-shirt
              </h1>
              {/* stars and rating*/}
              <div className="w-[193px] h-[30px] top-[278px] left-[750px] flex items-center   ">
                {/* Stars */}
                <div className="w-[139px] h-[28px] flex gap-[1px] overflow-hidden">
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                </div>

                {/* Rating Text */}
                <div className="flex items-center mt-2 mr-6">
                  <span className="text-[14px] font-satoshi text-black ">
                    5.0
                  </span>
                  <span className="text-[14px] font-satoshi text-black opacity-60">
                    /5
                  </span>
                </div>
              </div>
              {/*pricing*/}
              <div className="flex flex-row  mt-2">
                <div className="w-[176px] h-[43px] top-[317px] left-[750px] gap-1 flex">
                  {/* $260 */}
                  <div className="w-[81px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black">
                    $120
                  </div>
                  {/* $260 (strikethrough text) */}
                  <div className="w-[83px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black/30 line-through">
                    $150
                  </div>
                </div>
                <div className="flex justify-center items-center px-[14px] py-[6px] gap-0 left-[938px] w-[72px] top-[321px] h-[34px] bg-[rgba(255,51,51,0.1)] rounded-[62px]">
                  {/* -40% */}
                  <div className="w-[44px] h-[22px] text-[16px] font-satoshi font-medium leading-[21.6pxpx] text-[#FF3333] ">
                    -30%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 w-[915px] h-auto left-[416px] -mt-8">
            {/* Example Image 4 */}
            <div className="flex flex-col">
              <div className="w-[295px] h-[298px] left-[416px] rounded-[20px] lg:mt-14 overflow-hidden">
                <Image
                  src="/image 8.png"
                  alt="Clothes 4"
                  width={296}
                  height={402}
                />
              </div>
              <h1 className="w-[150px] h-[27px] top-[1021px] left-[416px] font-satoshi font-bold text-xl leading-[27px] whitespace-nowrap mt-5">
                Skinny Fit Jeans
              </h1>
              {/* stars and rating*/}
              <div className="w-[126.2px] h-[30px] top-[1056px] left-[416px] gap-[13px] flex items-center   ">
                {/* Stars */}
                <div className="w-[139px] h-[28px] flex gap-[1px]">
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>

                  {/* Half Star */}
                  <span
                    className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl"
                    style={{ clipPath: "inset(0 60% 0 0)" }}
                  >
                    ★
                  </span>
                </div>

                {/* Rating Text */}
                <div className="flex items-center mt-3 mr-6">
                  <span className="text-[14px] font-satoshi text-black ">
                    3.5
                  </span>
                  <span className="text-[14px] font-satoshi text-black opacity-60">
                    /5
                  </span>
                </div>
              </div>
              {/*pricing*/}
              <div className="flex flex-row  mt-2">
                <div className="w-[176px] h-[43px] top-[317px] left-[750px] gap-1 flex">
                  {/* $260 */}
                  <div className="w-[81px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black">
                    $240
                  </div>
                  {/* $260 (strikethrough text) */}
                  <div className="w-[83px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black/30 line-through">
                    $260
                  </div>
                </div>
                <div className="flex justify-center items-center px-[14px] py-[6px] gap-0 left-[938px] w-[72px] top-[321px] h-[34px] bg-[rgba(255,51,51,0.1)] rounded-[62px]">
                  {/* -40% */}
                  <div className="w-[44px] h-[22px] text-[16px] font-satoshi font-medium leading-[21.6pxpx] text-[#FF3333] ">
                    -20%
                  </div>
                </div>
              </div>
            </div>
            {/* Example Image 5 */}
            <div className="flex flex-col">
              <div className="w-[295px] h-[298px] top-[707px] left-[731px] rounded-[20px] overflow-hidden mt-14">
                <Image
                  src="/image 9.png"
                  alt="Clothes 4"
                  width={296}
                  height={444}
                />
              </div>
              <h1 className="w-[151px] h-[27px] top-[1021px] left-[731px] font-satoshi font-bold text-xl leading-[27px] whitespace-nowrap mt-5">
                Checkered Shirt
              </h1>
              {/* stars and rating*/}
              <div className="w-[126.2px] h-[30px] top-[1056px] left-[416px] gap-[13px] flex items-center   ">
                {/* Stars */}
                <div className="w-[139px] h-[28px] flex gap-[1px] ">
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>

                  {/* Half Star */}
                  <span
                    className="w-[22.58px] h-[30px] text-[#FFC633] text-2xl"
                    style={{ clipPath: "inset(0 60% 0 0)" }}
                  >
                    ★
                  </span>
                </div>

                {/* Rating Text */}
                <div className="flex items-center mt-3 mr-6">
                  <span className="text-[14px] font-satoshi text-black ">
                    4.5
                  </span>
                  <span className="text-[14px] font-satoshi text-black opacity-60">
                    /5
                  </span>
                </div>
              </div>
              {/*pricing*/}
              <div className="flex flex-row  mt-2">
                <div className="w-[176px] h-[43px] top-[317px] left-[750px] gap-1 flex">
                  {/* $260 */}
                  <div className="w-[81px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black">
                    $180
                  </div>
                </div>
              </div>
            </div>
            {/* Example Image 6 */}
            <div className="flex flex-col">
              <div className="w-[295px] h-[298px] top-[707px] left-[1046px] rounded-[20px] overflow-hidden mt-14">
                <Image
                  src="/image 10.png"
                  alt="Clothes 4"
                  width={296}
                  height={444}
                />
              </div>
              <h1 className="w-[199px] h-[27px] top-[1021px] left-[1046px] font-satoshi font-bold text-xl leading-[27px] whitespace-nowrap mt-5">
                Sleeve Striped T-shirt
              </h1>
              {/* stars and rating*/}
              <div className="w-[126.2px] h-[30px] top-[1056px] left-[416px] gap-[13px] flex items-center   ">
                {/* Stars */}
                <div className="w-[139px] h-[28px] flex gap-[1px] ">
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  {/* Half Star */}
                  <span
                    className="w-[22.58px] h-[30px] text-[#FFC633] text-2xl"
                    style={{ clipPath: "inset(0 60% 0 0)" }}
                  >
                    ★
                  </span>
                </div>
                {/* Rating Text */}
                <div className="flex items-center mt-3 mr-6">
                  <span className="text-[14px] font-satoshi text-black ">
                    4.5
                  </span>
                  <span className="text-[14px] font-satoshi text-black opacity-60">
                    /5
                  </span>
                </div>
              </div>
              {/*pricing*/}
              <div className="flex flex-row  mt-2">
                <div className="w-[176px] h-[43px] top-[317px] left-[750px] gap-1 flex">
                  {/* $260 */}
                  <div className="w-[81px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black">
                    $130
                  </div>
                  {/* $260 (strikethrough text) */}
                  <div className="w-[83px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black/30 line-through">
                    $160
                  </div>
                </div>
                <div className="flex justify-center items-center px-[14px] py-[6px] gap-0 left-[938px] w-[72px] top-[321px] h-[34px] bg-[rgba(255,51,51,0.1)] rounded-[62px]">
                  {/* -40% */}
                  <div className="w-[44px] h-[22px] text-[16px] font-satoshi font-medium leading-[21.6pxpx] text-[#FF3333] ">
                    -30%
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**/}
          <div className="w-[925px] gap-3 h-auto  left-[415px] flex -mt-8">
            {/* Example Image 7 */}
            <div className="flex flex-col">
              <div className="w-[295px] h-[298px] top-[1151px] left-[415px] rounded-[20px] lg:mt-14 overflow-hidden">
                <Image
                  src="/image 7 (1).png"
                  alt="Clothes 4"
                  width={296}
                  height={444}
                />
              </div>
              <h1 className="w-[194px] h-[27px] top-[1465px] left-[415px] font-satoshi font-bold text-xl leading-[27px] whitespace-nowrap mt-5">
                Vertical Striped Shirt
              </h1>
              {/* stars and rating*/}
              <div className="w-[126.2px] h-[30px] top-[1056px] left-[416px] gap-[13px] flex items-center   ">
                {/* Stars */}
                <div className="w-[139px] h-[28px] flex gap-[1px]">
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[30px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                </div>
                {/* Rating Text */}
                <div className="flex items-center mt-3 mr-6">
                  <span className="text-[14px] font-satoshi text-black ">
                    5.0
                  </span>
                  <span className="text-[14px] font-satoshi text-black opacity-60">
                    /5
                  </span>
                </div>
              </div>
              {/*pricing*/}
              <div className="flex flex-row  mt-2">
                <div className="w-[176px] h-[43px] top-[317px] left-[750px] gap-1 flex">
                  {/* $260 */}
                  <div className="w-[81px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black">
                    $212
                  </div>
                  {/* $260 (strikethrough text) */}
                  <div className="w-[83px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black/30 line-through">
                    $232
                  </div>
                </div>
                <div className="flex justify-center items-center px-[14px] py-[6px] gap-0 left-[938px] w-[72px] top-[321px] h-[34px] bg-[rgba(255,51,51,0.1)] rounded-[62px]">
                  {/* -40% */}
                  <div className="w-[44px] h-[22px] text-[16px] font-satoshi font-medium leading-[21.6pxpx] text-[#FF3333] ">
                    -20%
                  </div>
                </div>
              </div>
            </div>
            {/* Example Image 8 */}
            <div className="flex flex-col">
              <div className="w-[295px] h-[298px] top-[1151px] left-[730px] rounded-[20px] lg:mt-14 overflow-hidden">
                <Image
                  src="/image 8 (1).png"
                  alt="Clothes 4"
                  width={294}
                  height={441}
                  className="left-[1px] top-[-71px]"
                />
              </div>
              <h1 className="w-[226px] h-[27px] top-[1465px] left-[730px] font-satoshi font-bold text-xl leading-[27px] whitespace-nowrap mt-5">
                Courage Graphic T-shirt
              </h1>
              {/* stars and rating*/}
              <div className="w-[126.2px] h-[30px] top-[1056px] left-[416px] gap-[13px] flex items-center   ">
                {/* Stars */}
                <div className="w-[139px] h-[28px] flex gap-[1px]">
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                </div>

                {/* Rating Text */}
                <div className="flex items-center mt-3 mr-6">
                  <span className="text-[14px] font-satoshi text-black ">
                    4.0
                  </span>
                  <span className="text-[14px] font-satoshi text-black opacity-60">
                    /5
                  </span>
                </div>
              </div>
              {/*pricing*/}
              <div className="flex flex-row  mt-2">
                <div className="w-[176px] h-[43px] top-[317px] left-[750px] gap-1 flex">
                  {/* $145 */}
                  <div className="w-[81px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black">
                    $145
                  </div>
                </div>
              </div>
            </div>
            {/* Example Image 9 */}
            <div className="flex flex-col">
              <div className="w-[295px] h-[298px] top-[1151px] left-[1045px] rounded-[20px] lg:mt-14 overflow-hidden">
                <Image
                  src="/image 9 (1).png"
                  alt="Clothes 4"
                  width={296}
                  height={444}
                  className="top-[-73px]"
                />
              </div>
              <h1 className="w-[239px] h-[27px] top-[1465px] left-[1045px] font-satoshi font-bold text-xl leading-[27px] whitespace-nowrap mt-5">
                Loose Fit Bermuda Shorts
              </h1>
              {/* stars and rating*/}
              <div className="w-[126.2px] h-[30px] top-[1056px] left-[416px] gap-[13px] flex items-center   ">
                {/* Stars */}
                <div className="w-[139px] h-[28px] flex gap-[1px] overflow-hidden">
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                  <span className="w-[24.71px] h-[26px] text-[#FFC633] text-2xl">
                    ★
                  </span>
                </div>

                {/* Rating Text */}
                <div className="flex items-center mt-3 mr-6">
                  <span className="text-[14px] font-satoshi text-black ">
                    3.0
                  </span>
                  <span className="text-[14px] font-satoshi text-black opacity-60">
                    /5
                  </span>
                </div>
              </div>
              {/*pricing*/}
              <div className="flex flex-row  mt-2">
                <div className="w-[176px] h-[43px] top-[317px] left-[750px] gap-1 flex">
                  {/* $145 */}
                  <div className="w-[81px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black">
                    $80
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*line*/}
          <div className="w-[925px] top-[1591px] left-[415px] border rotate-0 mt-8"></div>

          <div className="flex flex-row items-center justify-between w-[920px] h-auto absolute  top-[1630px] gap-[216px] ">
            {/* Previous Button */}
            <button className="flex flex-row items-center justify-center w-[133px] h-[36px] rounded-lg border border-gray-300 bg-white px-[14px] py-[8px] gap-[8px]">
              <Image src="/arrow-left.png" alt="arrow" width={20} height={20} />
              <span className="font-satoshi font-medium text-[14px] leading-[20px] text-black">
                Previous
              </span>
            </button>

            <div className="flex space-x-2">
              {/* Pagination numbers */}
              <button className="w-10 h-10 flex justify-center items-center bg-gray-100 rounded-lg text-black font-medium">
                1
              </button>
              <button className="w-10 h-10 flex justify-center items-center  rounded-lg text-gray-500">
                2
              </button>
              <button className="w-10 h-10 flex justify-center items-center  rounded-lg text-gray-500">
                3
              </button>
              <button className="w-10 h-10 flex justify-center items-center  rounded-lg text-gray-500">
                ...
              </button>
              <button className="w-10 h-10 flex justify-center items-center rounded-lg text-gray-500">
                4
              </button>
              <button className="w-10 h-10 flex justify-center items-center  rounded-lg text-gray-500">
                5
              </button>

              <button className="w-10 h-10 flex justify-center items-center  rounded-lg text-gray-500">
                10
              </button>
            </div>

            {/* Next Button */}
            <button className="flex flex-row items-center justify-center w-[86px] h-[36px] rounded-lg border border-gray-300 bg-white px-[14px] py-[8px] gap-[8px]">
              <span className="font-satoshi font-medium text-[14px] leading-[20px] text-black w-[30px] h-[20px]">
                Next
              </span>
              <Image
                src="/arrow-right.png"
                alt="arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
