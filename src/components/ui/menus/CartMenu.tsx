"use client";

import { Popover } from "@headlessui/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import type { RootState } from "~/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "~/redux/slices/features/toastSlice";
import {
  changeQuantity,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
  clearCart,
} from "~/redux/slices/features/cartSlice";

interface CartMenuProps {
  className?: string;
  iconClassName?: string;
}

export default function CartMenu({ className, iconClassName }: CartMenuProps): JSX.Element {
  const pathname = usePathname();

  const dispatch = useDispatch();

  const { cart_count, carts, totalAmount } = useSelector((state: RootState) => state.cart);

  return (
    <Popover className="static md:relative">
      <Popover.Button
        className={clsx(
          className ? className : "flex flex-row items-center gap-x-1 text-accent-4 outline-none",
        )}
      >
        <div className="relative">
          <p
            className={clsx(
              cart_count === 0 ? "hidden" : "flex",
              "absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-600",
            )}
          />
          <svg
            className={iconClassName ? iconClassName : "w-4 h-4 fill-current"}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_540_809)">
              <path d="M0.000305176 1.5C0.000305176 1.36739 0.0529836 1.24021 0.146752 1.14645C0.24052 1.05268 0.367697 1 0.500305 1H2.00031C2.11184 1.00003 2.22016 1.03735 2.30804 1.10602C2.39592 1.1747 2.45831 1.27078 2.48531 1.379L2.89031 3H14.5003C14.5737 3.00007 14.6462 3.0163 14.7127 3.04755C14.7791 3.0788 14.8378 3.12429 14.8847 3.1808C14.9316 3.23731 14.9654 3.30345 14.9838 3.37452C15.0023 3.44558 15.0048 3.51984 14.9913 3.592L13.4913 11.592C13.4699 11.7066 13.409 11.8101 13.3194 11.8846C13.2297 11.9591 13.1169 11.9999 13.0003 12H4.00031C3.88374 11.9999 3.77087 11.9591 3.68122 11.8846C3.59156 11.8101 3.53075 11.7066 3.50931 11.592L2.01031 3.607L1.61031 2H0.500305C0.367697 2 0.24052 1.94732 0.146752 1.85355C0.0529836 1.75979 0.000305176 1.63261 0.000305176 1.5ZM3.10231 4L4.41531 11H12.5853L13.8983 4H3.10231ZM5.00031 12C4.46987 12 3.96116 12.2107 3.58609 12.5858C3.21102 12.9609 3.00031 13.4696 3.00031 14C3.00031 14.5304 3.21102 15.0391 3.58609 15.4142C3.96116 15.7893 4.46987 16 5.00031 16C5.53074 16 6.03945 15.7893 6.41452 15.4142C6.78959 15.0391 7.00031 14.5304 7.00031 14C7.00031 13.4696 6.78959 12.9609 6.41452 12.5858C6.03945 12.2107 5.53074 12 5.00031 12ZM12.0003 12C11.4699 12 10.9612 12.2107 10.5861 12.5858C10.211 12.9609 10.0003 13.4696 10.0003 14C10.0003 14.5304 10.211 15.0391 10.5861 15.4142C10.9612 15.7893 11.4699 16 12.0003 16C12.5307 16 13.0394 15.7893 13.4145 15.4142C13.7896 15.0391 14.0003 14.5304 14.0003 14C14.0003 13.4696 13.7896 12.9609 13.4145 12.5858C13.0394 12.2107 12.5307 12 12.0003 12ZM5.00031 13C5.26552 13 5.51988 13.1054 5.70741 13.2929C5.89495 13.4804 6.00031 13.7348 6.00031 14C6.00031 14.2652 5.89495 14.5196 5.70741 14.7071C5.51988 14.8946 5.26552 15 5.00031 15C4.73509 15 4.48073 14.8946 4.2932 14.7071C4.10566 14.5196 4.00031 14.2652 4.00031 14C4.00031 13.7348 4.10566 13.4804 4.2932 13.2929C4.48073 13.1054 4.73509 13 5.00031 13ZM12.0003 13C12.2655 13 12.5199 13.1054 12.7074 13.2929C12.8949 13.4804 13.0003 13.7348 13.0003 14C13.0003 14.2652 12.8949 14.5196 12.7074 14.7071C12.5199 14.8946 12.2655 15 12.0003 15C11.7351 15 11.4807 14.8946 11.2932 14.7071C11.1057 14.5196 11.0003 14.2652 11.0003 14C11.0003 13.7348 11.1057 13.4804 11.2932 13.2929C11.4807 13.1054 11.7351 13 12.0003 13Z" />
            </g>
            <defs>
              <clipPath id="clip0_540_809">
                <rect width="16" height="16" fill="white" transform="translate(0.000305176)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="font-semibold">{cart_count}</p>
      </Popover.Button>

      <Popover.Panel className="absolute z-30 top-0 md:top-10 right-0 flex flex-col items-start justify-between md:justify-start w-screen h-screen md:w-[30rem] md:h-auto overflow-auto md:overflow-hidden rounded-xl shadow-md border border-neutral-200 bg-accent-1">
        <div className="flex flex-row items-center justify-between w-full p-3">
          <h2 className="font-normal text-[12px] text-neutral-500">Recently Added Products</h2>
          <Popover.Button as={Link} href={pathname} className="flex md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </Popover.Button>
        </div>
        <div className="flex flex-col items-center w-full h-full">
          {carts.length == 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-[10rem] gap-y-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-neutral-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="font-bold text-sm text-neutral-300">No Products Yet</p>
            </div>
          ) : (
            <>
              {carts.map(
                (cart: {
                  id: string;
                  image: string;
                  title: string;
                  price: string;
                  quantity: number;
                }) => (
                  <div
                    key={cart.id}
                    className="flex flex-row items-start justify-between w-full p-3 gap-x-5"
                  >
                    <div className="relative w-[50px] h-[50px] overflow-hidden rounded-md">
                      <Image
                        fill
                        className="object-cover"
                        src={cart.image}
                        alt="Product thumbnail"
                        sizes="(max-width: 50px) 100vw, (max-width: 50px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL={cart.image}
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start gap-y-1">
                      <Link
                        href={`/products/${cart.id}`}
                        className="font-bold text-[16px] line-clamp-1 capitalize"
                      >
                        {cart.title}
                      </Link>
                      <h2 className="font-bold text-[14px] text-neutral-500">
                        $ {Number(cart.price).toFixed(2)}
                      </h2>
                      <div className="flex flex-row items-center w-full gap-x-1">
                        <button
                          type="button"
                          className="flex flex-row items-center justify-center w-6 h-6 outline-none rounded-full border border-red-200 bg-accent-1 hover:opacity-50"
                          onClick={() => {
                            dispatch(decrementQuantity(cart.id as unknown as number));
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-red-500"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                          </svg>
                        </button>
                        <input
                          type="number"
                          className="w-[4rem] outline-none border border-neutral-200 rounded-md text-center"
                          min={1}
                          value={cart.quantity}
                          onChange={(e) => {
                            dispatch(
                              changeQuantity({
                                id: cart.id as unknown as number,
                                updatedQuantity:
                                  e.currentTarget.value === "" ? 1 : Number(e.currentTarget.value),
                              }),
                            );
                          }}
                        />
                        <button
                          type="button"
                          className="flex flex-row items-center justify-center w-6 h-6 outline-none rounded-full border border-blue-200 bg-accent-1 hover:opacity-50"
                          onClick={() => {
                            dispatch(incrementQuantity(cart.id as unknown as number));
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-blue-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="flex flex-row items-center justify-center w-10 h-10 outline-none rounded-full border border-neutral-200 bg-accent-1 hover:opacity-50"
                      onClick={() => {
                        dispatch(removeProduct(cart.id as unknown as number));
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-neutral-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                ),
              )}
            </>
          )}
        </div>
        <div className="flex flex-row items-center justify-between w-full p-3 gap-x-3 border-t border-neutral-200">
          <div className="flex flex-row items-center justify-start w-full gap-x-1">
            <h2 className="font-normal text-[12px] text-neutral-500">Total Amount:</h2>
            <h2 className="font-bold text-[14px]">${Number(totalAmount).toFixed(2)}</h2>
          </div>
          <div className="flex flex-row items-center justify-end w-full gap-x-2">
            <button
              disabled={carts.length == 0}
              type="button"
              className={clsx(
                carts.length == 0 && "opacity-50",
                "px-3 py-1 rounded-md outline-none border border-neurtal-200 font-semibold text-[12px] md:text-[14px] text-accent-2",
              )}
              onClick={() => dispatch(clearCart())}
            >
              Clear All
            </button>
            <button
              disabled={carts.length == 0}
              type="button"
              className={clsx(
                carts.length == 0 && "opacity-50",
                "px-3 py-1 rounded-md outline-none border border-neurtal-200 font-semibold text-[12px] md:text-[14px] text-white bg-accent-4",
              )}
              onClick={() => {
                dispatch(
                  toast({
                    isShow: true,
                    message: "Checkout Successfully!",
                  }),
                );
                dispatch(clearCart());
              }}
            >
              Check out
            </button>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
