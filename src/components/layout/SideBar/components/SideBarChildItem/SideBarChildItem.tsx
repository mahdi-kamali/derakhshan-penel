import { IRouteType } from "@/types/Routes.types";
import Link from "next/link";

import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "@/components/UI/Icon/Icon";

export default function SideBarChildItem({ path, title }: IRouteType) {
  const [expanded, setExpanded] = useState(false);
  const pathName = usePathname();

  if (!path) return <>لینک تعریف نشده</>;

  return (
    <Link
      className={` 
    ${pathName.includes(path) && styles.active} 
    ${styles.item}`}
      href={path}
      key={path}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <div className={styles.header}>
        <span> {title} </span>
        <Icon icon="material-symbols:circle" />
      </div>
    </Link>
  );
}
