import { IMAGE_URL } from "@/common/urls/urls";
import { Grid, Group } from "@/components/UI";
import { ICareer } from "@/types/Career/Career.types";
import styles from "./styles.module.scss";
import Icon from "@/components/UI/Icon/Icon";
interface IProps {
  data: ICareer;
}

export default function JOB(props: IProps) {
  const { data } = props;

  return (
    <Grid
      gridTemplateColumns={"1fr 1fr"}
      gap={"1rem"}
      backgroundColor='rgba(0, 0, 0, 0.1)'
      padding={"1em"}
      borderRadius={"1rem"}>
      <Grid
        gridColumn={"-1/1"}
        gridTemplateColumns={"1fr 1fr"}
        gap={"1rem"}>
        <img
          className={styles.image}
          src={IMAGE_URL(data.image.path)}
        />
        <Group
          header='مهارت های مورد نیاز'
          padding={"1em 0"}
          maxHeight={"11rem"}
          overflow='auto'
          gap={"0.5rem"}>
          {data.skills.map((skill) => {
            return (
              <li className={styles.skill}>
                <Icon icon='vaadin:circle' />
                <span>{skill}</span>
              </li>
            );
          })}
        </Group>
      </Grid>
      <Grid
        gap={"0.5rem"}
        gridColumn={"-1/1"}>
        <h3>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
      </Grid>
    </Grid>
  );
}
