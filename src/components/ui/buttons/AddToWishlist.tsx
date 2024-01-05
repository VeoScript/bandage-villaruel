"use client";

import { useEffect } from "react";

import type { RootState } from "~/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setWishlistCount, setWishlists } from "~/redux/slices/features/wishlistSlice";
import clsx from "clsx";

interface AddToWishlistProps {
  id: string;
  image: string;
  title: string;
  price: number;
  className: string;
  children: React.ReactNode;
}

export default function AddToWishlist({
  id,
  image,
  title,
  price,
  className,
  children,
}: AddToWishlistProps): JSX.Element {
  const dispatch = useDispatch();

  const { wishlists } = useSelector((state: RootState) => state.wishlist);

  const hasSaved = wishlists.find((wishlist) => wishlist.id === id);

  useEffect(() => {
    if (wishlists.length) {
      dispatch(setWishlistCount(wishlists.length));
    }

    return () => {};
  }, [wishlists, dispatch]);

  return (
    <button
      type="button"
      className={clsx(hasSaved && "text-red-500 bg-red-100", className)}
      onClick={() => {
        dispatch(
          setWishlists([
            {
              id,
              image,
              title,
              price,
            },
          ]),
        );
      }}
    >
      {children}
    </button>
  );
}
