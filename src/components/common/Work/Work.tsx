import { IEducation, IWork } from "@/types/Career/applys/Applys.types";
import React from "react";
import styles from "./styles.module.scss";
interface iProps {
  work: IWork;
}

export default function Work(props: iProps) {
  const { work } = props;
  return (
    <div className={styles.education}>
      <h1>{work.role}</h1>
      <div className={styles.rows}>
        <div className={styles.row}>
          <div className={styles.label}> شرکت یا محیط کار: </div>
          <div className={styles.value}>{work.organization}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}> سابقه ( ماه )</div>
          <div className={styles.value}>{work.duration} ماه</div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>دلیل خروج : </div>
          <div className={styles.value}>{work.terminationReason}</div>
        </div>
      </div>
    </div>
  );
}
