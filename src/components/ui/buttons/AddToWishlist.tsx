"use client";

import { useEffect } from "react";

import type { RootState } from "~/redux/store";
import { useSelector, useDispatch } from "react-redux";
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

  useEffect(() => {
    if (wishlists.length) {
      dispatch(setWishlistCount(wishlists.length));
    }

    return () => {};
  }, [wishlists, dispatch]);

  return (
    <button
      type="button"
      className={className}
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
