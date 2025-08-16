"use client";
import useRedirect from "@/hooks/useRedirect";
import { useEffect } from "react";

export default function Page() {
  const { GoHome } = useRedirect();

  useEffect(() => {
    GoHome();
  }, []);

  return <></>;
}
