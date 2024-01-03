import Image from "next/image";
import RateStars from "../ui/RateStars";

export default function Testimony() {
  return (
    <div className="flex flex-row items-center justify-center w-full max-w-6xl h-screen p-5 gap-y-[5rem]">
      <div className="flex flex-col items-center w-full max-w-full gap-y-10">
        <h1 className="font-bold text-[24px]">What they say about us</h1>
        <div className="flex flex-col items-center w-full gap-y-5">
          <div className="relative w-[90px] h-[90px]">
            <Image priority fill className="object-fill" src="/images/avatar1.webp" alt="Avatar1" />
          </div>
          <RateStars />
          <p className="w-full max-w-sm font-semibold text-[14px] text-center text-neutral-500">
            Slate helps you see how many more days you need to work to reach your financial goal.
          </p>
          <div className="flex flex-col items-center w-full gap-y-1">
            <h2 className="font-semibold text-[14px] text-accent-4">Regina Miles</h2>
            <h3 className="font-semibold text-[14px]">Designer</h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-items-end w-full max-w-full gap-3">
        <div className="relative w-full h-[130px]">
          <Image priority fill className="object-cover" src="/images/image8.webp" alt="Image8" />
        </div>
        <div className="relative w-full h-[130px]">
          <Image priority fill className="object-cover" src="/images/image17.webp" alt="Image17" />
        </div>
        <div className="relative w-full h-[130px]">
          <Image priority fill className="object-cover" src="/images/image10.webp" alt="Image10" />
        </div>
        <div className="relative w-full h-[130px]">
          <Image priority fill className="object-cover" src="/images/image11.webp" alt="Image11" />
        </div>
        <div className="relative w-full h-[130px]">
          <Image priority fill className="object-cover" src="/images/image12.webp" alt="Image12" />
        </div>
        <div className="relative w-full h-[130px]">
          <Image priority fill className="object-cover" src="/images/image13.webp" alt="Image13" />
        </div>
        <div className="relative w-full h-[130px]">
          <Image priority fill className="object-cover" src="/images/image14.webp" alt="Image14" />
        </div>
        <div className="relative w-full h-[130px]">
          <Image priority fill className="object-cover" src="/images/image15.webp" alt="Image15" />
        </div>
        <div className="relative w-full h-[130px]">
          <Image priority fill className="object-cover" src="/images/image16.webp" alt="Image16" />
        </div>
      </div>
    </div>
  );
}
