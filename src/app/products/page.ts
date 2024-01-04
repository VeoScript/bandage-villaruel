"use client"

import { useMemo } from "react";
import { useRouter } from "next/navigation";

export default function ProductIndex() {
  const router = useRouter();
  useMemo(() => {
    router.push("/");
  }, [router]);
}
