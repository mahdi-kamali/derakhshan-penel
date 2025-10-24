import styles from "./styles.module.scss";
import { useEffect } from "react";

interface IProps {
  children: React.ReactElement;
  title: string;
  isLoading?: boolean;
  center?: boolean;
}

export default function PageContainer({ children, title, center }: IProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);


  const classs = [styles.pageContainer , center && styles.center].join(" ")

  return (
    <div className={classs}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
