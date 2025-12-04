import { IEducation } from "@/types/Career/applys/Applys.types";
import React from "react";
import styles from "./styles.module.scss";
import Status from "@/components/UI/Table/components/Cells/Status/Status";
import { EDUCATIONS_OPTIONS } from "@/types/Variables";
interface iProps {
  education: IEducation;
}

export default function Education(props: iProps) {
  const { education } = props;
  return (
    <div className={styles.education}>
      <h1>{education.fieldOfStudy}</h1>
      <div className={styles.rows}>
        <div className={styles.row}>
          <div className={styles.label}>مرکز آموزشی : </div>
          <div className={styles.value}>{education.institute}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>سطح : </div>
          <div className={styles.value}>
            <Status
              onChange={() => {}}
              options={EDUCATIONS_OPTIONS}
              value={education.level}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>معدل : </div>
          <div className={styles.value}>{education.gpa}</div>
        </div>
      </div>
    </div>
  );
}
