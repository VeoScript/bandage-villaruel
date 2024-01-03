export default function BestServices(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl h-screen p-5 gap-y-[5rem]">
      <div className="flex flex-col items-center w-full gap-y-3">
        <h2 className="font-normal text-[20px] text-neutral-500">Featured Products</h2>
        <h2 className="font-bold text-[24px] text-accent-2 uppercase">The Best Services</h2>
        <h2 className="font-normal text-[14px] text-neutral-500">
          Problems trying to resolve the conflict between
        </h2>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col items-center w-[315px] gap-y-3">
          <svg
            className="w-[72px] h-[72px]"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 24V58.587C6 58.587 19.863 58.071 36 66C52.137 58.071 66 58.587 66 58.587V24C66 24 49.638 24 36 31.413C22.362 24 6 24 6 24Z"
              fill="#23A6F0"
            />
            <path
              d="M36 24C40.9706 24 45 19.9706 45 15C45 10.0294 40.9706 6 36 6C31.0294 6 27 10.0294 27 15C27 19.9706 31.0294 24 36 24Z"
              fill="#23A6F0"
            />
          </svg>
          <h2 className="font-bold text-[24px]">Easy Wins</h2>
          <h3 className="font-normal text-[14px] text-center text-neutral-500">
            Get your best looking smile now!
          </h3>
        </div>
        <div className="flex flex-col items-center w-[315px] gap-y-3">
          <svg
            className="w-[72px] h-[72px]"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.75 22.5H58.5V27H42.75V22.5Z" fill="#23A6F0" />
            <path d="M42.75 33.75H58.5V38.25H42.75V33.75Z" fill="#23A6F0" />
            <path d="M42.75 45H58.5V49.5H42.75V45Z" fill="#23A6F0" />
            <path d="M13.5 22.5H29.25V27H13.5V22.5Z" fill="#23A6F0" />
            <path d="M13.5 33.75H29.25V38.25H13.5V33.75Z" fill="#23A6F0" />
            <path d="M13.5 45H29.25V49.5H13.5V45Z" fill="#23A6F0" />
            <path
              d="M63 11.25H9C7.80689 11.2512 6.66299 11.7257 5.81934 12.5693C4.97568 13.413 4.50119 14.5569 4.5 15.75V56.25C4.50119 57.4431 4.97568 58.587 5.81934 59.4307C6.66299 60.2743 7.80689 60.7488 9 60.75H63C64.1931 60.7488 65.337 60.2743 66.1807 59.4307C67.0243 58.587 67.4988 57.4431 67.5 56.25V15.75C67.4988 14.5569 67.0243 13.413 66.1807 12.5693C65.337 11.7257 64.1931 11.2512 63 11.25ZM9 15.75H33.75V56.25H9V15.75ZM38.25 56.25V15.75H63V56.25H38.25Z"
              fill="#23A6F0"
            />
          </svg>
          <h2 className="font-bold text-[24px]">Concrete</h2>
          <h3 className="font-normal text-[14px] text-center text-neutral-500">
            Defalcate is most focused in helping you discover your most beautiful smile
          </h3>
        </div>
        <div className="flex flex-col items-center w-[315px] gap-y-3">
          <svg
            className="w-[72px] h-[72px]"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.7599 19.86C65.4555 19.127 64.8729 18.5444 64.1399 18.24C63.7792 18.0863 63.3919 18.0047 62.9999 18H47.9999C47.2042 18 46.4412 18.3161 45.8786 18.8787C45.3159 19.4413 44.9999 20.2044 44.9999 21C44.9999 21.7956 45.3159 22.5587 45.8786 23.1213C46.4412 23.6839 47.2042 24 47.9999 24H55.7699L38.9999 40.77L29.1299 30.87C28.851 30.5888 28.5192 30.3656 28.1536 30.2133C27.788 30.061 27.3959 29.9826 26.9999 29.9826C26.6038 29.9826 26.2117 30.061 25.8461 30.2133C25.4806 30.3656 25.1488 30.5888 24.8699 30.87L6.86988 48.87C6.58869 49.1489 6.36551 49.4807 6.2132 49.8463C6.0609 50.2118 5.98248 50.604 5.98248 51C5.98248 51.396 6.0609 51.7882 6.2132 52.1537C6.36551 52.5193 6.58869 52.8511 6.86988 53.13C7.14877 53.4112 7.48057 53.6344 7.84615 53.7867C8.21173 53.939 8.60384 54.0174 8.99988 54.0174C9.39591 54.0174 9.78803 53.939 10.1536 53.7867C10.5192 53.6344 10.851 53.4112 11.1299 53.13L26.9999 37.23L36.8699 47.13C37.1488 47.4112 37.4806 47.6344 37.8461 47.7867C38.2117 47.939 38.6038 48.0174 38.9999 48.0174C39.3959 48.0174 39.788 47.939 40.1536 47.7867C40.5192 47.6344 40.851 47.4112 41.1299 47.13L59.9999 28.23V36C59.9999 36.7956 60.3159 37.5587 60.8786 38.1213C61.4412 38.6839 62.2042 39 62.9999 39C63.7955 39 64.5586 38.6839 65.1212 38.1213C65.6838 37.5587 65.9999 36.7956 65.9999 36V21C65.9951 20.608 65.9136 20.2207 65.7599 19.86Z"
              fill="#23A6F0"
            />
          </svg>
          <h2 className="font-bold text-[24px]">Hack Growth</h2>
          <h3 className="font-normal text-[14px] text-center text-neutral-500">
            Overcame any hurdle or any other problem.
          </h3>
        </div>
      </div>
    </div>
  );
}
