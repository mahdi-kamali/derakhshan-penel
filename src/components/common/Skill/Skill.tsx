import { IEducation, ISkill } from "@/types/Career/applys/Applys.types";
import React from "react";
import styles from "./styles.module.scss";
import Status from "@/components/UI/Table/components/Cells/Status/Status";
import { LEVELS_OPTIONS } from "@/types/Variables";
interface iProps {
  skill: ISkill;
}

export default function Skill(props: iProps) {
  const { skill } = props;
  return (
    <div className={styles.education}>
      <h1>{skill.name}</h1>
      <div className={styles.rows}>
        <div className={styles.row}>
          <div className={styles.label}>در سطح : </div>
          <div className={styles.value}>
            <Status
              options={LEVELS_OPTIONS}
              onChange={() => {}}
              value={skill.level}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
