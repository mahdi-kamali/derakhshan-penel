import Form from "@/components/UI/Form/Form";
import { IPage } from "@/types/Pages/pages.types";
import {
  ISection,
  SECTIONS_TYPES_EXAMPLES,
} from "@/types/Pages/Sections/Sections.types";
import VALIDATION from "@/utils/validations";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import HEADER from "./HEADER/HEADER";
import TABS from "./TABS/TABS";
import ACTIONS from "./ACTIONS/ACTIONS";
import BODY from "./BODY/BODY";

type IProps = {
  page_id?: IPage["_id"];
  section?: ISection;
};

export default function SectionForm(props: IProps) {
  const { section, page_id } = props;

  const isCreating = section === undefined;
  const isUpdating = section !== undefined;

  const formik = useFormik<ISection>({
    initialValues: {
      _id: "",
      name: "",
      createdAt: "",
      updatedAt: "",
      isActive: true,
      ...SECTIONS_TYPES_EXAMPLES["ORDER"],
    },
    validationSchema: VALIDATION.PAGE.SECTIONS.HOME_ABOUT_US,
    onSubmit(values, formikHelpers) {},
  });

  const { setValues } = formik;

  useEffect(() => {
    if (isCreating) return;
    setValues({ ...section!! });
  }, [section]);

  return (
    <Form
      formik={formik}
      extraProps={{
        isCreating,
        isUpdating,
        page_id,
        section_id: section?._id,
      }}>
      {() => {
        return {
          TABS: TABS,
          HEADERS: HEADER,
          BODY: BODY,
          ACTIONS: ACTIONS,
        };
      }}
    </Form>
  );
}
