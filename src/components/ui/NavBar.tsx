import Link from "next/link";

export default function NavBar(): JSX.Element {
  return (
    <nav className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-between w-full px-6 py-3 text-white bg-accent-3">
        <div className="flex flex-row items-center justify-start w-full gap-x-10">
          <h3 className="flex flex-row items-center gap-x-1 font-semibold text-[14px]">
            <svg
              className="w-4 h-4"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span>(225) 555-0118</span>
          </h3>
          <h3 className="flex flex-row items-center gap-x-1 font-semibold text-[14px]">
            <svg
              className="w-4 h-4"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <span>michelle.rivera@example.com</span>
          </h3>
        </div>
        <div className="flex flex-row items-center justify-center w-full text-white">
          <h3 className="font-semibold text-[14px]">Follow Us and get a chance to win 80% off</h3>
        </div>
        <div className="flex flex-row items-center justify-end w-full gap-x-3 text-white">
          <h3 className="font-semibold text-[14px]">Follow Us :</h3>
          <Link href="https://www.facebook.com/" target="_blank">
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0C5.829 0 5.556 0.01 4.703 0.048C3.85 0.088 3.269 0.222 2.76 0.42C2.22609 0.620819 1.74249 0.935826 1.343 1.343C0.936076 1.7427 0.621107 2.22624 0.42 2.76C0.222 3.268 0.087 3.85 0.048 4.7C0.01 5.555 0 5.827 0 8.001C0 10.173 0.01 10.445 0.048 11.298C0.088 12.15 0.222 12.731 0.42 13.24C0.625 13.766 0.898 14.212 1.343 14.657C1.787 15.102 2.233 15.376 2.759 15.58C3.269 15.778 3.849 15.913 4.701 15.952C5.555 15.99 5.827 16 8 16C10.173 16 10.444 15.99 11.298 15.952C12.149 15.912 12.732 15.778 13.241 15.58C13.7746 15.3791 14.2578 15.0641 14.657 14.657C15.102 14.212 15.375 13.766 15.58 13.24C15.777 12.731 15.912 12.15 15.952 11.298C15.99 10.445 16 10.173 16 8C16 5.827 15.99 5.555 15.952 4.701C15.912 3.85 15.777 3.268 15.58 2.76C15.3789 2.22623 15.0639 1.74268 14.657 1.343C14.2576 0.935676 13.774 0.620645 13.24 0.42C12.73 0.222 12.148 0.087 11.297 0.048C10.443 0.01 10.172 0 7.998 0H8.001H8ZM7.283 1.442H8.001C10.137 1.442 10.39 1.449 11.233 1.488C12.013 1.523 12.437 1.654 12.719 1.763C13.092 1.908 13.359 2.082 13.639 2.362C13.919 2.642 14.092 2.908 14.237 3.282C14.347 3.563 14.477 3.987 14.512 4.767C14.551 5.61 14.559 5.863 14.559 7.998C14.559 10.133 14.551 10.387 14.512 11.23C14.477 12.01 14.346 12.433 14.237 12.715C14.1087 13.0624 13.904 13.3764 13.638 13.634C13.358 13.914 13.092 14.087 12.718 14.232C12.438 14.342 12.014 14.472 11.233 14.508C10.39 14.546 10.137 14.555 8.001 14.555C5.865 14.555 5.611 14.546 4.768 14.508C3.988 14.472 3.565 14.342 3.283 14.232C2.9355 14.1039 2.62113 13.8996 2.363 13.634C2.09675 13.376 1.89172 13.0617 1.763 12.714C1.654 12.433 1.523 12.009 1.488 11.229C1.45 10.386 1.442 10.133 1.442 7.996C1.442 5.86 1.45 5.608 1.488 4.765C1.524 3.985 1.654 3.561 1.764 3.279C1.909 2.906 2.083 2.639 2.363 2.359C2.643 2.079 2.909 1.906 3.283 1.761C3.565 1.651 3.988 1.521 4.768 1.485C5.506 1.451 5.792 1.441 7.283 1.44V1.442ZM12.271 2.77C12.1449 2.77 12.0201 2.79483 11.9036 2.84308C11.7872 2.89132 11.6813 2.96203 11.5922 3.05118C11.503 3.14032 11.4323 3.24615 11.3841 3.36262C11.3358 3.4791 11.311 3.60393 11.311 3.73C11.311 3.85607 11.3358 3.9809 11.3841 4.09738C11.4323 4.21385 11.503 4.31968 11.5922 4.40882C11.6813 4.49797 11.7872 4.56868 11.9036 4.61692C12.0201 4.66517 12.1449 4.69 12.271 4.69C12.5256 4.69 12.7698 4.58886 12.9498 4.40882C13.1299 4.22879 13.231 3.98461 13.231 3.73C13.231 3.47539 13.1299 3.23121 12.9498 3.05118C12.7698 2.87114 12.5256 2.77 12.271 2.77ZM8.001 3.892C7.45607 3.8835 6.91489 3.98349 6.40898 4.18614C5.90306 4.3888 5.44251 4.69007 5.05415 5.07242C4.66579 5.45478 4.35736 5.91057 4.14684 6.41326C3.93632 6.91595 3.8279 7.4555 3.8279 8.0005C3.8279 8.5455 3.93632 9.08505 4.14684 9.58774C4.35736 10.0904 4.66579 10.5462 5.05415 10.9286C5.44251 11.3109 5.90306 11.6122 6.40898 11.8149C6.91489 12.0175 7.45607 12.1175 8.001 12.109C9.07954 12.0922 10.1082 11.6519 10.865 10.8833C11.6217 10.1146 12.0459 9.07917 12.0459 8.0005C12.0459 6.92183 11.6217 5.88641 10.865 5.11775C10.1082 4.34909 9.07954 3.90883 8.001 3.892ZM8.001 5.333C8.70833 5.333 9.38669 5.61399 9.88685 6.11415C10.387 6.61431 10.668 7.29267 10.668 8C10.668 8.70733 10.387 9.38569 9.88685 9.88585C9.38669 10.386 8.70833 10.667 8.001 10.667C7.29367 10.667 6.61531 10.386 6.11515 9.88585C5.61499 9.38569 5.334 8.70733 5.334 8C5.334 7.29267 5.61499 6.61431 6.11515 6.11415C6.61531 5.61399 7.29367 5.333 8.001 5.333Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href="https://www.facebook.com/" target="_blank">
            <svg
              className="w-4 h-4"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_540_719)">
                <path
                  d="M9.051 1.99902H9.14C9.962 2.00202 14.127 2.03202 15.25 2.33402C15.5895 2.42619 15.8989 2.60585 16.1472 2.85503C16.3955 3.10422 16.574 3.41421 16.665 3.75402C16.766 4.13402 16.837 4.63702 16.885 5.15602L16.895 5.26002L16.917 5.52002L16.925 5.62402C16.99 6.53802 16.998 7.39402 16.999 7.58102V7.65602C16.998 7.85002 16.989 8.76402 16.917 9.71602L16.909 9.82102L16.9 9.92502C16.85 10.497 16.776 11.065 16.665 11.483C16.5743 11.823 16.3958 12.1331 16.1475 12.3823C15.8991 12.6316 15.5896 12.8111 15.25 12.903C14.09 13.215 9.681 13.237 9.07 13.238H8.928C8.619 13.238 7.341 13.232 6.001 13.186L5.831 13.18L5.744 13.176L5.573 13.169L5.402 13.162C4.292 13.113 3.235 13.034 2.748 12.902C2.40849 12.8102 2.09907 12.6308 1.85072 12.3818C1.60238 12.1327 1.42385 11.8228 1.333 11.483C1.222 11.066 1.148 10.497 1.098 9.92502L1.09 9.82002L1.082 9.71602C1.03265 9.03842 1.0053 8.3594 1 7.68002L1 7.55702C1.002 7.34202 1.01 6.59902 1.064 5.77902L1.071 5.67602L1.074 5.62402L1.082 5.52002L1.104 5.26002L1.114 5.15602C1.162 4.63702 1.233 4.13302 1.334 3.75402C1.42469 3.41407 1.60316 3.10393 1.85151 2.85471C2.09986 2.60548 2.40937 2.42592 2.749 2.33402C3.236 2.20402 4.293 2.12402 5.403 2.07402L5.573 2.06702L5.745 2.06102L5.831 2.05802L6.002 2.05102C6.95371 2.0204 7.90581 2.0034 8.858 2.00002H9.051V1.99902ZM7.4 5.20902V10.027L11.557 7.61902L7.4 5.20902Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_540_719">
                  <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="https://www.facebook.com/" target="_blank">
            <svg
              className="w-4 h-4"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_540_722)">
                <path
                  d="M16.002 8.05C16.002 3.604 12.42 0 8.002 0C3.582 0.001 0 3.604 0 8.051C0 12.068 2.926 15.398 6.75 16.002V10.377H4.72V8.051H6.752V6.276C6.752 4.259 7.947 3.145 9.774 3.145C10.65 3.145 11.565 3.302 11.565 3.302V5.282H10.556C9.563 5.282 9.253 5.903 9.253 6.54V8.05H11.471L11.117 10.376H9.252V16.001C13.076 15.397 16.002 12.067 16.002 8.05Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_540_722">
                  <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="https://www.facebook.com/" target="_blank">
            <svg
              className="w-4 h-4"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_540_725)">
                <path
                  d="M5.026 14.0007C11.064 14.0007 14.367 8.99769 14.367 4.66669C14.367 4.52669 14.367 4.38469 14.361 4.24469C15.0041 3.77918 15.5591 3.20284 16 2.54269C15.3993 2.80754 14.7628 2.9821 14.111 3.06069C14.7975 2.65033 15.3117 2.00466 15.558 1.24369C14.913 1.62582 14.207 1.89407 13.471 2.03669C12.9762 1.50972 12.3214 1.16061 11.6081 1.04345C10.8948 0.92629 10.1627 1.04761 9.52534 1.38863C8.88796 1.72965 8.38081 2.27132 8.08245 2.92975C7.78409 3.58818 7.71118 4.32663 7.875 5.03069C6.56974 4.96524 5.29282 4.62616 4.12704 4.03544C2.96127 3.44471 1.93268 2.61554 1.108 1.60169C0.68934 2.32478 0.561574 3.18009 0.750646 3.99396C0.939718 4.80782 1.43145 5.51922 2.126 5.98369C1.60554 5.96601 1.09652 5.82625 0.64 5.57569V5.62069C0.640897 6.37817 0.903307 7.11211 1.38287 7.69845C1.86244 8.28479 2.52975 8.68757 3.272 8.83869C2.99026 8.91631 2.69923 8.955 2.407 8.95369C2.20098 8.95432 1.99538 8.93523 1.793 8.89669C2.00279 9.54875 2.41127 10.1189 2.96125 10.5272C3.51122 10.9355 4.17513 11.1615 4.86 11.1737C3.69656 12.0875 2.2594 12.5831 0.78 12.5807C0.519321 12.5818 0.258823 12.5668 0 12.5357C1.50151 13.493 3.2453 14.0012 5.026 14.0007Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_540_725">
                  <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full px-6 py-3 text-accent-2 bg-accent-1">
        <div className="flex flex-row items-center justify-start w-full gap-x-[10rem]">
          <h3 className="font-bold text-[24px]">Bandage</h3>
          <ul className="flex flex-row items-center justify-center gap-x-5">
            <li>
              <Link className="font-semibold text-sm leading-[0.2px] text-neutral-500" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-sm leading-[0.2px] text-neutral-500" href="/">
                Shop
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-sm leading-[0.2px] text-neutral-500" href="/">
                About
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-sm leading-[0.2px] text-neutral-500" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-sm leading-[0.2px] text-neutral-500" href="/">
                Blog
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-sm leading-[0.2px] text-neutral-500" href="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center justify-end w-full gap-x-5">
          <Link
            href="/"
            className="flex flex-row items-center gap-x-1 font-semibold leading-[0.2px] text-[14px] text-accent-4"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span>Login / Register</span>
          </Link>
          <button type="button">
            <svg
              className="w-4 h-4 text-accent-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_540_804)">
                <path
                  d="M11.7426 10.3441C12.7109 9.02279 13.1446 7.38459 12.9569 5.75725C12.7692 4.12991 11.974 2.63344 10.7304 1.56723C9.48671 0.501022 7.88634 -0.0562959 6.24943 0.00677721C4.61252 0.0698504 3.05978 0.748663 1.90186 1.90741C0.743944 3.06615 0.0662432 4.61938 0.00434136 6.25633C-0.0575605 7.89329 0.500902 9.49326 1.568 10.7361C2.6351 11.979 4.13214 12.7732 5.75961 12.9597C7.38709 13.1462 9.02497 12.7113 10.3456 11.7421H10.3446C10.3746 11.7821 10.4066 11.8201 10.4426 11.8571L14.2926 15.7071C14.4801 15.8947 14.7345 16.0002 14.9997 16.0003C15.265 16.0004 15.5195 15.8951 15.7071 15.7076C15.8947 15.5201 16.0002 15.2657 16.0003 15.0005C16.0004 14.7352 15.8951 14.4807 15.7076 14.2931L11.8576 10.4431C11.8218 10.4069 11.7834 10.3735 11.7426 10.3431V10.3441ZM12.0006 6.5001C12.0006 7.22237 11.8583 7.93757 11.5819 8.60486C11.3055 9.27215 10.9004 9.87847 10.3897 10.3892C9.87896 10.8999 9.27264 11.305 8.60535 11.5814C7.93806 11.8578 7.22286 12.0001 6.50059 12.0001C5.77832 12.0001 5.06312 11.8578 4.39583 11.5814C3.72854 11.305 3.12223 10.8999 2.61151 10.3892C2.10078 9.87847 1.69566 9.27215 1.41926 8.60486C1.14285 7.93757 1.00059 7.22237 1.00059 6.5001C1.00059 5.04141 1.58006 3.64246 2.61151 2.61101C3.64296 1.57956 5.0419 1.0001 6.50059 1.0001C7.95928 1.0001 9.35823 1.57956 10.3897 2.61101C11.4211 3.64246 12.0006 5.04141 12.0006 6.5001Z"
                  fill="#23A6F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_540_804">
                  <rect
                    width="16.0006"
                    height="16.0003"
                    fill="white"
                    transform="translate(-0.000305176)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <Link href="/cart" className="flex flex-row items-center gap-x-1 text-accent-4">
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_540_809)">
                <path
                  d="M0.000305176 1.5C0.000305176 1.36739 0.0529836 1.24021 0.146752 1.14645C0.24052 1.05268 0.367697 1 0.500305 1H2.00031C2.11184 1.00003 2.22016 1.03735 2.30804 1.10602C2.39592 1.1747 2.45831 1.27078 2.48531 1.379L2.89031 3H14.5003C14.5737 3.00007 14.6462 3.0163 14.7127 3.04755C14.7791 3.0788 14.8378 3.12429 14.8847 3.1808C14.9316 3.23731 14.9654 3.30345 14.9838 3.37452C15.0023 3.44558 15.0048 3.51984 14.9913 3.592L13.4913 11.592C13.4699 11.7066 13.409 11.8101 13.3194 11.8846C13.2297 11.9591 13.1169 11.9999 13.0003 12H4.00031C3.88374 11.9999 3.77087 11.9591 3.68122 11.8846C3.59156 11.8101 3.53075 11.7066 3.50931 11.592L2.01031 3.607L1.61031 2H0.500305C0.367697 2 0.24052 1.94732 0.146752 1.85355C0.0529836 1.75979 0.000305176 1.63261 0.000305176 1.5ZM3.10231 4L4.41531 11H12.5853L13.8983 4H3.10231ZM5.00031 12C4.46987 12 3.96116 12.2107 3.58609 12.5858C3.21102 12.9609 3.00031 13.4696 3.00031 14C3.00031 14.5304 3.21102 15.0391 3.58609 15.4142C3.96116 15.7893 4.46987 16 5.00031 16C5.53074 16 6.03945 15.7893 6.41452 15.4142C6.78959 15.0391 7.00031 14.5304 7.00031 14C7.00031 13.4696 6.78959 12.9609 6.41452 12.5858C6.03945 12.2107 5.53074 12 5.00031 12ZM12.0003 12C11.4699 12 10.9612 12.2107 10.5861 12.5858C10.211 12.9609 10.0003 13.4696 10.0003 14C10.0003 14.5304 10.211 15.0391 10.5861 15.4142C10.9612 15.7893 11.4699 16 12.0003 16C12.5307 16 13.0394 15.7893 13.4145 15.4142C13.7896 15.0391 14.0003 14.5304 14.0003 14C14.0003 13.4696 13.7896 12.9609 13.4145 12.5858C13.0394 12.2107 12.5307 12 12.0003 12ZM5.00031 13C5.26552 13 5.51988 13.1054 5.70741 13.2929C5.89495 13.4804 6.00031 13.7348 6.00031 14C6.00031 14.2652 5.89495 14.5196 5.70741 14.7071C5.51988 14.8946 5.26552 15 5.00031 15C4.73509 15 4.48073 14.8946 4.2932 14.7071C4.10566 14.5196 4.00031 14.2652 4.00031 14C4.00031 13.7348 4.10566 13.4804 4.2932 13.2929C4.48073 13.1054 4.73509 13 5.00031 13ZM12.0003 13C12.2655 13 12.5199 13.1054 12.7074 13.2929C12.8949 13.4804 13.0003 13.7348 13.0003 14C13.0003 14.2652 12.8949 14.5196 12.7074 14.7071C12.5199 14.8946 12.2655 15 12.0003 15C11.7351 15 11.4807 14.8946 11.2932 14.7071C11.1057 14.5196 11.0003 14.2652 11.0003 14C11.0003 13.7348 11.1057 13.4804 11.2932 13.2929C11.4807 13.1054 11.7351 13 12.0003 13Z"
                  fill="#23A6F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_540_809">
                  <rect width="16" height="16" fill="white" transform="translate(0.000305176)" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-semibold">1</span>
          </Link>
          <Link href="/wishlist" className="flex flex-row items-center gap-x-1 text-accent-4">
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_540_815)">
                <path
                  d="M8.0002 2.74805L7.2832 2.01105C5.6002 0.281049 2.5142 0.878049 1.4002 3.05305C0.8772 4.07605 0.7592 5.55305 1.7142 7.43805C2.6342 9.25305 4.5482 11.427 8.0002 13.795C11.4522 11.427 13.3652 9.25305 14.2862 7.43805C15.2412 5.55205 15.1242 4.07605 14.6002 3.05305C13.4862 0.878049 10.4002 0.280049 8.7172 2.01005L8.0002 2.74805ZM8.0002 15C-7.3328 4.86805 3.2792 -3.03995 7.8242 1.14305C7.8842 1.19805 7.9432 1.25505 8.0002 1.31405C8.05662 1.2551 8.11533 1.19839 8.1762 1.14405C12.7202 -3.04195 23.3332 4.86705 8.0002 15Z"
                  fill="#23A6F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_540_815">
                  <rect width="16" height="16" fill="white" transform="translate(0.000305176)" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-semibold">1</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
