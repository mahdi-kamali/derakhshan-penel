"use client";
import { ShowError } from "@/common/toast/toast";
import useRedirect from "@/hooks/useRedirect";
import useRootState from "@/hooks/useRootState";
import { usePathname } from "next/navigation";

interface IProps {
  children: React.ReactElement;
}

export default function AdminProvider(props: IProps) {
  const { user } = useRootState();
  const path = usePathname();
  const { GoLogin } = useRedirect();

  
  const { children } = props;


  
  if (user.token === undefined) {
    if (path.includes("/auth/login")) return children;
    ShowError("لطفا وارد حساب کاربریتان شوید!");
    GoLogin();
    return <></>;
  }

  return children;
}
