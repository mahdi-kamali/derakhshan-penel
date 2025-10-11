"use client";
import Header from "@/components/layout/Header/Header";
import styles from "./styles.module.scss";
import SideBar from "@/components/layout/SideBar/SideBar";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className={styles.container}>
      <Header
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
      />
      <SideBar
        className={styles.sideBar}
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
      />
      <div className={styles.page}>{children}</div>
    </div>
  );
}
