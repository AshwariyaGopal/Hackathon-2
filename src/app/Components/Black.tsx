import Image from "next/image";

export default function Black() {
  return (
    <div className="relative w-[1440px] h-[142px] bg-black border border-b-black flex items-center justify-center -top-[150px]">
      {/* First Vector */}
      <div className="absolute top-[44px] left-[90px] ">
        <Image src="/Vector (1).png" alt="Vector 1" width={167} height={33} />
      </div>

      {/* Second Vector */}
      <div className="absolute top-[44px] left-[370px] ">
        <Image src="/Vector (2).png" alt="Vector 2" width={91} height={38} />
      </div>

      {/* Third Vector */}
      <div className="absolute top-[44px] left-[560px] ">
        <Image src="/Vector (3).png" alt="Vector 3" width={156} height={32} />
      </div>

      {/* Fourth Vector */}
      <div className="absolute top-[44px] left-[850px] ">
        <Image src="/prada-logo-1 1.png" alt="Prada" width={194} height={32} />
      </div>

      {/* Fifth Vector */}
      <div className="absolute top-[44px] left-[1150px]">
        <Image src="/Group (1).png" alt="Group" width={207} height={33} />
      </div>
    </div>
  );
}
