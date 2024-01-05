import Image from "next/image";

export default function ProductAbout(): JSX.Element {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-6xl px-10 md:px-5 py-10 gap-x-10 gap-y-10 md:gap-y-0">
      <div className="flex flex-col items-start w-full gap-y-10">
        <h1 className="font-bold text-[24px] capitalize">the quick fox jumps over</h1>
        <p className="font-normal text-[14px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
          consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </p>
        <p className="font-normal text-[14px] pl-6 border-l-4 border-accent-3">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
          consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </p>
        <p className="font-normal text-[14px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
          consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </p>
      </div>
      <div className="relative flex flex-col items-start w-full">
        <div className="relative w-full md:w-[413px] h-[372px]">
          <div className="absolute top-3 left-3 w-[413px] h-[372px] rounded-md bg-neutral-100" />
          <Image
            priority
            fill
            className="object-cover"
            src="/images/products/image4.webp"
            alt="Image4"
            sizes="(max-width: 413px) 100vw, (max-width: 413px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}
