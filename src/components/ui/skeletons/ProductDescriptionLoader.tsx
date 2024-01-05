export default function ProductDescriptionLoader(): JSX.Element {
  return (
    <div className="flex flex-col items-center w-full h-full bg-[#FAFAFA]">
      <div className="flex flex-col items-center w-full max-w-6xl h-full gap-y-5">
        <div className="flex flex-row items-center w-full pt-5 gap-x-5">
          <div className="w-[10rem] h-[1rem] bg-neutral-300 animate-pulse" />
        </div>
        <div className="flex flex-row items-start w-full h-full gap-x-5">
          <div className="flex flex-col w-full h-full gap-y-5">
            <div className="relative w-[506px] h-[450px] bg-neutral-300" />
            <div className="flex flex-row items-center justify-start w-full max-w-[506px] gap-x-5 overflow-y-auto">
              <div className="relative w-[100px] h-[75px] bg-neutral-300" />
              <div className="relative w-[100px] h-[75px] bg-neutral-300" />
              <div className="relative w-[100px] h-[75px] bg-neutral-300" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full h-[471px]">
            <div className="flex flex-col items-start w-full gap-y-5">
              <div className="w-full h-[2rem] bg-neutral-300 animate-pulse" />
              <div className="w-1/2 h-[2rem] bg-neutral-300 animate-pulse" />
              <div className="w-1/3 h-[2rem] bg-neutral-300 animate-pulse" />
              <div className="w-1/3 h-[2rem] bg-neutral-300 animate-pulse" />
            </div>
            <div className="flex flex-col items-start w-full py-5 gap-y-10 border-t border-neutral-200">
              <div className="flex flex-row items-center justify-start w-full gap-x-3">
                <div className="w-[10rem] h-[3rem] bg-neutral-300 animate-pulse" />
              </div>
              <div className="flex flex-row items-center justify-start w-full gap-x-3">
                <div className="w-full h-[3rem] bg-neutral-300 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-6xl p-10 gap-x-10 border-b border-neutral-200">
        <div className="w-[10rem] h-[2rem] bg-neutral-300 animate-pulse" />
        <div className="w-[10rem] h-[2rem] bg-neutral-300 animate-pulse" />
        <div className="w-[10rem] h-[2rem] bg-neutral-300 animate-pulse" />
      </div>
    </div>
  );
}
