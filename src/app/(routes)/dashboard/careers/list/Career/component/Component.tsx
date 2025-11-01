import { ShowQuestion } from "@/common/toast/toast";
import { IMAGE_URL } from "@/common/urls/urls";
import { Field, Grid, Group } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { UpdateCareerAPI } from "@/services/Careers/Careers.services";
import { ICareer } from "@/types/Career/Career.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { useMutation } from "@tanstack/react-query";

interface IProps {
  career: ICareer;
  showActions?: boolean;
  language: LanguagesENUM;
}
const Component = (props: IProps) => {
  const { language, career, showActions } = props;
  const values = career[language];

  const { mutate: UpdateCareer } = useMutation({
    mutationFn: UpdateCareerAPI,
    onSuccess(data, variables, context) {},
  });

  return (
    <Grid
      color='black'
      gap={"1rem"}
      padding={"2em 1em"}
      backgroundColor='rgba(0,0,0,0.1)'
      gridTemplateColumns={"1fr"}
      borderRadius={"1rem"}
      width={"20rem"}>
      <Grid>
        <img
          src={IMAGE_URL(values.image.path)}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "10rem",
            borderRadius: "1rem",
            aspectRatio: "1/1",
          }}
        />
      </Grid>
      <Grid gap={"0.5rem"}>
        <Grid
          fontSize={"1.5rem"}
          fontWeight={"bold"}>
          <p>{values.title}</p>
        </Grid>
        <Group
          header='مهارت ها'
          fontSize={"0.80rem"}>
          <Grid
            gap={"0.25rem"}
            padding={"0.5em 1em"}>
            {values.skills.map((skill) => {
              return <li>{skill}</li>;
            })}
          </Grid>
        </Group>
      </Grid>
      <Grid
        gridColumn={"-1/1"}
        fontSize={"0.8rem"}>
        <p>{values.description}</p>
      </Grid>
      <Grid>
        <Field.Switch
          name='type'
          icon={<Icon icon='material-symbols:type-specimen-rounded' />}
          onChange={(event) => {
            ShowQuestion({
              onConfirm() {
                const isChcked = event.isChecked;
                career[language].type = isChcked ? "SPECIAL" : "NORMAL";
                UpdateCareer(career);
              },
            });
          }}
          title={values.type === "NORMAL" ? "آگهی معمولی" : "آگهی ویژه"}
          value={values.type === "SPECIAL"}
          variant='light'
        />
      </Grid>
    </Grid>
  );
};

export default Component;
