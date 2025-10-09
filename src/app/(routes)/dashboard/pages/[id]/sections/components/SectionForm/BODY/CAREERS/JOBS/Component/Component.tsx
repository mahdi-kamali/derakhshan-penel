import { Button, Grid, Group } from "@/components/UI";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { useState } from "react";
import JOB from "../JOB/JOB";
import SelectModal from "@/components/UI/SelectModal/SelectModal";
import { ICareer } from "@/types/Career/Career.types";
import { FormikContextType } from "formik";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import { GetCareersAPI } from "@/services/Careers/Careers.services";

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
      color='black'>
      <Group header='شغل های منتخب شده'>
        {jobs.map((job,index) => {
          return <JOB data={job} key={index} />;
        })}
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
          onRenderRow={(row, index) => <JOB data={row} />}
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
