import { Button, Grid, Group } from "@/components/UI";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { useState } from "react";
import SelectModal from "@/components/UI/SelectModal/SelectModal";
import { ICareer } from "@/types/Career/Career.types";
import { FormikContextType } from "formik";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { GetCareersAPI } from "@/services/Careers/Careers.services";
import Career from "@/app/(routes)/dashboard/careers/list/Career/Career";

interface IProps {
  formik: FormikContextType<ISection>;
  language: LanguagesENUM;
}

export default function Component(props: IProps) {
  const { formik, language } = props;

  const { values, setFieldValue, handleChange } = formik;

  const [showModal, setShowModal] = useState(false);

  const { type } = values;

  if (type !== "CAREERS_JOBS") return <></>;

  const component = values.components[language];

  const { jobs } = component;

  return (
    <Grid
      gap={"1rem"}
      color='black'
      marginTop={"1rem"}>
      <Group
        header='شغل های منتخب شده'
        minHeight={"30rem"}
        maxHeight={"30rem"}
        overflow='auto'
        variant="primary">
        <Grid gap={"1rem"}>
          {jobs.map((job, index) => {
            return (
              <Career
                career={job}
                key={index}
                showActions={false}
              />
            );
          })}
        </Grid>
      </Group>
      <Grid>
        <Button
          type='button'
          variant='warning'
          onClick={() => setShowModal(true)}
          title='انتخاب آگهی'
        />
        <SelectModal<ICareer>
          api={GetCareersAPI}
          mode='single'
          values={component.jobs}
          show={showModal}
          onRenderRow={(row, index) => (
            <Career
              key={index}
              career={row}
            />
          )}
          onChange={(rows) =>
            setFieldValue(`components[${language}].jobs`, rows)
          }
          onSubmit={(rows) => {
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)}
        />
      </Grid>
    </Grid>
  );
}
