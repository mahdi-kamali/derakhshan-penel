import { ShowQuestion } from "@/common/toast/toast";
import { IMAGE_URL } from "@/common/urls/urls";
import { Button, Field, Grid, Group } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import useRedirect from "@/hooks/useRedirect";
import {
  DeleteCareerByIDAPI,
  GetCareersAPI,
  UpdateCareerAPI,
} from "@/services/Careers/Careers.services";
import { ICareer } from "@/types/Career/Career.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Component from "./component/Component";

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

  const { mutate: UpdateCareer } = useMutation({
    mutationFn: UpdateCareerAPI,
    onSuccess(data, variables, context) {},
  });

  const { admin } = useRedirect();

  return (
    <Group header={career.FA.title}>
      <Grid
        gridTemplateColumns={"1fr 1fr"}
        gap={"1rem"}>
        <Component
          language={LanguagesENUM.FA}
          career={career}
        />
        <Component
          language={LanguagesENUM.EN}
          career={career}
        />
        <Grid
          gridColumn={"-1/1"}
          gridTemplateColumns={"1fr 1fr"}
          gap={"0.5rem"}
          width={"100%"}
          expanded={showActions}>
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
      </Grid>
    </Group>
  );
}
