import Image from "next/image";

export default function Arrivals() {
  return (
    <div className=" w-[1440px] h-[1250px] flex flex-col items-center bg-white bg-fixed">
      {/* Heading */}
      <div className="">
        <h1 className="font-integral-cf font-bold text-5xl leading-[57.6px] text-center">
          NEW ARRIVALS
        </h1>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-8 mt-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center gap-4 w-[295px]">
          <div className="w-full h-[298px] rounded-[20px] bg-[#F0EEED] overflow-hidden">
            <Image src="/image 7.png" alt="T shirt" width={296} height={444} />
          </div>
          <div className="text-center">
            <h2 className="font-satoshi font-bold text-[20px] leading-[27px] text-black mr-2">
              T-SHIRT WITH TAPE DETAILS
            </h2>
            {/*stars part*/}
            <div className="w-[104px] h-[18.49px] flex justify-center items-center gap-[5.31px] mt-2 ml-4">
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <div className="relative text-lg w-[18.49px] h-[18.49px]">
                {/* Half Star */}
                <span
                  className="w-[18.49px] h-[18.49px] text-[#FFC633] text-lg"
                  style={{ clipPath: "inset(0 50% 0 0)" }}
                >
                  ★
                </span>
              </div>
              {/*rating*/}
              <div className="w-[33px] h-[19px] mt-2 ml-2">
                <span className="ml-2 text-[14px] font-satoshi text-black">
                  4.5
                </span>
                <span
                  className="text-[14px] font-satoshi text-black"
                  style={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  /5
                </span>
              </div>
            </div>
            {/*price*/}
            <div className="mt-2 text-[24px] font-satoshi font-bold leading-[32px] text-black mr-56 pt-2">
              $120
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center gap-4 w-[295px]">
          <div className="w-full h-[298px] rounded-[20px] bg-[#F0EEED] overflow-hidden">
            <Image src="/image 8.png" alt="Jeans" width={296} height={444} />
          </div>
          <div className="text-center">
            <h2 className="font-satoshi font-bold text-[20px] leading-[27px] text-black mr-24">
              SKINNY FIT JEANS
            </h2>
            {/*stars */}
            <div className="w-[104px] h-[25px] flex justify-center items-center gap-[5.31px] mt-2 ml-4">
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>

              <span
                className="w-[18.49px] h-[23px] text-[#FFC633] text-xl mt-1"
                style={{ clipPath: "inset(0 40% 0 0)" }}
              >
                ★
              </span>
              {/*rating*/}
              <div className="w-[33px] h-[19px] ml-5 mt-2">
                <span className="ml-2 text-[14px] font-satoshi text-black">
                  3.5
                </span>
                <span
                  className="text-[14px] font-satoshi text-black"
                  style={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  /5
                </span>
              </div>
              {/*price*/}
              <div className="absolute flex items-center gap-10 w-[200px] h-[32px] left-[415px] top-[1350px] pt-12 ml-1">
                {/* $240 */}
                <div className="w-[61px] h-[32px] text-[24px] font-satoshi font-bold leading-[32px] text-black">
                  $240
                </div>

                {/* $260 (strikethrough text) */}
                <div className="w-[61px] h-[32px] text-[24px] font-satoshi font-bold leading-[32px] text-black/40 line-through">
                  $260
                </div>

                {/* Frame 42 */}
                <div className="flex justify-center items-center px-[14px] py-[6px] gap-[12px] w-[58px] h-[28px] bg-[rgba(255,51,51,0.1)] rounded-full">
                  {/* -20% */}
                  <div className="w-[31px] h-[16px] text-[12px] font-satoshi font-medium leading-[16px] text-[#FF3333]">
                    -20%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center gap-4 w-[295px]">
          <div className="w-full h-[298px] rounded-[20px] bg-[#F0EEED] overflow-hidden">
            <Image src="/image 9.png" alt="Shirt" width={296} height={444} />
          </div>
          <div className="">
            <h2 className="font-satoshif font-bold text-[20px] leading-[27px] text-black mr-24">
              CHECKERED SHIRT
            </h2>
            <div className="w-[104px] h-[24px] flex justify-center items-center gap-[5.31px] mt-2 ml-4">
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              {/* Half Star */}
              <span
                className="w-[18.49px] h-[26px] text-[#FFC633] text-xl mt-2"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              >
                ★
              </span>
              <div className="w-[33px] h-[19px] ml-1 mt-2">
                <span className="ml-2 text-[14px] font-satoshi text-black">
                  4.5
                </span>
                <span
                  className="text-[14px] font-satoshi text-black"
                  style={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  /5
                </span>
              </div>
            </div>
            {/*price*/}
            <div className="mt-2 text-[24px] font-satoshi font-bold leading-[32px] text-black mr-48 pt-2">
              $180
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center gap-4 w-[295px]">
          <div className="w-full h-[298px] rounded-[20px] bg-[#F0EEED] overflow-hidden">
            <Image src="/image 10.png" alt="T shirt" width={296} height={444} />
          </div>
          <div className="text-center">
            <h2 className="font-satoshi font-bold text-[20px] leading-[27px] text-black mr-6">
              SLEEVE STRIPED T-SHIRT
            </h2>
            <div className="w-[104px] h-[18.49px] flex justify-center items-center gap-[5.31px] mt-2 ml-4">
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-lg">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-lg">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-lg">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-lg">
                ★
              </span>
              <div className="relative text-lg w-[18.49px] h-[18.49px]">
                <span className="absolute inset-0 text-gray-300">★</span>
                <span
                  className="absolute inset-0 text-yellow-400"
                  style={{ width: "50%" }}
                >
                  ★
                </span>
              </div>
              {/*ratign*/}
              <div className="w-[33px] h-[19px] ml-5 mt-2">
                <span className="ml-2 text-[14px] font-satoshi text-black">
                  4.5
                </span>
                <span
                  className="text-[14px] font-satoshi text-black"
                  style={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  /5
                </span>
              </div>
            </div>
            {/*price*/}
            <div className="abosolute flex items-center w-[189px] h-8 top-[1480px] left-[1045px] gap-[10px] mt-4 ">
              <div className=" text-[24px] font-satoshi font-bold leading-[32px] text-black ">
                $130
              </div>
              {/* $260 (strikethrough text) */}
              <div className="w-[61px] h-[32px] text-[24px] font-satoshi font-bold leading-[32px] text-black/40 line-through ml-9">
                $160
              </div>

              {/* Frame 42 */}
              <div className="flex justify-center items-center px-[14px] py-[6px] gap-[12px] w-[58px] h-[28px] bg-[rgba(255,51,51,0.1)] rounded-full">
                {/* -20% */}
                <div className="w-[31px] h-[16px] text-[12px] font-satoshi font-medium leading-[16px] text-[#FF3333]">
                  -30%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*BUTTON*/}
      <div className="w-[218px] h-[52px] top-[1548px] left-[611px] rounded-[62px] border-[1px] py-4 px-[54px] flex items-center justify-center mt-10">
        <button className="font-satoshi font-medium text-base leading-[21.6px] text-black">
          View All
        </button>
      </div>
      {/*border line*/}
      <div className="absolute w-[1240px] h-0 left-1/2 top-[1600px] -translate-x-1/2 border border-[rgba(0,0,0,0.1)] -mt-6"></div>

      {/*SECOND PART*/}
      {/*HEADING*/}
      <div className="w-[346px] h-[58px] top-[1728px] left-[546px] mt-32 ml-24">
        <h1 className="font-integral-cf font-bold text-5xl leading-[57.6px] align-middle">
          Top Selling
        </h1>
      </div>

      {/*cards section*/}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center gap-4 w-[295px]">
          <div className="w-full h-[298px] rounded-[20px] bg-[#F0EEED] overflow-hidden">
            <Image
              src="/image 7 (1).png"
              alt="shirt"
              width={296}
              height={444}
            />
          </div>
          <div className="text-center">
            <h2 className="font-satoshi font-bold text-[20px] leading-[27px] text-black mr-5">
              VERTICAL STRIPED SHIRT
            </h2>
            <div className="w-[104px] h-[18.49px] flex justify-center items-center gap-[5.31px]  ml-6 ">
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <div className=" flex items-center justify-center w-[33px] h-[19px] ml-6 mt-4">
                <span className="ml-2 text-[14px] font-satoshi text-black">
                  5.0
                </span>
                <span
                  className="text-[14px] font-satoshi text-black"
                  style={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  /5
                </span>
              </div>
            </div>
            {/*price*/}
            <div className="abosolute flex items-center w-[189px] h-8 top-[1480px] left-[1045px] gap-[10px] mt-3 ">
              <div className=" text-[24px] font-satoshi font-bold leading-[32px] text-black ">
                $212
              </div>
              {/* $260 (strikethrough text) */}
              <div className="w-[61px] h-[32px] text-[24px] font-satoshi font-bold leading-[32px] text-black/40 line-through ml-2">
                $232
              </div>
              {/* Frame 42 */}
              <div className="flex justify-center items-center px-[14px] py-[6px] gap-[12px] w-[58px] h-[28px] bg-[rgba(255,51,51,0.1)] rounded-full">
                {/* -20% */}
                <div className="w-[31px] h-[16px] text-[12px] font-satoshi font-medium leading-[16px] text-[#FF3333]">
                  -20%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*card 2*/}

        <div className="flex flex-col items-center gap-4 w-[295px]">
          <div className="w-full h-[298px] rounded-[20px] bg-[#F0EEED] overflow-hidden">
            <Image
              src="/image 8 (1).png"
              alt="T shirt"
              width={296}
              height={444}
            />
          </div>
          <div className="text-center">
            <h2 className="font-satoshi font-bold text-[20px] leading-[27px] text-black">
              COURAGE GRAPHIC T-SHIRT
            </h2>
            <div className="w-[104px] h-[18.49px] flex justify-center items-center gap-[5.31px]  ml-5">
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>

              <div className="w-[33px] h-[19px] ml-5 mt-2">
                <span className="ml-2 text-[14px] font-satoshi text-black">
                  4.0
                </span>
                <span
                  className="text-[14px] font-satoshi text-black"
                  style={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  /5
                </span>
              </div>
            </div>

            <div className="mt-3 mr-56 text-[24px] font-satoshi font-bold leading-[32px] text-black">
              $145
            </div>
          </div>
        </div>

        {/*card 3*/}
        <div className="flex flex-col items-center gap-4 w-[295px]">
          <div className="w-full h-[298px] rounded-[20px] bg-[#F0EEED] overflow-hidden">
            <Image
              src="/image 9 (1).png"
              alt="short"
              width={296}
              height={444}
            />
          </div>
          <div className="text-center">
            <h2 className="font-satoshi font-bold text-[20px] leading-[27px] text-black whitespace-nowrap">
              LOOSE FIT BERMUDA SHORTS
            </h2>
            <div className="w-[104px] h-[18.49px] flex justify-center items-center gap-[5.31px] mt-2 ml-5">
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>

              <div className="w-[33px] h-[19px] mr-11 mt-2">
                <span className="ml-2 text-[14px] font-satoshi text-black">
                  3.0
                </span>
                <span
                  className="text-[14px] font-satoshi text-black"
                  style={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  /5
                </span>
              </div>
            </div>
            <div className="mt-2 mr-64 text-[24px] font-satoshi font-bold leading-[32px] text-black">
              $80
            </div>
          </div>
        </div>
        {/*card 4*/}
        <div className="flex flex-col items-center gap-4 w-[295px]">
          <div className="w-full h-[298px] rounded-[20px] bg-[#F0EEED] overflow-hidden">
            <Image
              src="/image 10 (1).png"
              alt="jeans"
              width={296}
              height={444}
            />
          </div>
          <div className="text-center">
            <h2 className="font-satoshi font-bold text-[20px] leading-[27px] text-black mr-12">
              FADED SKINNY JEANS
            </h2>
            <div className="w-[104px] h-[18.49px] flex justify-center items-center gap-[5.31px] mt-2 ml-5">
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              <span className="w-[18.49px] h-[18.49px] text-yellow-400 text-xl">
                ★
              </span>
              {/* Half Star */}
              <span
                className="w-[18.49px] h-[26px] text-[#FFC633] text-xl mt-2"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              >
                ★
              </span>
              <div className="w-[33px] h-[19px] ml-5 mt-2">
                <span className="ml-2 text-[14px] font-satoshi text-black">
                  4.5
                </span>
                <span
                  className="text-[14px] font-satoshi text-black"
                  style={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  /5
                </span>
              </div>
            </div>

            <div className="mt-2 mr-52  text-[24px] font-satoshi font-bold leading-[32px] text-black">
              $210
            </div>
          </div>
        </div>
      </div>
      {/*button*/}
      <div className="w-[218px] h-[52px] top-[2285px] left-[611px] rounded-[62px] border-[1px] py-4 px-[54px] gap-3 flex items-center justify-center mt-12">
        <button className="font-satoshi font-medium text-base leading-[21.6px] text-black">
          View All
        </button>
      </div>

      {/*Another container*/}
      <div className="absolute w-[1239px] h-[850px] left-[100px] top-[2200px] bg-[#F0F0F0] rounded-[40px] mt-28 mr-28">
        {/* Heading */}
        <div className="absolute w-[687px] h-[58px] left-1/2 -translate-x-1/2 top-[70px] flex items-center justify-center">
          <h1 className="font-integral-cf font-bold text-[48px] leading-[58px] text-[#000000] text-center">
            BROWSE BY DRESS STYLE
          </h1>
        </div>

        {/*all frame container*/}
        <div className="flex flex-col mt-36 mx-16 ">
          {/* Row with Frame 61 and Frame 62*/}
          <div className="flex flex-row justify-between mt-8">
            {/*Frame 61*/}
            <div className="w-[407px] h-[289px] top-[192px] left-[64px] rounded-[20px] overflow-hidden ">
              <Image
                src="/Frame 61 (1).png"
                alt="first"
                width={973}
                height={649}
              />
            </div>
            {/*Frame 62*/}
            <div className="w-[684px] h-[289px] top-[192px] left-[491px] rounded-[20px] overflow-hidden  ml-5">
              <Image
                src="/Frame 62.png"
                alt="second"
                width={1306}
                height={870}
              />
            </div>
          </div>
          {/*Frame 60*/}

          <div className="flex flex-row justify-start mt-6">
            <div className="w-[684px] h-[289px] top-[501px] left-[64px] rounded-[20px] overflow-hidden">
              <Image src="/Frame 64.png" alt="third" width={770} height={616} />
            </div>

            {/*Frame 63*/}
            <div className="w-[407px] h-[289px] top-[501px] left-[768px] rounded-[20px] ml-5">
              <Image
                src="/Frame 63.png"
                alt="fourth"
                width={452}
                height={677}
              />
            </div>
          </div>
        </div>
      </div>
      {/*last part*/}
      <div className="absolute w-[654px] h-[1160px] left-[calc(50%-327px-293px)] top-[3150px] font-integral font-bold text-[48px] leading-[58px]  text-black ml-20 mt-24  ">
        OUR HAPPY CUSTOMERS
      </div>
      {/*Review card*/}
      {/*parent div of all card*/}
      <div className="flex justify-start gap-6  ">
        {/*card 1*/}
        <div className="absolute w-[400px] h-[240px] top-[3250px] left-[100px] rounded-[20px] border border-[#0000001A]  p-[28px_32px] flex flex-wrap gap-[24px_342px] mt-28">
          {/* one more div */}
          <div className="w-[336px] h-[161.58px] flex flex-row justify-between items-start gap-[24px]">
            {/* Frame 29 */}
            <div className="w-[336px] h-[161.58px] flex flex-col items-start gap-[15px] ">
              {/*stars*/}
              <div className="w-[138.84px] h-[22.49px] flex flex-row justify-center items-start gap-[6.49px] ml-[-12px]">
                <span className="w-[22.58px] h-[22.58px] text-yellow-400 text-xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-yellow-400 text-xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-yellow-400 text-xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-yellow-400 text-xl">
                  ★
                </span>
              </div>
              {/*name and right*/}
              <div className="w-[110px] h-6 gap-1">
                {/*name*/}
                <h1 className="w-[82px] h-[15px] font-satoshi font-bold text-[20px] leading-[22px] whitespace-nowrap ">
                  Sarah M.
                </h1>
                {/*right*/}
                <Image
                  src="/Frame (24).png"
                  alt="right"
                  width={19.5}
                  height={19.5}
                  className="w-[19.5px] h-[19.5px]  absolute top-[0px] left-[2.25px] ml-32 mt-16"
                />
              </div>
              {/*paragraph*/}
              <p className="font-satoshi font-normal text-[16px] leading-[22px] text-black/60">
                "I'm blown away by the quality and style of the
                <br /> clothes I received from Shop.co. From casual
                <br />
                wear to elegant dresses, every piece I've bought has exceeded my
                expectations.”
              </p>
            </div>
          </div>
        </div>
        {/*review card 2*/}
        <div className=" absolute w-[400px] h-[239.58px] top-[3250px] left-[520px] rounded-[20px] border border-[#0000001A] py-7 px-8 mt-28">
          {/*one more div*/}
          <div className="w-[336px] h-[183.58px] justify-between">
            {/* Frame 29 */}
            <div className="w-[336px] h-[161.58px] flex flex-col items-start gap-[15px]">
              {/*stars*/}
              <div className="w-[138.84px] h-[22.49px] flex flex-row justify-center items-start gap-[6.49px] ml-[-12px]">
                <span className="w-[22.58px] h-[22.58px] text-yellow-400 text-xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-yellow-400 text-xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-yellow-400 text-xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-yellow-400 text-xl">
                  ★
                </span>
              </div>
              {/*name and right*/}
              <div className="w-[110px] h-6 gap-1">
                {/*name*/}
                <h1 className="w-[82px] h-[15px] font-satoshi font-bold text-[20px] leading-[22px] whitespace-nowrap ml-1">
                  Alex K.
                </h1>
                {/*right*/}
                <Image
                  src="/Frame (24).png"
                  alt="right"
                  width={19.5}
                  height={19.5}
                  className="w-[19.5px] h-[19.5px]  absolute top-[0px] left-[2.25px] ml-28 mt-16"
                />
              </div>
              {/*paragraph*/}
              <p className="font-satoshi font-normal text-[16px] leading-[22px] text-black/60">
                "Finding clothes that align with my personal <br />
                style used to be a challenge until I discovered <br />
                Shop.co. The range of options they offer is truly <br />
                remarkable, catering to a variety of tastes and <br />
                occasions.”
              </p>
            </div>
          </div>
        </div>
        {/*review card 3*/}
        <div className=" absolute w-[400px] h-[239.58px] top-[3250px] left-[940px] rounded-[20px] border border-[#0000001A] py-7 px-8 gap-[342px] mt-28">
          {/*one more div*/}
          <div className="w-[336px] h-[183.58px] justify-between">
            {/* Frame 29 */}
            <div className="w-[336px] h-[161.58px] flex flex-col items-start gap-[15px]">
              {/*stars*/}
              <div className="w-[138.84px] h-[22.49px] flex flex-row justify-center items-start gap-[6.49px] ml-[-12px] ">
                <span className="w-[22.58px] h-[22.58px] text-yellow-400 text-xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-yellow-400 text-xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-yellow-400 text-xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-yellow-400 text-xl">
                  ★
                </span>
              </div>
              {/*name and right*/}
              <div className="w-[110px] h-6 gap-1">
                {/*name*/}
                <h1 className="w-[82px] h-[15px] font-satoshi font-bold text-[20px] leading-[22px] whitespace-nowrap ml-1">
                  James L.
                </h1>
                {/*right*/}
                <Image
                  src="/Frame (24).png"
                  alt="right"
                  width={19.5}
                  height={19.5}
                  className="w-[19.5px] h-[19.5px]  absolute top-[0px] left-[2.25px] ml-32 mt-16"
                />
              </div>
              <p className="font-satoshi font-normal text-[16px] leading-[22px] text-black/60">
                {" "}
                "As someone who's always on the lookout for <br />
                unique fashion pieces, I'm thrilled to have <br />
                stumbled upon Shop.co. The selection of <br />
                clothes is not only diverse but also on-point <br />
                with the latest trends.”
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*footer*/}
      <div className=" relative bg-[#F0F0F0] mt-[1580px]">
        {/* Footer Container */}
        <div className="w-[1440px] h-[550px] bg-[#F0F0F0] overflow-hidden ">
          <div className="flex items-start justify-between">
            {/* Frame 52 Content Wrapper */}
            <div className="w-full flex flex-row items-start justify-between py-12 mx-auto">
              {/* Frame 51 Shop Co  */}
              <div className="w-[248px] mt-24 ml-20">
                <h1 className="font-integral-cf font-bold text-[33.45px] leading-[40.15px] text-black">
                  SHOP.CO
                </h1>
                <p className="font-satoshi font-normal text-[14px] leading-[22px] text-black/60 mt-4">
                  We have clothes that suit your style and that you’re proud to
                  wear. From women to men.
                </p>
                {/* Social */}
                <div className="flex mt-6 gap-6">
                  <Image
                    src="/1 (1).png"
                    alt="Twitter"
                    width={28}
                    height={28}
                  />
                  <Image src="/2 (1).png" alt="Fb" width={28} height={28} />
                  <Image src="/3 (1).png" alt="Insta" width={28} height={28} />
                  <Image src="/4 (1).png" alt="" width={28} height={28} />
                </div>
              </div>

              {/* Columns */}
              {[
                {
                  title: "Company",
                  items: ["About", "Features", "Works", "Career"],
                },
                {
                  title: "Help",
                  items: [
                    "Customer Support",
                    "Delivery Details",
                    "Terms & Conditions",
                    "Privacy & Policy",
                  ],
                },
                {
                  title: "FAQ",
                  items: ["Account", "Manage Deliveries", "Orders", "Payments"],
                },
                {
                  title: "Resources",
                  items: [
                    "Free eBooks",
                    "Development Tutorial",
                    "How to - Blog",
                    "YouTube Playlist",
                  ],
                },
              ].map((col, idx) => (
                <div key={idx} className="w-[149px] gap-0 mt-28 ">
                  <h1 className="font-satoshi font-medium text-[16px] leading-[18px]">
                    {col.title}
                  </h1>
                  <ul>
                    {col.items.map((item, index) => (
                      <li
                        key={index}
                        className="font-satoshi font-normal text-[16px] leading-[19px] text-black/60 mt-4"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Divider Line */}
            <div
              className="absolute border border-black/10 w-[1240px]"
              style={{
                top: "370px",
                left: "calc(50% - 1240px / 2)",
              }}
            />
          </div>
          {/*footer content*/}
          <div>
            <p className="w-[269px] h-[19px] top-[2213px] left-[100px] font-satoshi font-normal text-base leading-[18.9px] text-right text-black/60 whitespace-nowrap ml-24 ">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="w-[282px] h-[30px] top-[2208px] left-[1059px] gap-3 flex justify-end ml-[72%] mb-4">
              <Image
                src="/Badge (5).png"
                alt="badge 1"
                width={46}
                height={30}
                className="rounded-[5.38px] border-[0.22px]"
              />
              <Image
                src="/Badge (6).png"
                alt="badge 2"
                width={46}
                height={30}
                className="rounded-[5.38px] border-[0.22px]"
              />
              <Image
                src="/Badge (7).png"
                alt="badge 3"
                width={46}
                height={30}
                className="rounded-[5.38px] border-[0.22px]"
              />
              <Image
                src="/Badge (8).png"
                alt="badge 4"
                width={46}
                height={30}
                className="rounded-[5.38px] border-[0.22px]"
              />
              <Image
                src="/Badge (9).png"
                alt="badge 5"
                width={46}
                height={30}
                className="rounded-[5.38px] border-[0.22px]"
              />
            </div>
          </div>
        </div>

        {/* Subscribe to Newsletter Section */}
        <div className="absolute w-[1240px] h-[180px] left-[100px] top-[-85px] bg-black rounded-[20px] flex justify-between items-center px-16 py-8 gap-[153px]">
          <h2 className="font-integral-cf font-bold text-[40px] leading-[45px] text-white">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center bg-white rounded-[62px] px-4 py-3 gap-3 w-[349px] h-12">
              <Image
                src="/Frame (23).png"
                alt="mesaage"
                width={24}
                height={24}
              />
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-transparent text-black/40 text-[16px] leading-[22px] placeholder-black/40 flex-grow outline-none"
              />
            </div>
            <div className="w-[349px] h-[46px] rounded-[62px] py-3 px-4 gap-3 bg-white text-black flex items-center ">
              <input
                type="text"
                placeholder="Subscribe to Newsletter"
                className="w-[172px] h-[22px] font-satoshi font-medium text-base leading-[21.6px] text-black placeholder-black ml-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
