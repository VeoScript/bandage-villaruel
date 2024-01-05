"use client";

import { useEffect } from "react";

import clsx from "clsx";

import type { RootState } from "~/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "~/redux/slices/features/toastSlice";
import { setWishlistCount, setWishlists } from "~/redux/slices/features/wishlistSlice";

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
    if (wishlists) {
      dispatch(setWishlistCount(wishlists.length));
    }

    return () => {};
  }, [wishlists, dispatch]);

  return (
    <button
      type="button"
      aria-label="Add to Wishlist"
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
        dispatch(
          toast({
            isShow: true,
            message: hasSaved
              ? "Removed to wishlist successfully!"
              : "Added to wishlist successfully!",
          }),
        );
      }}
    >
      {children}
    </button>
  );
}
