import Link from "next/link";

export default function CallToActionBanner() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[640px] bg-cover bg-[url('/images/image18.webp')]">
      <div className="flex flex-col items-center w-full max-w-xl gap-y-[30px]">
        <h2 className="font-semibold text-[14px] text-center text-accent-4">Designing Better Experience</h2>
        <h1 className="font-bold text-[40px] text-center">Problems trying to resolve the conflict between </h1>
        <p className="max-w-md font-normal text-[14px] text-center">
          Problems trying to resolve the conflict between the two major realms of Classical physics:{" "}
        </p>
        <h1 className="font-bold text-[24px] text-center text-accent-3">$16.48</h1>
        <Link
          href="/"
          className="font-bold text-[14px] text-center text-accent-1 uppercase px-10 py-5 rounded-xl bg-accent-4 hover:opacity-50"
        >
          Add your call to action
        </Link>
      </div>
    </div>
  );
}
