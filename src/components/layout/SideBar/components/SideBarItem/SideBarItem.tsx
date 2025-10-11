"use client";

import Accordion from "@/components/UI/Accordion/Accordion";
import { IRouteType } from "@/types/Routes.types";

import styles from "./styles.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import SideBarChildItem from "../SideBarChildItem/SideBarChildItem";

export default function SideBarItem({
  path,
  title,
  children,
  icon,
  onClick = () => {},
}: IRouteType) {
  const [expanded, setExpanded] = useState(false);

  const pathName = usePathname();
  const { push } = useRouter();

  return (
    <div
      className={` 
    ${pathName === path && styles.active} 
    ${styles.item}`}
      key={path}>
      <div
        className={styles.header}
        onClick={() => {
          children && setExpanded((prev) => !prev);
          onClick();
          path && push(path);
        }}>
        <span> {title} </span>
        {icon}
      </div>

      {children && (
        <Accordion state={expanded}>
          <div className={styles.body}>
            {children.map((item) => {
              if (item.shownSideBar)
                return (
                  <SideBarChildItem
                    {...item}
                    key={item.path}
                  />
                );
            })}
          </div>
        </Accordion>
      )}
    </div>
  );
}
