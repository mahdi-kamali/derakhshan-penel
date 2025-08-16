"use client";
import useRedirect from "@/hooks/useRedirect";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  const redirect = useRedirect();
  useEffect(() => {
    redirect.admin.GoHome();
  }, []);
  return <div></div>;
}
