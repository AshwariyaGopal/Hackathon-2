import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className=" relative bg-[#F0F0F0] mt-60">
      {/* Footer Container */}
      <div className="w-full h-full bg-[#F0F0F0] overflow-hidden ">
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
                <Image src="/1 (1).png" alt="Twitter" width={28} height={28} />
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
            <Image src="/Frame (23).png" alt="mesaage" width={24} height={24} />
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
  );
}
