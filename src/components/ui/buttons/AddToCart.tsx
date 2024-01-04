"use client";

import { useEffect } from "react";

import type { RootState } from "~/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setCartCount, setCarts } from "~/redux/slices/features/cartSlice";

interface AddToCartProps {
  id: string;
  image: string;
  title: string;
  quantity: number;
  className: string;
  children: React.ReactNode;
}

export default function AddToCart({
  id,
  image,
  title,
  quantity,
  className,
  children,
}: AddToCartProps): JSX.Element {
  const dispatch = useDispatch();

  const { carts } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (carts.length) {
      dispatch(setCartCount(carts.length));
    }

    return () => {};
  }, [carts, dispatch]);

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        dispatch(
          setCarts([
            {
              id,
              image,
              title,
              quantity,
            },
          ]),
        );
      }}
    >
      {children}
    </button>
  );
}
