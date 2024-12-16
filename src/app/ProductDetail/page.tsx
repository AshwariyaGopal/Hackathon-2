import Image from "next/image";
import Footer from "@/app/Components/Footer";

export default function ProductDetail() {
  return (
    <div className="relative w-full h-auto overflow-hidden">
      <div className="w-[259px] h-[22px] top-[158px] left-[100px] gap-3 text-black/60 flex mt-8 ml-16">
        <div className="w-[63px] h-[16px] gap-1 flex items-center justify-center ">
          <p className="font-satoshi font-normal text-base leading-[21.6px]">
            Home
          </p>
          <Image src="/Frame (5).png" alt="arrow" width={16} height={16} />
        </div>
        <div className="w-[57px] h-4 gap-1 flex items-center justify-center">
          <p className="font-satoshi font-normal text-base leading-[21.6px]">
            Shop
          </p>
          <Image src="/Frame (5).png" alt="arrow" width={16} height={16} />
        </div>
        <div className="w-[51px] h-4 gap-1 flex items-center justify-center">
          <p className="font-satoshi font-normal text-base leading-[21.6px]">
            Men
          </p>
          <Image src="/Frame (5).png" alt="arrow" width={16} height={16} />
        </div>
        <div className="w-[52px] h-[22px] whitespace-nowrap flex items-center justify-center text-black">
          <p className="font-satoshi font-normal text-base leading-[21.6px]">
            T-shirts
          </p>
        </div>
      </div>

      {/* Image part */}
      <div className="flex mt-12 ml-16 sm:flex-row sm:items-center sm:space-x-3">
        {/* Left Column */}
        <div className="flex flex-col sm:mb-0 sm:w-1/4 space-y-2">
          <div className="w-[152px] h-[167px] rounded-[20px] border overflow-hidden">
            <Image
              src="/533545a2b1e10e90b8059bc1bc97eab5 (1).png"
              alt="t shirt"
              width={152}
              height={167}
            />
          </div>
          <div className="w-[152px] h-[168px] rounded-[20px] overflow-hidden mt-2">
            <Image
              src="/b417beff6f8fa6310534f3755fd23c5a.png"
              alt="t shirt"
              width={152}
              height={168}
            />
          </div>
          <div className="w-[152px] h-[167px] rounded-[20px] overflow-hidden mt-2">
            <Image
              src="/9d8d7ff6e33f95a574450e07218fc909.png"
              alt="t shirt"
              width={152}
              height={167}
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[444px]  sm:w-3/4 h-[520px] rounded-[20px] flex overflow-hidden ml-3">
          <Image
            src="/533545a2b1e10e90b8059bc1bc97eab5 (1).png"
            alt="t shirt"
            width={444}
            height={530}
          />
        </div>
        {/*content after image on right side*/}
        <div className="flex flex-col">
          <div className="w-[600px] h-12 top-[216px] left-[750px] ml-8">
            <h1 className="font-integral-cf font-bold text-[40px] leading-[48px]">
              One Life Graphic T-shirt
            </h1>
          </div>
          {/* stars and rating*/}
          <div className="w-[193px] h-[24.71px] top-[278px] left-[750px] flex items-center gap-2 lg:ml-8 ">
            {/* Stars */}
            <div className="w-[139px] h-[24.71px] flex gap-[6.1px] overflow-hidden">
              <span className="w-[24.71px] h-[24.71px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[24.71px] h-[24.71px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[24.71px] h-[24.71px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[24.71px] h-[24.71px] text-[#FFC633] text-2xl">
                ★
              </span>
              {/* Half Star */}
              <span
                className="w-[24.71px] h-[24.71px] text-[#FFC633] text-2xl"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              >
                ★
              </span>
            </div>

            {/* Rating Text */}
            <div className="flex items-center gap-0 mt-2">
              <span className="text-[14px] font-satoshi text-black ">4.5</span>
              <span className="text-[14px] font-satoshi text-black opacity-60">
                /5
              </span>
            </div>
          </div>

          {/*pricing*/}
          <div className="flex flex-row ml-8 mt-4">
            <div className="w-[176px] h-[43px] top-[317px] left-[750px] gap-1 flex">
              {/* $260 */}
              <div className="w-[81px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black">
                $260
              </div>
              {/* $260 (strikethrough text) */}
              <div className="w-[83px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black/30 line-through">
                $300
              </div>
            </div>
            <div className="flex justify-center items-center px-[14px] py-[6px] gap-0 left-[938px] w-[72px] top-[321px] h-[34px] bg-[rgba(255,51,51,0.1)] rounded-[62px]">
              {/* -40% */}
              <div className="w-[44px] h-[22px] text-[16px] font-satoshi font-medium leading-[21.6pxpx] text-[#FF3333] ">
                -40%
              </div>
            </div>
          </div>
          <div className="w-[590px] h-[33px] top-[380px] left-[750px] lg:ml-8 lg:mt-2">
            <p className="font-satoshi font-normal text-base leading-[22px] text-black/60">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
          </div>
          {/*line*/}
          <div className="w-[590px] h-0 top-[437px] left-[750px] border rotate-0 bg-black/10 lg:ml-8 mt-8"></div>
          {/**/}
          <div className="w-[93px] h-[11px] top-[461px] left-[750px] text-black/60 whitespace-nowrap lg:ml-8 lg:mt-5">
            <p className="font-satoshi font-normal text-base leading-[21.6px]">
              Select Colors
            </p>
            <Image
              src="/Frame 77.png"
              alt="circle"
              width={143}
              height={37}
              className="top-[488px] left-[750px] gap-4 lg:mt-2"
            />
          </div>
          {/*line*/}
          <div className="w-[590px] h-0 top-[549px] left-[750px] border rotate-0 bg-black/10 lg:ml-8 mt-16"></div>
          {/**/}
          <div className="w-[87px] h-[11px] top-[573px] left-[750px] lg:ml-8 lg:mt-5">
            <p className="font-satoshi font-normal text-base leading-[21.6px] text-black/60 whitespace-nowrap">
              Choose Size
            </p>
          </div>
          {/*buttons div*/}
          <div className="w-[420px] h-[46px] top-[600px] left-[750px] gap-3 flex lg:ml-8 lg:mt-6 items-center">
            <div className="w-[86px] h-[46px] rounded-[62px] py-3 px-6 gap-3 bg-[#F0F0F0]">
              <button className="w-[38px] h-[22px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                Small
              </button>
            </div>
            <div className="w-[105px] h-[46px] rounded-[62px] py-3 px-6 bg-[#F0F0F0]">
              <button className="w-[57px] h-[22px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                Medium
              </button>
            </div>
            <div className="w-[89px] h-[46px] rounded-[62px] py-3 px-6 bg-black">
              <button className="w-[41px] h-[22px] font-satoshi font-medium leading-[21.6px] text-white">
                Large
              </button>
            </div>
            <div className="w-[104px] h-[46px] rounded-[62px] py-3 px-6 bg-[#F0F0F0]">
              <button className="w-[56px] h-[22px] font-satoshi font-normal text-base leading-[21.6px] text-black/60 whitespace-nowrap">
                X-Large
              </button>
            </div>
          </div>
          {/*line 3*/}
          <div className="w-[590px] h-0 top-[670px] left-[750px] border rotate-0 bg-black/10 lg:ml-8 lg:mt-7"></div>

          <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:mt-6 lg:ml-7">
            {/* First Button */}
            <div className="w-[170px] h-[52px] rounded-[62px] flex justify-between items-center py-4 px-5 bg-[#F0F0F0]">
              <Image src="/Frame (8).png" alt="minus" width={24} height={24} />
              <p className="font-satoshi font-medium text-base leading-[21.6px] text-center">
                1
              </p>
              <Image src="/Frame (7).png" alt="plus" width={24} height={24} />
            </div>

            {/* Second Button */}
            <div className="w-[400px] mt-4 lg:mt-0">
              <button className="w-full h-[52px] rounded-[62px] py-4 px-[54px] bg-black font-satoshi font-medium text-base leading-[21.6px] text-white text-center">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full  h-screen overflow-y-auto">
        {/* Product Details */}
        <div className="absolute w-[133px] h-[14px] left-[190px] top-[100px] font-satoshi font-normal text-[20px] leading-[22px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">
          Product Details
        </div>
        {/* Rating & Reviews */}
        <div className="absolute w-[154px] h-[14px] left-[48%] transform -translate-x-[77px] top-[100px] font-satoshi font-medium text-[20px] leading-[22px] text-black text-center whitespace-nowrap">
          Rating & Reviews
        </div>
        {/* FAQs */}
        <div className="absolute w-[47px] h-[14px] left-[calc(45%+413.5px)] top-[100px] font-satoshi font-normal text-[20px] leading-[22px] text-[rgba(0,0,0,0.6)] text-right">
          FAQs
        </div>
        {/* Line Beneath */}
        <div className="absolute top-[140px] left-[60px] w-[1240px] h-[0px] border bg-black/10">
          {/* Black Line */}
          <div className="absolute w-[414px] h-[2px] bg-black left-[calc(52%-207px)]"></div>
        </div>
        {/* All Reviews and 451*/}
        <div className="flex items-center gap-2 lg:mt-44 overflow-hidden lg:ml-16">
          <div className="font-satoshi font-bold text-2xl leading-[32.4px] text-black whitespace-nowrap">
            All Reviews
          </div>
          <div className="font-satoshi font-normal text-base leading-[22px] text-black/60">
            (451)
          </div>
          {/*buttons part*/}
          <div className="w-full h-12 flex justify-end space-x-2 lg:mr-32 lg:mt-4">
            {/*first*/}
            <div>
              <Image src="/Frame 19.png" alt="circle" width={48} height={48} />
            </div>

            {/* second*/}
            <div className="w-[120px] h-12 rounded-[62px] py-4 px-5 bg-[#F0F0F0] flex items-center justify-between">
              <button className="w-[43px] h-[22px] font-satoshi font-medium text-base leading-[21.6px] text-black">
                Latest
              </button>
              <Image
                src="/Frame (9).png"
                alt="arrow down"
                width={16}
                height={16}
              />
            </div>
            {/*third*/}
            <div className="  w-[166px] h-12 rounded-[62px] py-4 px-5 left-5 bg-black flex items-center justify-center">
              <button className=" w-[107px] h-[22px] font-satoshi font-medium text-base leading-[21.6px] text-white whitespace-nowrap text-center">
                Write a Review
              </button>
            </div>
          </div>
        </div>
        x{/* Card 1 and 2 */}
        <div className="flex lg:ml-16 gap-6 mt-6 overflow-x-auto">
          {/* Card 1 */}
          <div className="w-[610px] h-[241.58px] rounded-[20px] border border-black/10 py-7 px-8">
            {/*content div*/}
            <div className="w-[546px] h-[139.58px] justify-between">
              {/*stars*/}
              <div className="w-[127px] h-[26.58px] flex gap-[6.49px] ">
                <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                  ★
                </span>
                {/* Half Star */}
                <span
                  className="w-[22.58px] h-[30px] text-[#FFC633] text-2xl"
                  style={{ clipPath: "inset(0 50% 0 0)" }}
                >
                  ★
                </span>
                <Image
                  src="/Frame 27.png"
                  alt="sign"
                  width={24}
                  height={24}
                  className="lg:ml-96 "
                />
              </div>

              {/*name and sign*/}
              <div className="w-[146px] h-6 gap-1 flex lg:mt-4">
                <h2 className="w-[118px] h-[15px] font-satoshi font-bold text-xl leading-[22px] whitespace-nowrap">
                  Samantha D.
                </h2>
                <Image
                  src="/Frame (10).png"
                  alt="sign"
                  width={24}
                  height={24}
                />
              </div>

              <p className="w-[522px] h-[66px] font-satoshi font-normal text-base leading-[22px] text-black/60 lg:mt-2">
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
            </div>
            {/*footer*/}
            <div className="w-[546px] h-[22px] font-satoshi font-medium text-base leading-[22px] text-black/60 lg:mt-5">
              Posted on August 14, 2023
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-[610px] h-[241.58px] rounded-[20px] border border-black/10 py-7 px-8">
            {/*content div*/}
            <div className="w-[546px] h-[139.58px] justify-between">
              {/*stars*/}
              <div className="w-[127px] h-[26.58px] flex gap-[6.49px] ">
                <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                  ★
                </span>
                <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                  ★
                </span>

                <Image
                  src="/Frame 27.png"
                  alt="sign"
                  width={24}
                  height={24}
                  className="lg:ml-[320%]"
                />
              </div>
              {/*name and sign*/}
              <div className="w-[146px] h-6 gap-1 flex lg:mt-4">
                <h2 className="w-[118px] h-[15px] font-satoshi font-bold text-xl leading-[22px] whitespace-nowrap">
                  Alex M.
                </h2>
                <Image
                  src="/Frame (10).png"
                  alt="sign"
                  width={24}
                  height={24}
                />
              </div>
              <p className="w-[522px] h-[66px] font-satoshi font-normal text-base leading-[22px] text-black/60 lg:mt-2">
                "The t-shirt exceeded my expectations! The colors are vibrant
                and the print quality is top-notch. Being a UI/UX designer
                myself, I'm quite picky about aesthetics, and this t-shirt
                definitely gets a thumbs up from me."
              </p>
            </div>
            {/*footer*/}
            <div className="w-[546px] h-[22px] font-satoshi font-medium text-base leading-[22px] text-black/60 lg:mt-5">
              Posted on August 15, 2023
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 and 4 */}
      <div className="flex lg:ml-16 gap-6 mt-[-170px] ">
        {/* Card 3 */}
        <div className="w-[610px] h-[241.58px] rounded-[20px] border border-black/10 py-7 px-8">
          {/*content div*/}
          <div className="w-[546px] h-[139.58px] justify-between">
            {/*stars*/}
            <div className="w-[127px] h-[26.58px] flex gap-[6.49px] ">
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>

              {/* Half Star */}
              <span
                className="w-[22.58px] h-[30px] text-[#FFC633] text-2xl"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              >
                ★
              </span>
              <Image
                src="/Frame 27.png"
                alt="sign"
                width={24}
                height={24}
                className="lg:ml-[320%]"
              />
            </div>
            {/*name and sign*/}
            <div className="w-[146px] h-6 gap-1 flex lg:mt-4">
              <h2 className="w-[118px] h-[15px] font-satoshi font-bold text-xl leading-[22px] whitespace-nowrap">
                Ethan R.
              </h2>
              <Image src="/Frame (10).png" alt="sign" width={24} height={24} />
            </div>
            <p className="w-[522px] h-[66px] font-satoshi font-normal text-base leading-[22px] text-black/60 lg:mt-2">
              "This t-shirt is a must-have for anyone who appreciates good
              design. The minimalistic yet stylish pattern caught my eye, and
              the fit is perfect. I can see the designer's touch in every aspect
              of this shirt."
            </p>
          </div>
          {/*footer*/}
          <div className="w-[546px] h-[22px] font-satoshi font-medium text-base leading-[22px] text-black/60 lg:mt-5">
            Posted on August 16, 2023
          </div>
        </div>
        {/* Card 4 */}
        <div className="w-[610px] h-[241.58px] rounded-[20px] border border-black/10 py-7 px-8">
          {/*content div*/}
          <div className="w-[546px] h-[139.58px] justify-between">
            {/*stars*/}
            <div className="w-[127px] h-[26.58px] flex gap-[6.49px]">
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>

              <Image
                src="/Frame 27.png"
                alt="sign"
                width={24}
                height={24}
                className="lg:ml-[320%]"
              />
            </div>
            {/*name and sign*/}
            <div className="w-[146px] h-6 gap-1 flex lg:mt-4">
              <h2 className="w-[118px] h-[15px] font-satoshi font-bold text-xl leading-[22px] whitespace-nowrap">
                Olivia P.
              </h2>
              <Image src="/Frame (10).png" alt="sign" width={24} height={24} />
            </div>
            <p className="w-[522px] h-[66px] font-satoshi font-normal text-base leading-[22px] text-black/60 lg:mt-2">
              "As a UI/UX enthusiast, I value simplicity and functionality. This
              t-shirt not only represents those principles but also feels great
              to wear. It's evident that the designer poured their creativity
              into making this t-shirt stand out."
            </p>
          </div>
          {/*footer*/}
          <div className="w-[546px] h-[22px] font-satoshi font-medium text-base leading-[22px] text-black/60 lg:mt-5">
            Posted on August 17, 2023
          </div>
        </div>
      </div>

      {/* Card 5 and 6 */}
      <div className="flex lg:ml-16 gap-6 mt-4">
        {/* Card 5 */}
        <div className="w-[610px] h-[241.58px] rounded-[20px] border border-black/10 py-7 px-8">
          {/*content div*/}
          <div className="w-[546px] h-[139.58px] justify-between">
            {/*stars*/}
            <div className="w-[127px] h-[26.58px] flex gap-[6.49px] ">
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>

              <Image
                src="/Frame 27.png"
                alt="sign"
                width={24}
                height={24}
                className="lg:ml-[320%]"
              />
            </div>
            {/*name and sign*/}
            <div className="w-[146px] h-6 gap-1 flex lg:mt-4">
              <h2 className="w-[118px] h-[15px] font-satoshi font-bold text-xl leading-[22px] whitespace-nowrap">
                Liam K.
              </h2>
              <Image src="/Frame (10).png" alt="sign" width={24} height={24} />
            </div>
            <p className="w-[522px] h-[66px] font-satoshi font-normal text-base leading-[22px] text-black/60 lg:mt-2">
              "This t-shirt is a fusion of comfort and creativity. The fabric is
              soft, and the design speaks volumes about the designer's skill.
              It's like wearing a piece of art that reflects my passion for both
              design and fashion."
            </p>
          </div>
          {/*footer*/}
          <div className="w-[546px] h-[22px] font-satoshi font-medium text-base leading-[22px] text-black/60 lg:mt-5">
            Posted on August 18, 2023
          </div>
        </div>
        {/* Card 6 */}
        <div className="w-[610px] h-[241.58px] rounded-[20px] border border-black/10 py-7 px-8">
          {/*content div*/}
          <div className="w-[546px] h-[139.58px] justify-between">
            {/*stars*/}
            <div className="w-[127px] h-[26.58px] flex gap-[6.49px] ">
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>
              <span className="w-[22.58px] h-[22.58px] text-[#FFC633] text-2xl">
                ★
              </span>
              {/* Half Star */}
              <span
                className="w-[22.58px] h-[30px] text-[#FFC633] text-2xl"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              >
                ★
              </span>
              <Image
                src="/Frame 27.png"
                alt="sign"
                width={24}
                height={24}
                className="lg:ml-[300%]"
              />
            </div>
            {/*name and sign*/}
            <div className="w-[146px] h-6 gap-1 flex lg:mt-4">
              <h2 className="w-[118px] h-[15px] font-satoshi font-bold text-xl leading-[22px] whitespace-nowrap">
                Ava H.
              </h2>
              <Image src="/Frame (10).png" alt="sign" width={24} height={24} />
            </div>
            <p className="w-[522px] h-[66px] font-satoshi font-normal text-base leading-[22px] text-black/60 lg:mt-2">
              "I'm not just wearing a t-shirt; I'm wearing a piece of design
              philosophy. The intricate details and thoughtful layout of the
              design make this shirt a conversation starter."
            </p>
          </div>
          {/*footer*/}
          <div className="w-[546px] h-[22px] font-satoshi font-medium text-base leading-[22px] text-black/60 lg:mt-5">
            Posted on August 19, 2023
          </div>
        </div>
      </div>
      {/*button*/}
      {/*button*/}
      <div className="relative w-screen h-screen">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 w-[230px] h-[52px] top-[100px] left-[700px] rounded-[62px] border py-4 px-[54px] gap-3">
          <button className="w-[140px] h-[22px] font-satoshi font-medium text-base leading-[21.6px] whitespace-nowrap text-center text-black">
            Load More Reviews
          </button>
        </div>
      </div>
      {/*h1*/}
      <div className=" absolute w-[579px] h-[58px] top-[1850px] left-1/2 transform -translate-x-1/2 ">
        <h1 className="font-integral-cf font-bold text-5xl leading-[57.6px] text-center">
          You might also like
        </h1>
      </div>

      {/*cards div*/}
      <div className="flex gap-4 lg:ml-32 lg:mt-[-400px] ">
        {/*shirt 1*/}
        <div>
          <div className="w-[295px] h-[298px]  rounded-[20px] bg-[#F0EEED] overflow-hidden">
            <Image
              src="/image 7 (2).png"
              alt="t shirt"
              width={296}
              height={444}
              className=""
            />
          </div>

          <h2 className="font-satoshi font-bold text-xl leading-[27px] w-[228px] h-[27px] top-[2305px] left-[100px] lg:mt-4 whitespace-nowrap">
            Polo with Contrast Trims
          </h2>
          {/* stars and rating*/}
          <div className="w-[193px] h-[30px] top-[278px] left-[750px] flex items-center   ">
            {/* Stars */}
            <div className="w-[139px] h-[24.71px] flex gap-[2px] overflow-hidden">
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
            <div className="flex items-center mt-4 mr-10">
              <span className="text-[14px] font-satoshi text-black ">4.0</span>
              <span className="text-[14px] font-satoshi text-black opacity-60">
                /5
              </span>
            </div>
          </div>
          {/*pricing*/}
          <div className="flex flex-row  mt-4">
            <div className="w-[176px] h-[43px] top-[317px] left-[750px] gap-1 flex">
              {/* $260 */}
              <div className="w-[81px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black">
                $212
              </div>
              {/* $260 (strikethrough text) */}
              <div className="w-[83px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black/30 line-through">
                $242
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
        {/*shirt 2*/}
        <div>
          <div className="w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] overflow-hidden">
            <Image
              src="/image 8 (2).png"
              alt="shirt"
              width={294}
              height={441}
              className=""
            />
          </div>
          <h2 className="font-satoshi font-bold text-xl leading-[27px] w-[227px] h-[27px] top-[2305px] left-[415px] lg:mt-4 whitespace-nowrap">
            Gradient Graphic T-shirt
          </h2>
          {/* stars and rating*/}
          <div className="w-[193px] h-[30px] top-[278px] left-[750px] flex items-center   ">
            {/* Stars */}
            <div className="w-[139px] h-[24.71px] flex gap-[2px] overflow-hidden">
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
            <div className="flex items-center mt-4 mr-10">
              <span className="text-[14px] font-satoshi text-black ">3.5</span>
              <span className="text-[14px] font-satoshi text-black opacity-60">
                /5
              </span>
            </div>
          </div>
          {/*pricing*/}
          <div className="flex flex-row  mt-4">
            <div className="w-[176px] h-[43px] top-[317px] left-[750px] gap-1 flex">
              {/* $260 */}
              <div className="w-[81px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black">
                $145
              </div>
            </div>
          </div>
        </div>
        {/*shirt 3*/}
        <div>
          <div className="w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] overflow-hidden">
            <Image
              src="/image 9 (2).png"
              alt="t shirt"
              width={296}
              height={444}
              className=""
            />
          </div>
          <h2 className="font-satoshi font-bold text-xl leading-[27px] w-[231px] h-[27px] top-[2305px] left-[730px] lg:mt-4 whitespace-nowrap">
            Polo with Tipping Details
          </h2>
          {/* stars and rating*/}
          <div className="w-[193px] h-[30px] top-[278px] left-[750px] flex items-center   ">
            {/* Stars */}
            <div className="w-[139px] h-[24.71px] flex gap-[2px] overflow-hidden">
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
            <div className="flex items-center mt-4 mr-10">
              <span className="text-[14px] font-satoshi text-black ">4.5</span>
              <span className="text-[14px] font-satoshi text-black opacity-60">
                /5
              </span>
            </div>
          </div>
          {/*pricing*/}
          <div className="flex flex-row  mt-4">
            <div className="w-[176px] h-[43px] top-[317px] left-[750px] gap-1 flex">
              {/* $260 */}
              <div className="w-[81px] h-[43px] text-[32px] font-satoshi font-bold leading-[43.2px] text-black">
                $180
              </div>
            </div>
          </div>
        </div>
        {/*shirt 4*/}
        <div>
          <div className="w-[295px] h-[298px]  rounded-[20px] bg-[#F0EEED] overflow-hidden">
            <Image
              src="/image 10 (2).png"
              alt="t shirt"
              width={296}
              height={444}
              className=""
            />
          </div>
          <h2 className="font-satoshi font-bold text-xl leading-[27px] w-[190px] h-[27px] top-[2305px] left-[1045spx] lg:mt-4 whitespace-nowrap">
            Black Striped T-shirt
          </h2>
          {/* stars and rating*/}
          <div className="w-[193px] h-[30px] top-[278px] left-[750px] flex items-center   ">
            {/* Stars */}
            <div className="w-[139px] h-[24.71px] flex gap-[2px] overflow-hidden">
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
            <div className="flex items-center mt-4 mr-10">
              <span className="text-[14px] font-satoshi text-black ">5.0</span>
              <span className="text-[14px] font-satoshi text-black opacity-60">
                /5
              </span>
            </div>
          </div>
          {/*pricing*/}
          <div className="flex flex-row  mt-4">
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

      <Footer />
    </div>
  );
}
