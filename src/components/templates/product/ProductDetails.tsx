import Link from "next/link";
import Image from "next/image";

import RateStars from "~/components/ui/RateStars";

export default function ProductDetails(): JSX.Element {
  return (
    <div className="flex flex-col items-center w-full h-full bg-[#FAFAFA]">
      <div className="flex flex-col items-center w-full max-w-6xl h-full gap-y-5">
        <div className="flex flex-row items-center w-full pt-5 gap-x-5">
          <Link href="/" className="font-bold text-[14px]">
            Home
          </Link>
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_541_574)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z"
                fill="#BDBDBD"
              />
            </g>
            <defs>
              <clipPath id="clip0_541_574">
                <rect width="9" height="16" fill="white" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>
          <button type="button" className="font-bold text-[14px] text-neutral-300">
            Shop
          </button>
        </div>
        <div className="flex flex-row items-start w-full h-full gap-x-5">
          <div className="flex flex-col w-full h-full gap-y-5">
            <div className="relative w-[506px] h-[450px]">
              <Image
                priority
                fill
                className="object-cover"
                src="/images/products/image1.webp"
                alt="Image1"
                sizes="(max-width: 506px) 100vw, (max-width: 506px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-row items-center justify-start w-full gap-x-5">
              <button type="button" className="outline-none hover:opacity-50">
                <div className="relative w-[100px] h-[75px]">
                  <Image
                    priority
                    fill
                    className="object-cover"
                    src="/images/products/image2.webp"
                    alt="Image2"
                    sizes="(max-width: 100px) 100vw, (max-width: 100px) 50vw, 33vw"
                  />
                </div>
              </button>
              <button type="button" className="outline-none hover:opacity-50">
                <div className="relative w-[100px] h-[75px]">
                  <Image
                    priority
                    fill
                    className="object-cover"
                    src="/images/products/image3.webp"
                    alt="Image3"
                    sizes="(max-width: 100px) 100vw, (max-width: 100px) 50vw, 33vw"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full h-[471px]">
            <div className="flex flex-col items-start w-full gap-y-5">
              <h1 className="font-normal text-[20px]">Floating Phone</h1>
              <div className="flex flex-row items-center justify-start gap-x-3">
                <RateStars />
                <p className="font-bold text-[14px] text-neutral-500">10 Reviews</p>
              </div>
              <h2 className="font-bold text-[24px] text-accent-2">$1,139.33</h2>
              <h3 className="font-bold text-[14px] text-neutral-500">
                Availability : <span className="text-accent-4">In Stock</span>
              </h3>
            </div>
            <div className="flex flex-col items-start w-full py-5 gap-y-10 border-t border-neutral-200">
              <div className="flex flex-row items-center justify-start w-full gap-x-3">
                <button
                  type="button"
                  className="w-8 h-8 outline-none rounded-full bg-blue-500 hover:opacity-50"
                />
                <button
                  type="button"
                  className="w-8 h-8 outline-none rounded-full bg-green-500 hover:opacity-50"
                />
                <button
                  type="button"
                  className="w-8 h-8 outline-none rounded-full bg-orange-500 hover:opacity-50"
                />
                <button
                  type="button"
                  className="w-8 h-8 outline-none rounded-full bg-accent-2 hover:opacity-50"
                />
              </div>
              <div className="flex flex-row items-center justify-start w-full gap-x-3">
                <button
                  type="button"
                  className="w-auto px-10 py-3 rounded-md font-bold text-[14px] text-white bg-accent-4 hover:opacity-50"
                >
                  Select Options
                </button>
                <button
                  type="button"
                  className="flex flex-row items-center justify-center w-10 h-10 outline-none rounded-full border border-neutral-200 bg-accent-1 hover:opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex flex-row items-center justify-center w-10 h-10 outline-none rounded-full border border-neutral-200 bg-accent-1 hover:opacity-50"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1.63333C0 1.46536 0.0667281 1.30427 0.185505 1.1855C0.304281 1.06673 0.465377 1 0.633353 1H2.53341C2.67469 1.00004 2.8119 1.04731 2.92322 1.1343C3.03454 1.22129 3.11357 1.34299 3.14776 1.48007L3.66078 3.53333H18.3672C18.4602 3.53342 18.5521 3.55398 18.6362 3.59356C18.7204 3.63315 18.7948 3.69077 18.8541 3.76235C18.9135 3.83393 18.9564 3.9177 18.9797 4.00772C19.0031 4.09774 19.0063 4.19179 18.9892 4.2832L17.0891 14.4165C17.062 14.5617 16.9849 14.6927 16.8714 14.7871C16.7578 14.8815 16.6148 14.9332 16.4672 14.9333H5.06682C4.91917 14.9332 4.7762 14.8815 4.66263 14.7871C4.54906 14.6927 4.47204 14.5617 4.44487 14.4165L2.54608 4.3022L2.0394 2.26667H0.633353C0.465377 2.26667 0.304281 2.19994 0.185505 2.08117C0.0667281 1.96239 0 1.8013 0 1.63333ZM3.92932 4.8L5.59251 13.6667H15.9415L17.6047 4.8H3.92932ZM6.33353 14.9333C5.66163 14.9333 5.01724 15.2002 4.54214 15.6753C4.06703 16.1504 3.80012 16.7948 3.80012 17.4667C3.80012 18.1385 4.06703 18.7829 4.54214 19.258C5.01724 19.7331 5.66163 20 6.33353 20C7.00543 20 7.64981 19.7331 8.12492 19.258C8.60003 18.7829 8.86694 18.1385 8.86694 17.4667C8.86694 16.7948 8.60003 16.1504 8.12492 15.6753C7.64981 15.2002 7.00543 14.9333 6.33353 14.9333ZM15.2005 14.9333C14.5286 14.9333 13.8842 15.2002 13.4091 15.6753C12.934 16.1504 12.6671 16.7948 12.6671 17.4667C12.6671 18.1385 12.934 18.7829 13.4091 19.258C13.8842 19.7331 14.5286 20 15.2005 20C15.8724 20 16.5168 19.7331 16.9919 19.258C17.467 18.7829 17.7339 18.1385 17.7339 17.4667C17.7339 16.7948 17.467 16.1504 16.9919 15.6753C16.5168 15.2002 15.8724 14.9333 15.2005 14.9333ZM6.33353 16.2C6.66948 16.2 6.99167 16.3335 7.22922 16.571C7.46678 16.8085 7.60023 17.1307 7.60023 17.4667C7.60023 17.8026 7.46678 18.1248 7.22922 18.3623C6.99167 18.5999 6.66948 18.7333 6.33353 18.7333C5.99758 18.7333 5.67539 18.5999 5.43783 18.3623C5.20028 18.1248 5.06682 17.8026 5.06682 17.4667C5.06682 17.1307 5.20028 16.8085 5.43783 16.571C5.67539 16.3335 5.99758 16.2 6.33353 16.2ZM15.2005 16.2C15.5364 16.2 15.8586 16.3335 16.0962 16.571C16.3337 16.8085 16.4672 17.1307 16.4672 17.4667C16.4672 17.8026 16.3337 18.1248 16.0962 18.3623C15.8586 18.5999 15.5364 18.7333 15.2005 18.7333C14.8645 18.7333 14.5423 18.5999 14.3048 18.3623C14.0672 18.1248 13.9338 17.8026 13.9338 17.4667C13.9338 17.1307 14.0672 16.8085 14.3048 16.571C14.5423 16.3335 14.8645 16.2 15.2005 16.2Z"
                      fill="#252B42"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex flex-row items-center justify-center w-10 h-10 outline-none rounded-full border border-neutral-200 bg-accent-1 hover:opacity-50"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10Z"
                      fill="black"
                    />
                    <path
                      d="M2 10C2 10 5 4.5 10 4.5C15 4.5 18 10 18 10C18 10 15 15.5 10 15.5C5 15.5 2 10 2 10ZM10 13.5C10.9283 13.5 11.8185 13.1313 12.4749 12.4749C13.1313 11.8185 13.5 10.9283 13.5 10C13.5 9.07174 13.1313 8.1815 12.4749 7.52513C11.8185 6.86875 10.9283 6.5 10 6.5C9.07174 6.5 8.1815 6.86875 7.52513 7.52513C6.86875 8.1815 6.5 9.07174 6.5 10C6.5 10.9283 6.86875 11.8185 7.52513 12.4749C8.1815 13.1313 9.07174 13.5 10 13.5Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-6xl p-10 gap-x-10 border-b border-neutral-200">
        <Link href="/" className="font-bold text-[14px] text-neutral-500">
          Description
        </Link>
        <Link href="/" className="font-bold text-[14px] text-neutral-500">
          Additional Information
        </Link>
        <Link href="/" className="font-bold text-[14px] text-neutral-500">
          Reviews <span className="text-green-600">(0)</span>
        </Link>
      </div>
    </div>
  );
}
