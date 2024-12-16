import Image from "next/image";
import Footer from "@/app/Components/Footer";
export default function Cart() {
  return (
    <div className="w-[1441px] min-h-screen grid grid-rows-[1fr_auto]">
      {/*home cart */}
      <div className="w-[106px] h-[22x] top-[158px] left-[100px] gap-3 flex lg:mt-6 lg:ml-12">
        <p className="w-[43px] h-[11px] font-satoshi font-normal text-base leading-[21.6px]">
          Home
        </p>

        <div className="inline-block mx-2">
          <Image src="/Frame (21).png" alt="sign" width={16} height={16} />{" "}
        </div>
        <p className="w-[31px] h-[22px] font-satoshi font-normal text-base leading-[21.6px]">
          Cart
        </p>

        {/*h1*/}
        <h1 className="w-[259px] h-12 top-[204px] left-[100px] font-integral-cf font-bold text-[40px] leading-[48px] -ml-28 lg:mt-12 whitespace-nowrap">
          Your cart
        </h1>
        <div className="flex flex-row gap-5 ml-16">
          {/*card div*/}
          <div className="w-[715px] h-[508px] top-[276px] left-[100px] rounded-[20px] border border-[#0000001A] py-5 px-6 gap-6 mt-28 -ml-64">
            {/*first*/}
            <div className="w-[667px] h-[124px] gap-1 flex mt-2">
              <Image
                src="/image 8 (2).png"
                alt="t shirt"
                width={124}
                height={124}
                className="rounded-[8.66px]"
              />
              <div className="w-[527px] h-[124px] justify-between">
                <div className="w-[227px] h-[118px] justify-between">
                  <h2 className="w-[227px] h-[27px] font-satoshi font-bold text-xl leading-[27px] whitespace-nowrap lg:ml-4">
                    Gradient Graphic T-shirt
                  </h2>
                  <div className="flex lg:ml-4 lg:mt-2">
                    <p className="w-[67px] h-[19px] font-satoshi font-normal text-base leading-[18.9px] text-black">
                      Size:
                    </p>
                    <p className="w-[67px] h-[19px] font-satoshi font-normal text-base leading-[18.9px] lg:-ml-7 text-black/60">
                      Large
                    </p>
                  </div>
                  <div className="flex lg:ml-4 lg:mt-2">
                    <p className="w-[67px] h-[19px] font-satoshi font-normal text-base leading-[18.9px] text-black">
                      Color:
                    </p>
                    <p className="w-[67px] h-[19px] font-satoshi font-normal text-base leading-[18.9px] lg:-ml-5 text-black/60">
                      White
                    </p>
                  </div>
                  <div className="w-[54px] h-8 font-satoshi font-bold text-2xl leading-[32.4px] text-black lg:mt-4 lg:ml-4">
                    $145
                  </div>
                </div>
              </div>
              <div className="w-[225px] h-[124px] justify-between">
                <div className="w-[300px] h-[124px] justify-between lg:ml-[80%] ">
                  <Image
                    src="/Frame (18).png"
                    alt="delete"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="w-[126px] h-[44px] rounded-[62px] py-3 px-5 gap-5 bg-[#F0F0F0] flex items-center justify-center -mt-10 ml-24">
                  <Image
                    src="/Frame (19).png"
                    alt="minus"
                    width={20}
                    height={20}
                  />
                  <button className="w-[12px] h-[19px] font-satoshi font-medium text-base leading-[18.9px]">
                    1
                  </button>
                  <Image
                    src="/Frame (20).png"
                    alt="plus"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>

            {/*line*/}
            <div className="w-[667px] border rotate-0 bg-black/10 mt-5"></div>
            {/*second*/}
            <div className="w-[667px] h-[124px] gap-4 lg:mt-5 flex">
              <Image
                src="/image 9.png"
                alt="shirt"
                width={124}
                height={124}
                className="rounded-[8.66px]"
              />
              {/*After shirt div*/}
              <div className="w-[527px] h-[124px] justify-between ">
                {/*left part*/}
                <div className="w-[151px] h-[118px] justify-between">
                  <h2 className="w-[151px] h-[27px] font-satoshi font-bold text-xl leading-[27px] whitespace-nowrap">
                    CHECKERED SHIRT
                  </h2>
                  <div className="flex  lg:mt-2">
                    <p className="w-[82px] h-[19px] font-satoshi font-normal text-base leading-[18.9px] text-black">
                      Size:
                    </p>
                    <p className="w-[82px] h-[19px] font-satoshi font-normal text-base leading-[18.9px] lg:-ml-7 text-black/60">
                      Medium
                    </p>
                  </div>
                  <div className="flex  lg:mt-2">
                    <p className="w-[67px] h-[19px] font-satoshi font-normal text-base leading-[18.9px] text-black">
                      Color:
                    </p>
                    <p className="w-[67px] h-[19px] font-satoshi font-normal text-base leading-[18.9px] lg:-ml-5 text-black/60">
                      Red
                    </p>
                  </div>
                  <div className="w-[56px] h-8 font-satoshi font-bold text-2xl leading-[32.4px] text-black lg:mt-4 ">
                    $180
                  </div>
                </div>
              </div>
              <div className="w-[225px] h-[124px] justify-between">
                <div className="w-[300px] h-[124px] justify-between lg:ml-[80%] ">
                  <Image
                    src="/Frame (18).png"
                    alt="delete"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="w-[126px] h-[44px] rounded-[62px] py-3 px-5 gap-5 bg-[#F0F0F0] flex items-center justify-center -mt-10 ml-24">
                  <Image
                    src="/Frame (19).png"
                    alt="minus"
                    width={20}
                    height={20}
                  />
                  <button className="w-[12px] h-[19px] font-satoshi font-medium text-base leading-[18.9px]">
                    1
                  </button>
                  <Image
                    src="/Frame (20).png"
                    alt="plus"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>

            {/*line*/}
            <div className="w-[667px] border rotate-0 bg-black/10 lg:mt-5"></div>
            {/*third*/}
            <div className="w-[667px] h-[124px] gap-4 mt-5 flex">
              <Image
                src="/image 8.png"
                alt="jeans"
                width={124}
                height={124}
                className="rounded-[8.66px]"
              />
              {/*after jeans div*/}
              <div className="w-[527px] h-[124px] justify-between">
                {/*left part*/}
                <div className="w-[150px] h-[118px] justify-between">
                  <h2 className="w-[150px] h-[27px] font-satoshi font-bold text-xl leading-[27px] whitespace-nowrap">
                    SKINNY FIT JEANS
                  </h2>
                  <div className="flex  lg:mt-2">
                    <p className="w-[82px] h-[19px] font-satoshi font-normal text-base leading-[18.9px] text-black">
                      Size:
                    </p>
                    <p className="w-[82px] h-[19px] font-satoshi font-normal text-base leading-[18.9px] lg:-ml-7 text-black/60">
                      Large
                    </p>
                  </div>
                  <div className="flex  lg:mt-2">
                    <p className="w-[67px] h-[19px] font-satoshi font-normal text-base leading-[18.9px] text-black">
                      Color:
                    </p>
                    <p className="w-[67px] h-[19px] font-satoshi font-normal text-base leading-[18.9px] lg:-ml-5 text-black/60">
                      Blue
                    </p>
                  </div>
                  <div className="w-[56px] h-8 font-satoshi font-bold text-2xl leading-[32.4px] text-black lg:mt-4 ">
                    $240
                  </div>
                </div>
              </div>
              <div className="w-[225px] h-[124px] justify-between">
                <div className="w-[300px] h-[124px] justify-between lg:ml-[80%] ">
                  <Image
                    src="/Frame (18).png"
                    alt="delete"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="w-[126px] h-[44px] rounded-[62px] py-3 px-5 gap-5 bg-[#F0F0F0] flex items-center justify-center -mt-10 ml-24">
                  <Image
                    src="/Frame (19).png"
                    alt="minus"
                    width={20}
                    height={20}
                  />
                  <button className="w-[12px] h-[19px] font-satoshi font-medium text-base leading-[18.9px]">
                    1
                  </button>
                  <Image
                    src="/Frame (20).png"
                    alt="plus"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
          {/*right part*/}
          <div className="w-[505px] h-[458px] top-[276px] left-[835px] rounded-[20px] border border-[#0000001A] py-5 px-6 mt-28 ">
            <h1 className="w-[179px] h-8 font-satoshi font-bold text-2xl leading-[32.4px] whitespace-nowrap">
              Order Summary
            </h1>
            {/*details of order div*/}
            <div className="w-[457px] h-[193px] gap-5">
              {/*sub total*/}
              <div className="w-[457px] h-[27px] justify-between flex mt-4">
                <h2 className="w-[72px] h-[27px] font-satoshi font-normal text-xl leading-[27px] text-black/60">
                  Subtotal
                </h2>
                <div className="w-[49px] h-[27px] font-satoshi font-bold text-xl leading-[27px] text-right">
                  $565
                </div>
              </div>
              {/*discount*/}
              <div className="w-[457px] h-[27px] justify-between flex mt-4">
                <h2 className="w-[143px] h-[27px] font-satoshi font-normal text-xl leading-[27px] text-black/60 whitespace-nowrap">
                  Discount (-20%)
                </h2>
                <div className="w-[48px] h-[27px] font-satoshi font-bold text-xl leading-[27px] text-right text-[#FF3333]">
                  -$113
                </div>
              </div>
              {/*delivery*/}
              <div className="w-[457px] h-[27px] justify-between flex mt-4">
                <h2 className="w-[107px] h-[27px] font-satoshi font-normal text-xl leading-[27px] text-black/60 whitespace-nowrap">
                  Delivery Fee
                </h2>
                <div className="w-[32px] h-[27px] font-satoshi font-normal text-xl leading-[27px] text-right">
                  $15
                </div>
              </div>
              {/*line*/}
              <div className="w-[457px] border rotate-0 mt-6"></div>
              {/*total*/}
              <div className="w-[457px] h-[32px] justify-between flex mt-8">
                <h2 className="w-[42px] h-[27px] font-satoshi font-normal text-xl leading-[27px]">
                  Total
                </h2>
                <div className="w-[56px] h-[32px] font-satoshi font-bold text-2xl leading-[32.4px] text-right">
                  $467
                </div>
              </div>
            </div>
            {/* buttons*/}
            <div className="w-[457px] h-[48px] gap-3 flex items-center mt-8">
              <div className="w-[326px] h-[48px] rounded-[62px] py-3 px-4 gap-3 bg-[#F0F0F0] flex items-center ">
                <Image
                  src="/Frame (12).png"
                  alt="sign"
                  width={24}
                  height={24}
                />
                <button className="w-[120px] h-[22px] font-satoshi font-normal text-base leading-[21.6px] text-black/40 text-center">
                  Add promo code
                </button>
              </div>
              {/*second one*/}
              <div className="w-[119px] h-[48px] rounded-[62px] py-3 px-4 gap-3 bg-black">
                <button className="w-[42px] h-[22px] font-satoshi font-medium text-base leading-[21.6px] text-white text-center ml-5">
                  Apply
                </button>
              </div>
            </div>
            {/*checkout buuton*/}
            <div className="w-[457px] h-[60px] rounded-[62px] py-4 px-[54px] gap-3 bg-black mt-5 flex items-center">
              <button className="w-[114px] h-[22px] font-satoshi font-medium text-base leading-[21.6px] text-white ml-24">
                Go to Checkout
              </button>
              <Image
                src="/arrow-down-bold 1.png"
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
