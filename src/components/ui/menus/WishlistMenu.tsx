"use client";

import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import type { RootState } from "~/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { removeWishlist, clearWishlists } from "~/redux/slices/features/wishlistSlice";

export default function WishlistMenu(): JSX.Element {
  const dispatch = useDispatch();

  const { wishlist_count, wishlists } = useSelector((state: RootState) => state.wishlist);

  return (
    <Popover className="relative">
      <Popover.Button className="flex flex-row items-center gap-x-1 text-accent-4 outline-none">
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_540_815)">
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
        <span className="font-semibold">{wishlist_count}</span>
      </Popover.Button>

      <Popover.Panel className="absolute z-10 top-10 right-0 flex flex-col items-start w-[30rem] overflow-hidden rounded-xl shadow-md border border-neutral-200 bg-accent-1">
        <div className="flex flex-row items-center justify-start w-full p-3">
          <h2 className="font-normal text-[12px] text-neutral-500">Your Wishlist</h2>
        </div>
        {wishlists.length == 0 ? (
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
            {wishlists.map(
              (wishlist: {
                id: string;
                image: string;
                title: string;
                price: string;
                quantity: number;
              }) => (
                <div
                  key={wishlist.id}
                  className="flex flex-row items-start justify-between w-full p-3 gap-x-5"
                >
                  <div className="relative w-[50px] h-[50px] overflow-hidden rounded-md">
                    <Image
                      fill
                      className="object-cover"
                      src={wishlist.image}
                      alt="Product thumbnail"
                      sizes="(max-width: 50px) 100vw, (max-width: 50px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL={wishlist.image}
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start gap-y-1">
                    <Link
                      href={`/products/${wishlist.id}`}
                      className="font-bold text-[16px] line-clamp-1 capitalize"
                    >
                      {wishlist.title}
                    </Link>
                    <h2 className="font-bold text-[14px] text-neutral-500">
                      $ {Number(wishlist.price).toFixed(2)}
                    </h2>
                  </div>
                  <button
                    type="button"
                    className="flex flex-row items-center justify-center w-10 h-10 outline-none rounded-full border border-neutral-200 bg-accent-1 hover:opacity-50"
                    onClick={() => {
                      dispatch(removeWishlist(wishlist.id as unknown as number));
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
        <div className="flex flex-row items-center justify-between w-full p-3 gap-x-3 border-t border-neutral-200">
          <div className="flex flex-row items-center gap-x-2">
            <button
              disabled={wishlists.length == 0}
              type="button"
              className={clsx(
                wishlists.length == 0 && "opacity-50",
                "px-3 py-1 rounded-md outline-none border border-neurtal-200 font-semibold text-[14px] text-accent-2",
              )}
              onClick={() => dispatch(clearWishlists())}
            >
              Clear All
            </button>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
