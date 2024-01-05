import { useEffect } from "react";

import { RootState } from "~/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setIsLazyLoad } from "~/redux/slices/features/lazyloadSlice";

export const useLazyLoadOnScroll = (): boolean => {
  const dispatch = useDispatch();

  const { isLazyLoad } = useSelector((state: RootState) => state.lazyloadSlice);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setIsLazyLoad(true));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, isLazyLoad]);

  return isLazyLoad;
};
