import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import Icon from "@/components/UI/Icon/Icon";
import useViewSize from "@/hooks/useViewSize";

interface IProps {
  showSideBar: boolean;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setShowSideBar, showSideBar }: IProps) {
  const { isDesktop, isMobile } = useViewSize();

  const [title, setTitle] = useState(document.title);

  useEffect(() => {
    setTitle(document.title);
  }, [document.title]);

  if (isDesktop) return <></>;

  return (
    <header className={styles.header}>
      <div className={styles.right}>
        <div
          className={styles.menu}
          onClick={() => setShowSideBar((prev) => !prev)}>
          <Icon icon='material-symbols:menu-rounded' />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.left}>
        <div className='logo'>
          <Image
            src={"/images/logo_auth.png"}
            alt=''
            width={50}
            height={50}
          />
        </div>
      </div>
    </header>
  );
}
