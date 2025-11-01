import { Spinners } from "@/components/UI";
import styles from "./styles.module.scss";
import { useEffect } from "react";

interface IProps {
  children: React.ReactElement;
  title: string;
  isLoading?: boolean;
  center?: boolean;
}

export default function PageContainer({
  children,
  title,
  center,
  isLoading,
}: IProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const classs = [styles.pageContainer, center && styles.center].join(" ");

  return (
    <div className={classs}>
      <div className={styles.content}>{children}</div>
      {isLoading && (
        <div className={styles.isLoading}>
          <div className={styles.loader}>
            <Spinners.Shade />
            <span>در حال پردازش...</span>
          </div>
        </div>
      )}
    </div>
  );
}
