import styles from "./styles.module.scss";
import { useEffect } from "react";

interface IProps {
  children: React.ReactElement;
  title: string;
  isLoading?: boolean;
}

export default function PageContainer({ children, title, isLoading }: IProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);


  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
