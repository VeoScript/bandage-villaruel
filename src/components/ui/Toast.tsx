"use client";

import { useEffect } from "react";

import { RootState } from "~/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "~/redux/slices/features/toastSlice";

export default function Toast(): JSX.Element {
  const dispatch = useDispatch();

  const { isShowToast, message } = useSelector((state: RootState) => state.toast);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(
        toast({
          isShow: false,
          message: "",
        }),
      );
    }, 3000);

    return () => clearTimeout(timeout);
  }, [dispatch, isShowToast]);

  return (
    <>
      {isShowToast && (
        <div className="fixed top-[50%] left-[50%] -translate-x-[50%] z-50 flex flex-col items-center justify-center w-auto max-w-xl h-auto p-5 rounded-xl text-white bg-black bg-opacity-70">
          <h3 className="font-bold text-[14px] text-center">{message}</h3>
        </div>
      )}
    </>
  );
}
