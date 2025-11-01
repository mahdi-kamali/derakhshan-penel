import { ShowQuestion } from "@/common/toast/toast";
import { IMAGE_URL } from "@/common/urls/urls";
import { Button, Grid, Group } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import useRedirect from "@/hooks/useRedirect";
import {
  DeleteCareerByIDAPI,
  GetCareersAPI,
} from "@/services/Careers/Careers.services";
import { ICareer } from "@/types/Career/Career.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IProps {
  career: ICareer;
  showActions?: boolean;
}

export default function Career(props: IProps) {
  const { career, showActions = true } = props;

  const queryClient = useQueryClient();

  const { mutate: DeleteCareer } = useMutation({
    mutationFn: DeleteCareerByIDAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetCareersAPI.name],
      });
    },
  });

  const { admin } = useRedirect();

  const Component = (language: LanguagesENUM) => {
    const values = career[language];

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
      </Grid>
    );
  };

  return (
    <Group header={career.FA.title}>
      <Grid
        gridTemplateColumns={"1fr 1fr"}
        gap={"1rem"}>
        {Component(LanguagesENUM.FA)}
        {Component(LanguagesENUM.EN)}
        {showActions ? (
          <Grid
            gridColumn={"-1/1"}
            gridTemplateColumns={"1fr 1fr"}
            gap={"0.5rem"}
            width={"100%"}>
            <Button
              type='button'
              variant='warning'
              icon={<Icon icon='line-md:edit' />}
              onClick={() => admin.careers.edit(career._id)}
              title='ویرایش'
            />
            <Button
              type='button'
              variant='danger'
              icon={<Icon icon='line-md:edit' />}
              onClick={() => {
                ShowQuestion({
                  onConfirm() {
                    DeleteCareer(career._id!!);
                  },
                });
              }}
              title='حذف'
            />
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </Group>
  );
}
