"use client";

import styles from "./styles.module.scss";
import SideBarItem from "./components/SideBarItem/SideBarItem";
import Grid from "@/components/UI/grid/Grid";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import useAppRouter from "@/routes/AppRoutes";
import { usePathname } from "next/navigation";
import Icon from "@/components/UI/Icon/Icon";
import { UserActions } from "@/@redux/user/user.actions";

interface ISideBarProps {
  className: string;
  showSideBar: boolean;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
}

export default function SideBar({
  className,
  setShowSideBar,
  showSideBar,
}: ISideBarProps) {
  const pathname = usePathname();

  const { routes } = useAppRouter();

  const { logout } = UserActions;

  const classs = [
    styles.sideBar,
    className,
    showSideBar && styles.showSideBar,
  ].join(" ");

  // Close sidebar when clicking outside
  const sideBarRef = useRef<any>();
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node)
      ) {
        setShowSideBar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setShowSideBar(false);
  }, [pathname]);

  return (
    <aside
      className={classs}
      ref={sideBarRef}>
      <div className={styles.logo}>
        <img src='/images/layout/logo.png' />
      </div>

      <div className={styles.menu}>
        {routes.map((route) => {
          if (route.shownSideBar == false) return <></>;
          return (
            <SideBarItem
              {...route}
              key={route.path}
            />
          );
        })}
      </div>

      <div className={styles.logout}>
        <button onClick={() => logout()}>
          <span>خروج</span>
          <span>
            <Icon icon='line-md:logout' />
          </span>
        </button>
        <p>اگر قصد خروج از پنل مدریتی را دارید کلیک کنید.</p>
      </div>
    </aside>
  );
}
